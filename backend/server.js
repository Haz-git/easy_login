const mongoose = require('mongoose');
const dotenv = require('dotenv');

//configure dotENV before importing Express Application
dotenv.config({
    path: './config.env',
});

const app = require('./app');

app.listen(3000, () => {
    console.log('Server is currently listening on port 3000');
});