// passport.js

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/User");
const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
        // This payload includes the items we specified earlier
        // console.log(jwt_payload);
        const user = await User.findById(jwt_payload.id)
        try {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            console.log(error)
        }
    }));
};