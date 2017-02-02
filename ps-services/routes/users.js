var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('../config');
var request = require('request');
var _ = require('lodash');


/* Sign up */
router.post('/authenticate', function(req, res, next) {
  let connectionToken = req.body.connection_token;
  let action = req.body.action;
  let socialLogin = config.socialLogin;
  let endpoint =  `${socialLogin.siteDomain}/connections/${connectionToken}.json`;
  let authToken = new Buffer(socialLogin.publicKey + ':' + socialLogin.privateKey).toString('base64');

  let options = {
    uri: endpoint,
    headers: {
      'Authorization': `Basic ${authToken}`
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      handleErrorResponse(response, error);
    } else {
      let data = JSON.parse(body).response.result.data;
      let userToken = data.user.user_token;
      let identity = data.user.identity;

      getUserByToken(userToken).then(function(user) {
        let email = _.chain(identity.emails)
          .find({is_verified: true})
          .get('value')
          .value();

        if (action === 'login') {
          if (user) {
            res.json({
              type: 'success',
              message: 'You are signed in.',
              body: user
            });
          } else {
            res.json({
              type: 'fault',
              message: 'User not found.'
            });
          }
        } else {
          if (user) {
            res.json({
              type: 'fault',
              message: 'User already registered. Please proceed with sign in.'
            });
          } else {
            let user = {
              token: userToken,
              provider: identity.provider,
              displayName: identity.displayName,
              active: true,
              gender: identity.gender,
              picture: identity.pictureUrl,
              email: email
            };

            mongoose.model('User').create(user, function(error) {
              if (error) {
                handleErrorResponse(response, error)
              } else {
                res.json({
                  type: 'success',
                  message: 'User successfully registered!'
                });
              }
            });
          }
        }
      }, (error) => handleErrorResponse(response, error));
    }
  });
});


let searchUser = (criteria) => {
  return new Promise(function(resolve, reject) {
    mongoose.model('User').find(criteria, function(err, users) {
      if (err) {
        reject(err);
      } else {
        resolve(users[0]);
      }
    })
  });
};

let getUserByToken = (token) => searchUser({token: token});

let getUserById = (id) => searchUser({id: id});

let handleErrorResponse = (response, error) => {
  response.json({
    type: 'fault',
    message: error
  });
};

module.exports = router;
