const { v4 } = require('uuid');
const fs = require('fs');

// File System Mock data
const FILE_NAME = "keys.json"
// const FILE_REL = "./" + FILE_NAME;
const FILE_PATH = require("path").join(__dirname, FILE_NAME);


function findKeys(){
    // check
    if(!fs.existsSync(FILE_PATH)){
        return [];
    }
    // get raw
    const rawData = fs.readFileSync(FILE_PATH);
    // convert to JSON
    return JSON.parse(rawData);
}


function findKey(key){
    // get all
    const keys = findKeys();
    //
    return keys.find(item => item.key === key);
}


function checkActiveKey(key){
    // get all
    const keys = findKeys();
    //
    return keys.find(item => item.key === key && item.enabled);
}


function createKey(){
    // get all
    const keys = findKeys();
    // new
    const apiKey = {
        key: v4(),
        enabled: true,
        lastUsed: null
    }
    // add key
    keys.push(apiKey);
    // write to filesystem
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys));
    //
    return apiKey;
}


function deleteKey(key){
    // get all
    const keys = findKeys();
    //
    keys.forEach((item, index, array) => {
        if(item.key == key){
            array.splice(index, 1);
            //
            return;
        }
    });
    // write to filesystem
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys));
    //
    return key;
}


module.exports = { createKey,
                   findKeys,
                   findKey,
                   checkActiveKey,
                   deleteKey };