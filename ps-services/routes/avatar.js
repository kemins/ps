const express = require('express');
const router = express.Router();
const config = require('../config');
const ImageUtils = require('../utils/image-utils');
const userAPI = require('../routes/users').api;

const imageUtils = new ImageUtils();

/* Upload avatar */
router.post('/', function(req, res, next) {
  const user = req.user,
    id = user._id,
    data = req.body.avatar;

  const imageData = data.split(';base64,').pop(),
    extension = data.substring('data:image/'.length, data.indexOf(';base64')),
    name = `avatar.${extension}`;

  imageUtils.mountSlides(`${config.fs.users}${id}/`, name, imageData)
    .then((avatar) => {
      userAPI.getUserById(id)
        .then((model) => {
          model.picture = avatar;
          model.save((error, user) => {
            if (error) {
              sendError(res, error);
            } else {
              res.json({
                type: 'success',
                message: 'Avatar has been changed!',
                body: userAPI.transformAvatar(user.picture)
              });
            }
          });
        }, (error) => sendError(res, error));
    }, (error) => {
      sendError(res, error);
    });
});

/* Upload avatar */
router.get('/:type', function(req, res, next) {
  const user = req.user,
    id = user._id;

  userAPI.getUserById(id)
    .then((model) => model.picture[req.params.type])
    .then(
      (path) => res.sendFile(path, {root: '/'}),
      (error) => sendError(res, error)
    );
});

sendError = (response, error) => {
  response.json({
    type: 'fault',
    message: error
  });
};

module.exports = router;
