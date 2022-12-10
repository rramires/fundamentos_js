const { v4 } = require('uuid');

// global mook data
global.users = [];


function insertUser(user){
    // generate ID
    user.id = v4();
    //
    global.users.push(user);
}


function findUsers(){
    return global.users;
}


function findUser(id){
    return global.users.find(item => item.id === id);
}


function updateUser(id, user){
    global.users.forEach((item, index, array) => {
        if(item.id == id){
            user.id = id;
            array[index] = user;
            return;
        }
    });
}


function deleteUser(id){
    global.users.forEach((item, index, array) => {
        if(item.id == id){
            array.splice(index, 1);
            return;
        }
    });
}

module.exports = { insertUser, 
                   findUsers,
                   findUser,
                   updateUser,
                   deleteUser };