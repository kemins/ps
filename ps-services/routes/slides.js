var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.model('slides').find(function(err, slides) {
    res.send(slides);
  });
});


module.exports = router;
