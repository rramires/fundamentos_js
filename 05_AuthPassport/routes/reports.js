const express = require('express');
const router = express.Router();
//
const authMiddleware = require('../authMiddleware');


/* GET reports page. */
router.get('/', authMiddleware, function(req, res, next) {
  //
  res.render('reports', { title: 'Reports' });
});

module.exports = router;
