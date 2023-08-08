const LocalStrategy = require('passport-local').Strategy;

const db = require("../db");

module.exports = (passport) => {
    const verify = (username, password, done) => {
        db.users.findByUsername(username, (err, user) => {
            if(err) return done(err);
            if(!user) return done(null, false);

            if(!db.users.verifyPassword(user, password)) {
                return done(null, false);
            }

            return done(null, user);
        })
    };

    const option = {
        usernameField: "username",
        passwordField: "password",
    };

    passport.use('local', new LocalStrategy(option, verify));

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        db.users.findById(id, (err, user) => {
            if(err) {
                return cb(err);
            }
    
            cb(null, user);
        });
    });
};