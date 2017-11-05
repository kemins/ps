var mongoose = require('mongoose');

var Album = mongoose.model('Album', {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  creationDate : Date,
  modificationDate : Date
});