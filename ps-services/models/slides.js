var mongoose = require('mongoose');

var Slide = mongoose.model('Slide', {
  url: {
    type: Object
  },
  title: String,
  creationDate : Date
});