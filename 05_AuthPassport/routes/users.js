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
    if (err){
      return res.redirect('/users/signup?fail=true');
    }
    else{
      const text = `Obrigado por se cadastrar ${req.body.username}, sua senha é ${req.body.password}`;
      // send email
      mail(req.body.email, 'Cadastro realizado com sucesso!', text);
      // render page
      res.render('login', { title: 'Login', message: 'User Added!' });
    }
  })
})


module.exports = router;
