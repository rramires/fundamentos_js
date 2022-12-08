const express = require('express');
const { AggregationCursor } = require('mongodb');
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


/* GET new customer page. */
router.get('/new', function(req, res, next) {
  // 
  res.render('customer', { title: "Customer Registration" });
});


/* GET subimited data. */
router.post('/new', function(req, res, next) {
  // 
  const name = req.body.name;
  const age = parseInt(req.body.age);
  const state = req.body.state;
  // Validation
  name || res.redirect('/new?error=Name cannot be empty!');
  age && /[0-9]+/.test(age) || res.redirect('/new?error=Age must be a number!');
  state.length === 2 || res.redirect('/new?error=Select a state!');
  //
  const custumers = db.insertCostumer( { name, age, state } )
                      .then(result => {
                        // 
                        res.redirect('/');
                      })
                      .catch(error => console.log(error));
});

module.exports = router;
