const express = require('express');
const router = express.Router();
const passport = require('passport');

/**
 * Authentication interceptor
 */
router.get('/', (req, res, next) => {
  console.log('Accessing profile');

  res.json({type: 'success'});
});


module.exports = router;