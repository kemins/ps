const _ = require('lodash');
const config = require('../config');
const usersAPI = require('../api/user-api');

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

mongoose.model('User', UserSchema);

UserSchema.set('toJSON', {
  transform: (doc, user, options) => {
    user.picture = usersAPI.transformAvatar(user.picture);

    return user;
  }
});
