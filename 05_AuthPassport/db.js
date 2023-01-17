const bcrypt = require('bcryptjs');
const utils = require('./utils.js');

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


module.exports = { createUser, 
                   resetPassword }