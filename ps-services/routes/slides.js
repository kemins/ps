const express = require('express');
const router = express.Router();
const slideAPI = require('../api/slide-api');
const responseAPI = require('../api/response-api');

/* GET home page. */
router.get('/', (req, res, next) => {
  slideAPI.getAllSlides()
    .then((slides) => responseAPI.handleSuccessResponse(res, '', {slides}),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

module.exports = router;
