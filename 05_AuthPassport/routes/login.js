const express = require('express');
const router = express.Router();
const passport = require('passport');

/**
 * GET home page. 
 */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', message: '', error: false });
});


/**
 * GET Login page
 */
router.get('/login', function(req, res, next) {
  if(req.query.fail){
    res.render('login', { title: 'Login', message: 'Usuário e/ou senha incorretos!', error: true });
  }
  else if (req.query.reset){
    res.render('login', { title: 'Login', message: 'A sua nova senha chegará no seu email em instantes!', error: false });
  }
  else{
    res.render('login', { title: 'Login', message: null, error: false });
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


/**
 * POST Logout
 */
router.post('/logout', function (req, res, next) {
  // logout
  req.logOut(function (err) {
    if(err){
      return next(err);
    }
    else{
      res.redirect('/login');
    }
  });
})

module.exports = router;
