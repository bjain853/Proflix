const LocalStrategy = require('passport-local').Strategy;
const UserActions = require("../Controllers/users");
const bcrypt = require("bcrypt");

module.exports = (passport) => {

    passport.use(new LocalStrategy((username, password, done) => {
        UserActions.findUserByUsername(username, (error, user) => {
            if (error) throw error;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (error, same) => {
                if (error) throw error;
                if (same) { return done(null, user); }
                else { return done(null, false); }
            })
        })
    }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.uId);
    });

    passport.deserializeUser((uId, done) => {
        UserActions.findUserById(uId, (err, user) => {
            done(err, user);
        })
    });
}


