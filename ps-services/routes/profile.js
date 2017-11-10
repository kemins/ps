const express = require('express');
const router = express.Router();
const _ = require('lodash');
const userAPI = require('../api/user-api');
const responseAPI = require('../api/response-api');

router.get('/logout', (req, res) => {
  req.logout();
  responseAPI.handleSuccessResponse(res, 'You are signed out.');
});

router.post('/', (req, res, next) => {
  userAPI.updateUser(req.user._id, _.pick(req.body, ['displayName', 'email', 'gender']))
    .then((user) => responseAPI.handleSuccessResponse(res, 'Profile has been updated!!', user),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

module.exports = router;
