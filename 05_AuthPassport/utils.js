/**
 * Create a random password
 */
function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = '';
    for (var i = 0; i < 10; i++){
        pass += chars.charAt(Math.random() * 61);
    }
    return pass
}

module.exports = { generatePassword }