const _ = require('lodash');
const config = require('../config');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    required: false
  },
  picture: {
    type: Object,
    required: false
  },
  active: Boolean
});

const User = mongoose.model('User', UserSchema);

UserSchema.set('toJSON', {
  transform: (doc, user, options) => {
    const picture = {};

    _.forEach(config.slides.resolutions, (resolution) => {
      picture[resolution.type] = `${config.slides.endpoint.avatar}/${resolution.type}`;
    });

    user.picture = picture;

    return user;
  }
});

console.log('Setup schema for user model.');