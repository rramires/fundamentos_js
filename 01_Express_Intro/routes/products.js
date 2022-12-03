var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Products',
                        products: [
                                {name: 'Notebook',
                                 price: 5000},
                                {name: 'Celular',
                                 price: 2000},
                                {name: 'Webcam',
                                 price: 400}
                        ]});
});

module.exports = router;
