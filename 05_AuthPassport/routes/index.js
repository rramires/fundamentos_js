const express = require('express');
const router = express.Router();
//
const authMiddleware = require('../authMiddleware');

/* GET home page. */
router.get('/', authMiddleware, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
