const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');

router.post('/', (req, res, next) => {
  const {album} = req.body,
    {name, description} = album,
    creationDate = new Date(),
    modificationDate = new Date(),
    user = req.user._id;

  mongoose.model('Album').create({
    name,
    description,
    creationDate,
    modificationDate,
    user
  }, (error, album) => {
    if (error) {
      sendError(res, error);
    } else {
      sendSuccess(res, 'Album has been created!');
    }
  });
});

const sendError = (response, error) => {
  response.json({
    type: 'fault',
    message: error
  });
};

const sendSuccess = (response, message) => {
  response.json({
    type: 'success',
    message
  });
};

module.exports = router;