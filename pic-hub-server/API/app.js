const express = require('express');
const cors = require('cors');
const config = require('../config');
const imageApi = require('./Controllers/imageApi');

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(imageApi);

app.listen(config.PORT, () => {
    console.log('Server is up on', config.PORT);
    console.log(config.DATA_DIR);
})