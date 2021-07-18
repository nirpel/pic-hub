const express = require('express');
const config = require('../config');
const imageApi = require('./Controllers/imageApi');

const app = express();
app.use(express.json());
app.use(imageApi);

app.listen(config.PORT, () => {
    console.log('Server is up on', config.PORT);
    console.log(config.DATA_DIR);
})