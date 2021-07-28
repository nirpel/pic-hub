const express = require('express');
const Category = require('../../Models/category');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
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
    let newCategory = createNewCategory(req.body.title);
    if (isCategoryExist(newCategory.title)) {
        res.status(403).send(JSON.stringify(`Category with title ${newCategory.title} already exists`));
    } else {
        try {
            addCategory(newCategory);
            res.status(200).send(JSON.stringify(`Category ${newCategory.title} added successfully`));
        } catch (err) {
            res.status(500).send(err);
        }
    }
});

const addCategory = (newCategory) => {
    let categories = getCategories();
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
}

const initCategories = (newCategory) => {
    let categories = [];
    categories.push(newCategory);
    fs.writeFile(categoriesData, JSON.stringify(categories), (err) => {
        if (err) console.error(err);
    });
}

const isCategoryExist = (categoryTitle) => {
    let categories = getCategories();
    let newTitle = categoryTitle.toLowerCase();
    return categories.includes(cat => cat.title.toLowerCase() === newTitle);
}

const createNewCategory = (categoryTitle) => {
    return new Category(clacNewId(), categoryTitle);
}

const clacNewId = () => {
    let categories = getCategories();
    let newId = 0;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id > newId) {
            newId = categories[i].id;
        }
    }
    return newId + 1;
}

const getCategories = () => {
    let categories = [];
    fs.readFile(categoriesData, (err, data) => {
        if (err) throw err;
        categories = JSON.parse(data);
    });
    return categories;
}

module.exports = router;