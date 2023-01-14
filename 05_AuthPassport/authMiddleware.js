/**
 * Authentication Middleware
 * Use in restricted routes
 */
module.exports = function (req, res, next){
    // continue if authenticated
    if(req.isAuthenticated()){
      next();
    }
    else{
      res.redirect('/login?fail=true');
    }
}