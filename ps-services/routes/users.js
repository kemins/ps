const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config');
const request = require('request');
const _ = require('lodash');
const fs = require('fs');
const Strategy = require('passport-custom');

const passport = require('passport');

passport.use('register', new Strategy(
  (req, done) => {
    const data = req.slData;
    const userToken = data.user.user_token;
    const identity = data.user.identity;
    const email = _.chain(identity.emails)
      .find({is_verified: true})
      .get('value')
      .value();

    getUserByToken(userToken)
      .then(
        (oldUser) => {
          if (oldUser) {
            done({
              type: 'fault',
              message: 'User already registered. Please proceed with sign in.'
            });
          } else {
            mongoose.model('User').create({
              token: userToken,
              provider: identity.provider,
              displayName: identity.displayName,
              active: true,
              gender: identity.gender,
              picture: identity.pictureUrl,
              email: email
            }, (error, user) => {
              if (error) {
                done({
                  type: 'fault',
                  error
                });
              } else {
                fs.mkdirSync(`${config.fs.users}${user._id}`);
                done(null, user);
              }
            });
          }
        },
        (error) => done(error)
      );
  }
));

passport.use('login', new Strategy(
  (req, done) => {
    console.log(req);
    getUserByToken(req.slData.user.user_token)
      .then(
        (user) => {
          let error = null;

          if (!user) {
            error = {
              type: 'fault',
              message: 'User not found.'
            };
          }
          done(error, user);
        },
        (error) => done(error)
      );
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

/* Sign in/up */
router.post('/authenticate', (req, res, next) => {
  const connectionToken = req.body.connection_token;
  const action = req.body.action;
  const socialLogin = config.socialLogin;
  const endpoint = `${socialLogin.siteDomain}/connections/${connectionToken}.json`;
  const authToken = new Buffer(socialLogin.publicKey + ':' + socialLogin.privateKey).toString('base64');

  const options = {
    uri: endpoint,
    headers: {
      'Authorization': `Basic ${authToken}`
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      handleErrorResponse(response, error);
    } else {
      req.slData = JSON.parse(body).response.result.data;
      if (action === 'login') {
        passport.authenticate('login', (error, user) => {
          if (error) {
            res.json(error);
          } else {
            req.login(user, (error) => {
              if (error) {
                res.json(error);
              } else{
                res.json({
                  type: 'success',
                  message: 'You are signed in.',
                  body: user
                });
              }
            });
          }
        })(req, res, next);
      } else {
        passport.authenticate('register', (error, user) => {
          if (error) {
            res.json(error);
          } else {
            req.login(user, (error) => {
              if (error) {
                res.json(error);
              } else {
                res.json({
                  type: 'success',
                  message: 'User successfully registered!',
                  body: user
                });
              }
            });
          }
        })(req, res, next);
      }
    }
  });
});

const searchUser = (criteria) => {
  return new Promise((resolve, reject) => {
    mongoose.model('User').find(criteria, (err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users[0]);
      }
    })
  });
};

const getUserByToken = (token) => searchUser({token: token});

const getUserById = (id) => searchUser({id: id});

const handleErrorResponse = (response, error) => {
  response.json({
    type: 'fault',
    message: error
  });
};

module.exports = router;
