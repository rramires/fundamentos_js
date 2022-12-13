const { v4 } = require('uuid');
const fs = require('fs');

// File System Mock data
const FILE_NAME = "users.json"
// const FILE_REL = "./" + FILE_NAME;
const FILE_PATH = require("path").join(__dirname, FILE_NAME);


function findUsers(){
    // check
    if(!fs.existsSync(FILE_PATH)){
        return [];
    }
    // get raw
    const rawData = fs.readFileSync(FILE_PATH);
    // convert to JSON
    return JSON.parse(rawData);
}


function insertUser(user){
    // get users
    const users = findUsers();
    // generate ID
    user.id = v4();
    //
    users.push(user);
    // write to filesystem
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    //
    return user;
}


function findUser(id){
    // get users
    const users = findUsers();
    //
    return users.find(item => item.id === id);
}


function updateUser(id, user){
    // get users
    const users = findUsers();
    //
    users.forEach((item, index, array) => {
        if(item.id == id){
            user.id = id;
            array[index] = user;
            //
            return;
        }
    });
    // write to filesystem
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    //
    return user;
}


function deleteUser(id){
    // get users
    const users = findUsers();
    //
    users.forEach((item, index, array) => {
        if(item.id == id){
            array.splice(index, 1);
            //
            return;
        }
    });
    // write to filesystem
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    //
    return id;
}


module.exports = { insertUser, 
                   findUsers,
                   findUser,
                   updateUser,
                   deleteUser };