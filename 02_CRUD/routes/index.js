const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 
  const custumers = db.findCustomers()
                      .then(customers => {
                        // console.log(customers);
                        res.render('index', { title: 'Express', customers });
                      })
                      .catch(error => console.log(error));
});

module.exports = router;
