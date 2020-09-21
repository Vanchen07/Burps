const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {

        User.findById(jwt_payload.data._id)
        .then(user => {
            if (user) {
                return done(null, user) 
            } else {
                return done(null, false)
            }
        })
        .catch(err => console.log(err))
    }));
};
