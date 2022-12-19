const express = require('express');
const router = express.Router();
//
const keysModel = require('../models/keyModel'); 


/**
 * GET keys listing. 
 */
router.get('/', (req, res, next) => {
    // get all
    res.json(keysModel.findKeys());
});


/**
 * GET key 
 */
router.get('/:key', (req, res, next) => {
    // get Id param
    const key = req.params.key;
    // get one
    res.json(keysModel.findKey(key));
});


/**
 * POST - Create NEW key. 
 */
router.post('/', (req, res, next) => {
    // create
    key = keysModel.createKey();
    // response code + inserted key
    res.status(201).json(key);
});


/**
 * DELETE key 
 */
router.delete('/:key', (req, res, next) => {
    // get Id param
    const key = req.params.key;
    // get one
    res.json(keysModel.deleteKey(key));
});


module.exports = router;
