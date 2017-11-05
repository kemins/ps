const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const userAPI = require('../routes/users').api;

router.get('/', (req, res, next) => {
  console.log('Accessing profile');

  res.json({type: 'success'});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({
    type: 'success',
    message: 'You are signed out.',
  });
});

router.post('/', (req, res, next) => {
  const user = req.user,
    id = user._id,
    profile = req.body.profile;

  userAPI.getUserById(id)
    .then((model) => {
      const changes = _.pick(profile, ['displayName', 'email', 'gender']);

      _.assign(model, changes);
      _.assign(user, changes);

      model.save((error, user) => {
        if (error) {
          sendError(res, error);
        } else {
          res.json({
            type: 'success',
            message: 'Profile has been updated!',
            body: user
          });
        }
      });
    }, (error) => sendError(res, error));
});

const sendError = (response, error) => {
  response.json({
    type: 'fault',
    message: error
  });
};

module.exports = router;