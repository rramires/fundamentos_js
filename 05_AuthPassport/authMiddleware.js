const permissions = require('./permissions');

/**
 * Authentication Middleware
 * Use in restricted routes
 */
module.exports = function (req, res, next){
    // continue if authenticated
    if(req.isAuthenticated() && permissions(req)){
      next();
    }
    else{
      res.redirect('/login?fail=true');
    }
}