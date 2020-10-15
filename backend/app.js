const express = require('express');
const cors = require('cors');
const app = express();

//Allowing cors policy to enable connections
app.use(cors(3000))

const indexRouter = require('./routes/indexRouter')

//Express Middleware:
app.use(express.json()); //This enables req body parsing.

//Routes:
app.use('/api/', indexRouter);

module.exports = app;