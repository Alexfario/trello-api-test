const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');


const indexRouter = require('./routes/index');
const cardsRouter = require('./routes/cards');
const boardsRouter = require('./routes/boards');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/boards', boardsRouter);

module.exports = app;
