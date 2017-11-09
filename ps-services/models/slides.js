require('mongoose')
  .model('Slide', {
    url: {
      type: Object
    },
    title: String,
    creationDate: Date
  });
