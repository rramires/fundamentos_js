const express = require('express');
const router = express.Router();
const db = require("../db");
//
const authMiddleware = require('../authMiddleware');


/* GET home page. */
// page? = optional param
router.get('/:page?', authMiddleware, function(req, res, next) {
  //
  const page = parseInt(req.params.page || "1");
  console.log('page: ', page)
  // find users
  db.findAllUsers(page, (err, users) => {
    if(err){
      throw new Error(err);
    }
    else{
      res.render('index', { title: 'Private Área', user: req.user.username, users });
    }
  });
});

module.exports = router;
