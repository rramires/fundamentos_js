const express = require('express');
const router = express.Router();
//
const db = require('../models/db'); 
//
const userSchema = require('../models/userSchema');


/**
 * GET users listing. 
 */
router.get('/', function(req, res, next) {
  // get all
  res.json(db.findUsers());
});


/**
 * GET user 
 */
router.get('/:id', function(req, res, next) {
  // get Id param
  const id = req.params.id;
  // get one
  res.json(db.findUser(id));
});


/**
 * POST - Insert NEW user. 
 */
router.post('/', function(req, res, next) {
  // get user
  let user = req.body;

  // validate
  const { error } = userSchema.validate(user);
  if(error){
    // 422 = Unprocessable Entity
    return res.status(422).json({ error: error.details }); 
  }

  // insert
  user = db.insertUser(user);
  // response code + inserted user with ID
  res.status(201).json(user);
});


/**
 * PUT - Replace User
 */
router.put('/:id', function(req, res, next) {
  // get Id param
  const id = req.params.id;
  // update
  const user = db.updateUser(id, req.body, true);
  // response code + user
  res.status(200).json(user);
});


/**
 * PATCH - update User
 */
router.patch('/:id', function(req, res, next) {
  // get Id param
  const id = req.params.id;
  // update
  const user = db.updateUser(id, req.body);
  // response code + user
  res.status(200).json(user);
});


/**
 * DELETE - Update User
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
