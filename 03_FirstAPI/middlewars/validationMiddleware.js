const userSchema = require('../models/userSchema');

/**
 * Schema Validator
 */
function schemaValidator(req, res, next) {
    // validate
    const { error } = userSchema.validate(req.body);
    if(error){
        // 422 = Unprocessable Entity
        return res.status(422).json({ error: error.details }); 
    }
    else{
        // call next middleware
        next();
    }
}

module.exports = { schemaValidator }