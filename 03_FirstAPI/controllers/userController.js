//
const userModel = require('../models/userModel'); 

function getUsers(req, res, next){
    // get all
    res.json(userModel.findUsers());
};


function getUser(req, res, next){
    // get Id param
    const id = req.params.id;
    // get one
    res.json(userModel.findUser(id));
};


function insertUser(req, res, next){
    // get user
    let user = req.body;
    // insert
    user = userModel.insertUser(user);
    // response code + inserted user with ID
    res.status(201).json(user);
}


function replaceUser(req, res, next){
    // get Id param
    const id = req.params.id;
    // update
    const user = userModel.updateUser(id, req.body, true);
    // response code + user
    res.status(200).json(user);
};


function updateUser(req, res, next){
    // get Id param
    const id = req.params.id;
    // update
    const user = userModel.updateUser(id, req.body);
    // response code + user
    res.status(200).json(user);
};


function deleteUser(req, res, next){
    // get Id param
    const id = req.params.id;
    // delete
    const idret = userModel.deleteUser(id);
    // response code + deleted user id
    res.status(200).json(idret);
};


module.exports = { getUsers,
                   getUser,
                   insertUser,
                   replaceUser,
                   updateUser,
                   deleteUser };