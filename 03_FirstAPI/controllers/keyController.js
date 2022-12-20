//
const keysModel = require('../models/keyModel'); 


function findKeys(req, res, next){
    // get all
    res.json(keysModel.findKeys());
};


function findKey(req, res, next){
    // get Id param
    const key = req.params.key;
    // get one
    res.json(keysModel.findKey(key));
};


function createKey(req, res, next){
    // create
    key = keysModel.createKey();
    // response code + inserted key
    res.status(201).json(key);
};


function deleteKey(req, res, next){
    // get Id param
    const key = req.params.key;
    // get one
    res.json(keysModel.deleteKey(key));
}

module.exports = { findKeys,
                   findKey,
                   createKey,
                   deleteKey };