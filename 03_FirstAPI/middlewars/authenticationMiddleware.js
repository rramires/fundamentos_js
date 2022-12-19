const keyModel = require('../models/keyModel'); 
//
function authenticate(req, res, next) {
    /*
        Type + key
        ex: ApiKey 2d56fe6a-10ba-4b37-9787-95f864ee12de
            Bearer 2d56fe6a-10ba-4b37-9787-95f864ee12de
            Basic 2d56fe6a-10ba-4b37-9787-95f864ee12de
    */
   // get authorization and parse key
    const key = req.headers['authorization'] ?
                req.headers['authorization'].replace('ApiKey ', '') :
                null;

    // validator
    if(key && keyModel.checkActiveKey(key)){
        return next();
    }
    else{
            // 401 unauthorized
        res.sendStatus(401);
    }
}

module.exports = { authenticate }