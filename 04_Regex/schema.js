// docs: https://joi.dev/api/
const Joi = require('joi');
//
const schema = Joi.object({
    username: Joi.string()
                 .pattern(/abc/ig)
                 .required()
});

module.exports = schema;