// docs: https://joi.dev/api/
const Joi = require('joi');

/*
 RegEx no Javascript 
 Pattern delimitado por barras:
 /pattern/flags .exec() ou .test()

 ex: retorna um array de resultados
const arrResult = /abc/ig.exec();

 ex: retorna um booleano
const isValid = /abc/i.test();
 */

//
const schema = Joi.object({
    username: Joi.string()
                 .pattern(/abc/ig)
                 .required()
});

module.exports = schema;