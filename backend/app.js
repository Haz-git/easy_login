const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter')

//Express Middleware:
app.use(express.json()); //This enables req body parsing.

//Routes:
app.use('/api/', indexRouter);

module.exports = app;