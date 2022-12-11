const express = require('express');
const router = express.Router();
//
const db = require('../db'); 


/**
 * GET users listing. 
 */
router.get('/', function(req, res, next) {
  // get all
  res.json(db.findUsers());
});


/**
 * POST - Insert NEW user. 
 */
router.post('/', function(req, res, next) {
  // insert
  const user = db.insertUser(req.body);
  // response code + inserted user with ID
  res.status(201).json(user);
});


/**
 * PUT - Update User
 */
router.put('/:id', function(req, res, next) {
  // get Id param
  const id = req.params.id;
  // update
  const user = db.updateUser(id, req.body);
  // response code + user
  res.status(200).json(user);
});


/**
 * PUT - Update User
 */
router.delete('/:id', function(req, res, next) {
  // get Id param
  const id = req.params.id;
  // delete
  const idret = db.deleteUser(id);
  // response code + deleted user id
  res.status(200).json(idret);
});


module.exports = router;
