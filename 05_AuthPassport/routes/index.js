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
  // count users
  db.countAll((err, total) => {
    if(err){
      throw new Error(err);
    }
    // calculate qtd pages
    const qtyPages = Math.ceil(total / db.PAGE_SIZE);
    // find users
    db.findAllUsers(page, (err, users) => {
      if(err){
        throw new Error(err);
      }
      else{
        res.render('index', { title: 'Private Área', 
                              user: req.user.username, 
                              users, 
                              total, 
                              qtyPages, 
                              page, 
                              pageSize: db.PAGE_SIZE,
                              profile: String(req.user.profile) });
      }
    });
  });
});

module.exports = router;
