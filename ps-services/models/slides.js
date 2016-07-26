var mongoose = require('mongoose');

var Slide = mongoose.model('Slide', {
  url: {
    type: Object
  },
  title: String,
  creationDate : Date
});
console.log('Setup schema for slide model.');