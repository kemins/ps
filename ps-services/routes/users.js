const express = require('express');
const router = express.Router();
const userAPI = require('../api/user-api');
const responseAPI = require('../api/response-api');
const _ = require('lodash');
const Strategy = require('passport-custom');
const passport = require('passport');

passport.use('register', new Strategy(
  (req, done) => {
    const data = req.slData;
    const token = data.user.user_token;
    const {identity} = data.user;
    const email = _.chain(identity.emails)
      .find({is_verified: true})
      .get('value')
      .value();

    userAPI.getUserByToken(token)
      .then(
        (oldUser) => {
          if (oldUser) {
            done(responseAPI.getErrorData('User already registered. Please proceed with sign in.'));
          } else {
            const picture = _.first(identity.pictureUrl.split('?')),
              {displayName, gender, provider} = identity;

            userAPI.createUser({
              token,
              provider,
              displayName,
              gender,
              picture,
              email
            })
              .then((user) => done(null, user), (error) => done(responseAPI.getErrorData(error)));
          }
        },
        (error) => done(error)
      );
  }
));

passport.use('login', new Strategy(
  (req, done) => {
    userAPI.getUserByToken(req.slData.user.user_token)
      .then((user) => done(user ? null : responseAPI.getErrorData('User not found.'), user),
        (error) => done(error));
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

/* Sign in/up */
router.post('/authenticate', (req, res, next) => {
  userAPI.authenticate(req.body.connection_token)
    .then((data) => {
      req.slData = data;

      if (req.body.action === 'login') {
        passport.authenticate('login', (error, user) => {
          if (error) {
            responseAPI.handleErrorResponse(res, error.message);
          } else {
            req.login(user, (error) => {
              error ?
                responseAPI.handleErrorResponse(res, error.message) :
                responseAPI.handleSuccessResponse(res, 'You are signed in.', user);
            });
          }
        })(req, res, next);
      } else {
        passport.authenticate('register', (error, user) => {
          if (error) {
            responseAPI.handleErrorResponse(res, error.message);
          } else {
            req.login(user, (error) => {
              error ?
                responseAPI.handleErrorResponse(res, error.message) :
                responseAPI.handleSuccessResponse(res, 'You are signed up.', user);
            });
          }
        })(req, res, next);
      }
    }, (error) => responseAPI.handleErrorResponse(res, res, error));
});

module.exports = router;