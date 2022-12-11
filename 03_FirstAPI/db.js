const { v4 } = require('uuid');

// Global Mock data
global.users = [];


function insertUser(user){
    // generate ID
    user.id = v4();
    //
    global.users.push(user);
    //
    return user;
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
            //
            return;
        }
    });
    return user;
}


function deleteUser(id){
    global.users.forEach((item, index, array) => {
        if(item.id == id){
            array.splice(index, 1);
            //
            return;
        }
    });
    return id;
}


module.exports = { insertUser, 
                   findUsers,
                   findUser,
                   updateUser,
                   deleteUser };