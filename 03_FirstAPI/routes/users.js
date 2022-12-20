const express = require('express');
const router = express.Router();
//
const { schemaValidator } = require('../middlewares/validationMiddleware');
//
const userController = require('../controllers/userController');


/**
 * GET users listing. 
 */
router.get('/', userController.getUsers);


/**
 * GET user 
 */
router.get('/:id', userController.getUser);


/**
 * POST - Insert NEW user. 
 */
router.post('/', schemaValidator, userController.insertUser);


/**
 * PUT - Replace User
 */
router.put('/:id', schemaValidator, userController.replaceUser);


/**
 * PATCH - update User
 */
router.patch('/:id', userController.updateUser);


/**
 * DELETE - Delete User
 */
router.delete('/:id', userController.deleteUser);


module.exports = router;
