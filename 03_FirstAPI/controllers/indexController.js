//
const indexController = require('../controllers/userController');

function getStatus(req, res, next){
    res.sendStatus(200);
};


module.exports = { getStatus };