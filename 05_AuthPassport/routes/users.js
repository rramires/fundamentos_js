const express = require('express');
const router = express.Router();
const db = require('../db');
const mail = require('../mail');

/* GET signup form. */
router.get('/signup', function(req, res, next) {
  if(req.query.fail){
    res.render('signup', { title: 'Signup', message: 'Falha no cadastro do usuário!' });
  }
  else{
    res.render('signup', { title: 'Signup', message: null });
  }
});


/* POST user */
router.post('/signup', function (req, res, next) {
  //
  db.createUser(req.body.username, req.body.password, req.body.email, req.body.profile, (err, result) => {
    if(err){
      return res.redirect('/users/signup?fail=true');
    }
    else{
      const msg = `Obrigado por se cadastrar ${req.body.username}, sua senha é ${req.body.password}`;
      console.log('Email: ', msg);
      // send email
      mail(req.body.email, 'Cadastro realizado com sucesso!', msg);
      // render page
      res.render('login', { title: 'Login', message: 'User Added!' });
    }
  })
});


/* GET forgot form. */
router.get('/forgot', function(req, res, next) {
  //
  res.render('forgot', { title: 'Forgot', message: null });
});


router.post('/forgot', function (req, res, next) {
  //
  db.resetPassword(req.body.email, (err, result, newPassword) => {
    if(err){
      return res.redirect('/login?reset=true');
    }
    else{
      const msg = `Olá,sua nova senha é ${newPassword} Sua senha antiga, não funciona mais!`;
      console.log('Email: ', msg);
      // send email
      mail(req.body.email, 'Sua senha foi alterada!', msg);
      // redirect
      res.redirect('/login');
    }
  })
});


/* GET edit user */
router.get('/edit/:idUser?', function (req, res, next) {
  // TODO: Implement edit user
  // 501 Not Implemented
  res.sendStatus(501);
});


/* POST delete user */
router.post('/delete/:idUser?', function (req, res, next) {
  // TODO: Implement delete user
  // 501 Not Implemented
  res.sendStatus(501);
});

module.exports = router;
