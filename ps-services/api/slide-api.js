const config = require('../config');
const mongoose = require('mongoose');
const utils = require('../utils/common-utils');

class SlideApi {
  getAllSlides() {
    return new Promise((resolve, reject) => {
      mongoose.model('Slide').find({}, (err, slides) => {
        if (err) {
          reject(err);
        } else {
          slides.forEach((slide) => {
            for (let [key, value] of utils.entries(slide.url)) {
              slide.url[key] = config.storage.slides + value;
            }
          });
          resolve(slides);
        }
      });
    });
  };
}

module.exports = new SlideApi();
