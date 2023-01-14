const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//
// routers
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');

/**
 * Create Express App
 */
const app = express();
/**
 * authentication
 */
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
// configure passport
require('./auth')(passport);
// configure session store in database
app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URL, // Connection URL
    ttl: process.env.EXPIRE_TIME * 60, // Expiration time
    autoRemove: 'native' // autoRemove defined in database
  }),
  secret: process.env.SESSION_SECRET, // used in encryption
  resave: false, 
  saveUninitialized: false,
  cookie: { // Cookie expiration time
    maxAge: process.env.EXPIRE_TIME * 60 * 1000 
  }
}));
app.use(passport.initialize());
app.use(passport.session());

//
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
// define routes
app.use('/', loginRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//
module.exports = app;
