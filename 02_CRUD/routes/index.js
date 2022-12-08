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

/* GET home page. */
router.get('/new', function(req, res, next) {
  // 
  res.render('customer', { title: "Customer Registration" });
});

module.exports = router;
