var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users',
                        users: [
                                {name: 'Fulano',
                                 age: 20},
                                {name: 'Sicrano',
                                 age: 35},
                                {name: 'Beltrano',
                                 age: 47}
                        ]});
});

module.exports = router;
