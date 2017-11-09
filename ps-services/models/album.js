const mongoose = require('mongoose');

mongoose
  .model('Album', {
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
      ref: 'User',
      required: true
    },
    creationDate: Date,
    modificationDate: Date
  });
