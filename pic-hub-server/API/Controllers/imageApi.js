const express = require('express');
const Image = require('../../Models/image');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');
const path = require('path');
const config = require('../../config');

const router = express.Router();

const extensions = ['.png', '.jpg', '.jpeg', '.gif'];
const upload = multer({ dest: config.DATA_DIR });

function base64_decode(base64Image, fileName) {
    const fullPath = path.join(config.DATA_DIR, fileName);
    fs.writeFile(fullPath, base64Image);
}

router.post(config.API_URL + '/upload', upload.single('image'), (req, res) => {
    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    const tempPath = req.file.path;
    const targetPath = tempPath + fileExtension;
    if (extensions.includes(fileExtension)) {
        fs.rename(tempPath, targetPath, (err) => {
            if (err) {
                res.status(500).send('Something went wrong');
            }
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

module.exports = router;
