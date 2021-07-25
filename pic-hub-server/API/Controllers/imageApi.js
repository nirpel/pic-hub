const express = require('express');
const Image = require('../../Models/image');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');
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
            res.status(200).send(`${req.file.originalname} uploaded successfully.`);
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

const initImagesData = (image) => {
    let images = [];
    images.push(image);
    fs.writeFile(imagesData, JSON.stringify(images), (err) => {
        if (err) console.error(err);
    });
}

module.exports = router;
