const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter')

app.use('/api/', indexRouter);

module.exports = app;