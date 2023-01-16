const express = require('express');
const router = express.Router();

/* GET signup form. */
router.get('/signup', function(req, res, next) {
  if(req.query.fail){
    res.render('signup', { title: 'Signup', message: 'Falha no cadastro do usuário!' });
  }
  else{
    res.render('signup', { title: 'Signup', message: null });
  }
});

module.exports = router;
