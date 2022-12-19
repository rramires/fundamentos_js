const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const keysRouter = require('./routes/keys');

//
const { authenticate } = require('./middlewars/authenticationMiddleware');

const app = express();


app.use(logger('dev'));
app.use(express.json());

/*
  Routes
*/
app.use('/', indexRouter);
app.use('/users', authenticate, usersRouter);
app.use('/keys', keysRouter);


// error handler
app.use(function(err, req, res, next) {
  // log and send status error
  console.error(err);
  res.sendStatus(err.status || 500);
});

module.exports = app;
