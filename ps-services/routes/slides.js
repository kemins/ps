var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('../config');
var utils = require('../utils/common-utils');


/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.model('Slide').find({}, function(err, slides) {
    slides.forEach(normalizeSlide);

    res.json({slides: slides});
  });

  let normalizeSlide = (slide) => {

    for (let [key, value] of utils.entries(slide.url)) {
      slide.url[key] = config.storage.slides + value;
    }
  };
});


module.exports = router;
