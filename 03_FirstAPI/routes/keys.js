const express = require('express');
const router = express.Router();
//
const keyController = require('../controllers/keyController');


/**
 * GET keys listing. 
 */
router.get('/', keyController.findKeys);


/**
 * GET key 
 */
router.get('/:key', keyController.findKey);


/**
 * POST - Create NEW key. 
 */
router.post('/', keyController.createKey);


/**
 * DELETE key 
 */
router.delete('/:key', keyController.deleteKey);


module.exports = router;
