// imports
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport){

    /**
     * Find user by username
     */
    function findUser(username, callback){
        // 
        global.db.collection('users').findOne({ username }, function(err, doc){
            callback(err, doc);
        });
    }


    /**
     * Find user by id
     */
    function findUserById(id, callback){
        // 
        global.db.collection('users').findOne({ _id: new ObjectId(id) }, function(err, doc){
            callback(err, doc);
        });
    }


    /**
     * Serialize cookie user
     */
    passport.serializeUser(function(user, done){
        done(null, user._id);
    });


    /**
     * Deserialize cookie user
     */
    passport.deserializeUser(function(id, done){
        findUserById(id, function(err, user){
            done(err, user);
        });
    });


    /**
     * Verify authentication
     */
    passport.use( new LocalStrategy( {
                        usernameField: "username",
                        upasswordField: "password"
                    },
                    (username, password, done) => {
                        // find user by username
                        findUser(username, (err, user) => {
                            // if error
                            if(err) { 
                                return done(err);
                            }
                            // if user inexists
                            if(!user) { 
                                return done(null, false);
                            }
                            // compare password
                            bcrypt.compare(password. user.password, (err, isValid) => {
                                // if error
                                if(err) { 
                                    return done(err);
                                }
                                // if invalid
                                if(!isValid) { 
                                    return done(null, false);
                                }
                                // if valid
                                return done(null, user);
                            });
                        });
                    } )
    );
};