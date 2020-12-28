const LocalStrategy = require('passport-local').Strategy;
const UserActions = require("../Controllers/users");
const bcrypt = require("bcrypt");

module.exports = (passport) => {

    passport.use(new LocalStrategy((username, password, done) => {
        UserActions.findUserByUsername(username, (error, user) => {
            if (error) done(error);
            if (!user) return done(null, false, { message: "Incorrect username" });
            bcrypt.compare(password, user.password, (error, same) => {
                if (error) done(error);
                if (same) { return done(null, user); }
                else { return done(null, false, { message: "Incorrect Password" }); }
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


