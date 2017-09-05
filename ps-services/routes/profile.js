const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  console.log('Accessing profile');

  res.json({type: 'success'});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({
    type: 'success',
    message: 'You are signed out.',
  });
});


module.exports = router;