const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//configure dotENV before importing Express Application
dotenv.config({
    path: './config.env',
});

const app = require('./app');

//Allowing cors policy to enable connections
app.use(cors())

//Configure mongoDB environmental variables
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

//Use mongoose to connect to mongoDB:
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log(`Database Connection to Mongo Atlas Established.`))

app.listen(4000, () => {
    console.log('Server is currently listening on port 4000');
});