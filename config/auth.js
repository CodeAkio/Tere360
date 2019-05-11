let passport = require('passport');
let jwt = require('jsonwebtoken');
let passportJWT = require('passport-jwt');
let mongoose = require('mongoose');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'MinhaChaveSecreta'
}

module.exports = {
    get auth() {
        let User = mongoose.models.Usuario;
        let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
            User.findById(jwt_payload._id).exec().then(user => {
                if (user) {
                    next(null, user);
                } else {
                    next(null, false);
                }
            })
        })

        passport.use(strategy);

        return {
            initialize: () => {
                return passport.initialize();
            },
            get authenticate() {
                return passport.authenticate('jwt', {session: false});
            }
        }
    },
    login: (name, password, callback) => {
        let User = mongoose.models.Usuario;

        User.findOne({name, password}).exec().then(user => {
            if (user) {
                let payload = {_id: user._id};
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                callback({'messagem': 'ok', token});
            } else {
                callback(false);
            }
        })
    }
}