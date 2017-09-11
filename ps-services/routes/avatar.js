const express = require('express');
const router = express.Router();
const config = require('../config');
const ImageUtils = require('../utils/image-utils');

/* Upload avatar */
router.post('/', function(req, res, next) {
  const user = req.user,
    id = user._id,
    data = req.body.avatar;

  const imageData = data.split(';base64,').pop(),
    extension = data.substring('data:image/'.length, data.indexOf(';base64')),
    name = `avatar.${extension}`;

  new ImageUtils().mountSlides(`${config.fs.users}${id}/`, name, imageData)
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
