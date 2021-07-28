const express = require('express');
const Image = require('../../Models/image');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const config = require('../../config');

const router = express.Router();

const extensions = ['.png', '.jpg', '.jpeg', '.gif'];
const upload = multer({ dest: config.UPLOADS_DIR });
const imagesData = config.DATA_DIR + '\\images.json';

router.get(config.API_URL + '/images', (req, res) => {
    fs.readFile(imagesData, (err, data) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        res.status(200).json(JSON.parse(data));
    });
})

router.post(config.API_URL + '/upload', upload.single('image'), (req, res) => {
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    const tempPath = req.file.path;
    const targetPath = tempPath + fileExtension;
    if (extensions.includes(fileExtension)) {
        fs.rename(tempPath, targetPath, (err) => {
            if (err) {
                res.status(500).send('Something went wrong');
            }
            saveImage(req.file.filename + fileExtension);
            res.status(200).send(JSON.stringify(`${req.file.originalname} uploaded successfully.`));
        });
    }
    else {
        fs.unlink(tempPath, (err) => {
            if (err) {
                res.status(500).send('Something went wrong');
            }
            res.status(403).send('Only: .png / .jpg / .jpeg / .gif are allowed.');
        });
    }
});

router.post(config.API_URL + '/edit-image', (req, res) => {
    if (!req.body) {
        res.status(403).send('No image has been sent to edit.');
    }
    try {
        editImage(req.body);
        res.status(200).send(JSON.stringify(`Image: ${req.body.fileName} updated successfully.`));
    } catch (err) {
        res.status(403).send(err.message);
    }
});

const saveImage = (fileName) => {
    let newImage = new Image(fileName);
    fs.readFile(imagesData, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (!data) { //file is empty
                initImagesData(newImage);
            }
            else {
                let images = JSON.parse(data); //now it an object
                images.push(newImage); //add some data
                json = JSON.stringify(images); //convert it back to json
                fs.writeFile(imagesData, json, (err) => {
                    if (err) console.error(err);
                }); // write it back 
            }
        }
    });
}

const createFullImage = (imageData) => {
    return new Image(
        imageData.fileName,
        imageData.caption,
        imageData.categories,
        imageData.location,
        imageData.isFavorite,
        imageData.isPrivate
    );
}

const editImage = (imageData) => {
    let editedImage = createFullImage(imageData);
    fs.readFile(imagesData, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (!data) { //file is empty
                console.error('Images table is empty');
            }
            else {
                let images = JSON.parse(data); //now it an object
                let oldImage = images.find(img => img.fileName === editedImage.fileName); //find old image to replace
                if (!oldImage) { // ensure image is found
                    throw new Error('Required image to edit does not exist');
                }               
                images.splice(images.indexOf(oldImage), 1); // remove old image
                images.push(editedImage); // add edited image
                json = JSON.stringify(images); //convert it back to json
                fs.writeFile(imagesData, json, (err) => {
                    if (err) console.error(err);
                }); // write it back 
            }
        }
    });
}

const initImagesData = (image) => {
    let images = [];
    images.push(image);
    fs.writeFile(imagesData, JSON.stringify(images), (err) => {
        if (err) console.error(err);
    });
}

module.exports = router;
