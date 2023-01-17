const express = require('express');
const router = express.Router();
const db = require("../db");
//
const authMiddleware = require('../authMiddleware');


/* GET home page. */
router.get('/', authMiddleware, function(req, res, next) {
  // find users
  db.findAllUsers((err, users) => {
    if(err){
      throw new Error(err);
    }
    else{
      res.render('index', { title: 'Private Área', user: req.user.username, users });
    }
  });
});

module.exports = router;
