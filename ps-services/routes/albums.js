const express = require('express');
const router = express.Router();
const _ = require('lodash');
const albumAPI = require('../api/album-api');
const responseAPI = require('../api/response-api');

router.post('/', (req, res, next) => {
  const {album} = req.body,
    {name, description} = album,
    creationDate = new Date(),
    modificationDate = new Date(),
    user = req.user._id;

  albumAPI.createAlbum({
    name,
    description,
    creationDate,
    modificationDate,
    user
  })
    .then(() => responseAPI.handleSuccessResponse(res, 'Album has been created!'),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

router.get('/', (req, res, next) => {
  albumAPI.getUserAlbums(req.user._id)
    .then((albums) => responseAPI.handleSuccessResponse(res, '', {albums}),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

module.exports = router;