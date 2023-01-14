const express = require('express');
const router = express.Router();
const passport = require('passport');

/**
 * GET home page. 
 */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', message: '' });
});


/**
 * GET Login page
 */
router.get('/login', function(req, res, next) {
  if(req.query.fail){
    res.render('login', { title: 'Login', message: 'Usuário e/ou senha incorretos!' });
  }
  else{
    res.render('login', { title: 'Login', message: null });
  }
});


/**
 * POST Login credentials for authenticate
 */
router.post('/login',
  // passport.authenticate is a middlewre
  passport.authenticate('local', { 
    successRedirect: '/index', 
    failureRedirect: '/login?fail=true' 
  })
);

module.exports = router;
