const bcrypt = require('bcryptjs');

/**
 * Add new user
 */
function createUser(username, password, email, profile, callback) {
    //
    const cryptoPassword = bcrypt.hashSync(password, 12);
    //
    global.db.collection("users").insertOne({ username, password: cryptoPassword, email, profile }, callback);
}


module.exports = { createUser }