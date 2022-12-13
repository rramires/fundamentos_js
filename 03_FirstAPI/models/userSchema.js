const Joi = require('joi');

module.exports = Joi.object({
    
    name: Joi.string()
             .min(5)
             .max(150)
             .required(),

    age: Joi.number()
              .integer()
              .min(18)
              .max(150)
              .required(),

    email: Joi.string()
              /* 
                minDomainSegments 2 = @some.some
                tlds = domain restriction
              */
              .email( { 
                        minDomainSegments: 2,
                        tlds: { allow: ['com', 'net', 'br'] }
                    })
              .required(),

    pass: Joi.string()
              .min(8)
              .max(32)
              // letters - numbers - ignore case - no spaces
              .pattern(/^(?=.*[a-z])(?=.*[0-9])(?!.*\\s)/i)
              .required()

});

/* Regex password sample:

^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>])(?!.*\\s).{8,20}$

^                                   # start of line
  (?=.*[0-9])                       # positive lookahead, digit [0-9]
  (?=.*[a-z])                       # positive lookahead, one lowercase character [a-z]
  (?=.*[A-Z])                       # positive lookahead, one uppercase character [A-Z]
  (?=.*[!@#&()–[{}]:;',?/*~$^+=<>]) # positive lookahead, one of the special character in this [..]
  (?!.*\\s)                         # no spaces
  .                                 # matches anything
  {8,20}                            # length at least 8 characters and maximum of 20 characters
$                                   # end of line

*/