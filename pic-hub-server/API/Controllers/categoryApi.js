const express = require('express');
const Category = require('../../Models/category');
const fs = require('fs');
const config = require('../../config');

const router = express.Router();

const categoriesData = config.DATA_DIR + '\\categories.json';

router.get(config.API_URL + '/categories', (req, res) => {
    fs.readFile(categoriesData, (err, data) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        res.status(200).json(JSON.parse(data));
    });
});

router.post(config.API_URL + '/add-category', (req, res) => {
    let newCategory = new Category(req.body.title);
    try {
        addCategory(newCategory);
        res.status(200).send(JSON.stringify(`Category ${newCategory.title} added successfully`));
    } catch (err) {
        res.status(500).send(err);
    }
});

const addCategory = (newCategory) => {
    fs.readFile(categoriesData, (err, data) => {
        if (err) throw err;
        let categories = JSON.parse(data)
        if (!categories) {
            initCategories(newCategory);
        }
        else {
            categories.push(newCategory);
            json = JSON.stringify(categories); //convert it back to json
            fs.writeFile(categoriesData, json, (err) => {
                if (err) console.error(err);
            }); // write it back 
        }
    });
}

module.exports = router;