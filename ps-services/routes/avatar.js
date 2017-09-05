const express = require('express');
const router = express.Router();
const config = require('../config');
const ImageUtils = require('../utils/image-utils');

/* Upload avatar */
router.post('/', function(req, res, next) {
  new ImageUtils().mountSlides('c:/1/test.png', req.body.avatar)
    .then(() => {
      res.json({
        type: 'success',
        message: 'Avatar has been changed!'
      });
    }, (error) => {
      res.json({
        type: 'fault',
        message: error
      });
    });
});

module.exports = router;
