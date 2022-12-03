var express = require('express');
var router = express.Router();

// Mook data
global.products = [{category: "Info", 
                    name: 'Notebook',
                    price: 5000},
                   {category: "Info",
                    name: 'Celular',
                    price: 2000},
                   {category: "Info",
                    name: 'Webcam',
                    price: 400},
                   {category: "Office",
                    name: 'Paper',
                    price: 50}];

global.categories = ["Info", "Office"];

/* GET products */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Products', products:  global.products });
});


/* GET add form */
router.get('/add', function(req, res, next) {
  res.render('addproducts', { title: 'Add Products', products:  global.products });
});


/* ADD products */
router.post('/', function(req, res, next) {
  // insert
  global.products.push({ name: req.body.name, price: req.body.price, category: req.body.category });
  // return to prducts
  res.render('products', { title: 'Products', products:  global.products });
});


module.exports = router;
