const bcrypt = require('bcryptjs');
const utils = require('./utils.js');

// number of users pagination
const PAGE_SIZE = 5;

/**
 * Add new user
 */
function createUser(username, password, email, profile, callback) {
    //
    const cryptoPassword = bcrypt.hashSync(password, 12);
    //
    global.db.collection("users").insertOne({ username, password: cryptoPassword, email, profile }, callback);
}


/**
 * Reset password
 */
function resetPassword(email, callback) {
    // generate pass
    const newPassword = utils.generatePassword();
    // encrypt
    const cryptoPassword = bcrypt.hashSync(newPassword, 12);
    // update in database
    global.db.collection("users").updateOne({ email: email }, { $set: { password: cryptoPassword } }, (err, res) => {
        callback(err, res, newPassword);
    });
}


/**
 * Get all users
 */
function findAllUsers(page, callback) {
    //
    const totalSkip = (page - 1) * PAGE_SIZE;
    //
    global.db.collection("users").find().skip(totalSkip).limit(PAGE_SIZE).toArray(callback);
}


/**
 * Get total users
 */
function countAll(callback) {
    global.db.collection("users").countDocuments(callback);
}


module.exports = { createUser, 
                   resetPassword,
                   findAllUsers,
                   countAll,
                   PAGE_SIZE }