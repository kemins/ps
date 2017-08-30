var express = require('express');
var router = express.Router();
var config = require('../config');


/* Upload avatar */
router.post('/', function(req, res, next) {
  res.json({
    type: 'success',
    message: 'Avatar has been changed!'
  });
});


module.exports = router;
