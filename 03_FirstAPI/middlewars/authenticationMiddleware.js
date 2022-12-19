const keyModel = require('../models/keyModel'); 
//
function authenticate(req, res, next) {
    /*
        Type + key
        ex: ApiKey 2d56fa6a-10bc-4b37-9787-95f864ee12ce
            Bearer 2d56fa6a-10bc-4b37-9787-95f864ee12ce
            Basic 2d56fa6a-10bc-4b37-9787-95f864ee12ce
    */
   // get authorization and parse key
    const key = req.headers['authorization'].replace('ApiKey ', '');
    // validator
    if(keyModel.checkActiveKey(key)){
        return next();
    }
    else{
        // 401 unauthorized
        res.sendStatus(401);
    }
}

module.exports = { authenticate }