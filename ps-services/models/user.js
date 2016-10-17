var mongoose = require('mongoose');

var User = mongoose.model('User', {
  token: String,
  email: String,
  displayName: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: false
  },
  active: Boolean
});

console.log('Setup schema for user model.');