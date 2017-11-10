const express = require('express');
const router = express.Router();
const config = require('../config');
const imageUtils = require('../utils/image-utils');
const userAPI = require('../api/user-api');
const responseAPI = require('../api/response-api');

/* Upload avatar */
router.post('/', (req, res, next) => {
  const user = req.user,
    id = user._id,
    data = req.body.avatar;

  const imageData = data.split(';base64,').pop(),
    extension = data.substring('data:image/'.length, data.indexOf(';base64')),
    name = `avatar.${extension}`;

  imageUtils.mountSlides(`${config.fs.users}${id}/`, name, imageData)
    .then((avatar) => userAPI.updateAvatar(id, avatar))
    .then((user) => responseAPI.handleSuccessResponse(res, 'Avatar has been updated!',
      userAPI.transformAvatar(user.picture)),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

/* Send avatar back */
router.get('/:type', (req, res, next) => {
  const user = req.user,
    id = user._id;

  userAPI.getUserById(id)
    .then(({picture}) => picture[req.params.type])
    .then(
      (path) => res.sendFile(path, {root: '/'}),
      ({message}) => responseAPI.handleErrorResponse(res, message)
    );
});

module.exports = router;
