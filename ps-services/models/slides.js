var mongoose = require('mongoose');


mongoose.model('slides', {
  url: {
    type: String,
    required: true
  }
});
