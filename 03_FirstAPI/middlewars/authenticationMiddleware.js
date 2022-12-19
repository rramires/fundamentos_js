//
function authenticate(req, res, next) {
    // fake validator
    if(req.headers['authorization'] === '123'){
        return next();
    }
    else{
        // 401 unauthorized
        res.sendStatus(401);
    }
}

module.exports = { authenticate }