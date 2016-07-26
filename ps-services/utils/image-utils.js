var gm = require('gm');
var fs = require('fs');
var path = require('path');
var process = require('process');
var dbConnect = require('./../db-connect');
var mongoose = require('mongoose');


const resolutions = [{
  name: 'xl',
  w: 2048,
  h: 600,
  scale: 'h',
  align: 'top'
}, {
  name: 'l',
  w: 1224,
  h: 400,
  scale: 'h',
  align: 'center'
}, {
  name: 'm',
  w: 1024,
  h: 400,
  scale: 'h',
  align: 'center'
}, {
  name: 's',
  w: 1000,
  h: 776,
  scale: 'v',
  align: 'center'
}];

let source = 'C:/Users/Andriy_Kemin/Pictures/bg/';
let destination = 'C:/programing/workspace/ps/ps-services/public/slides/';
let format = '.png';

/**
 * Generate slides from source directory.
 */
dbConnect.connect().then(function(status) {
  console.log(status);
  mongoose.model('Slide').remove({}, function(error) {
    if (error) {
      console.log(error);
    }
  });
  processSlides();
});

/**
 * Insert slide to db.
 *
 * @param {Object} meta
 * @param {number} index
 */
function insertSlide(meta, index) {
  let url = {};

  // loop through all supported resolutions.
  resolutions.forEach(function(resolution) {
    url[resolution.name] = resolution.name + index + format;
  });

  // Read creation date from metadata.
  let dateStr = meta['Date Time'] || meta['Date Time Original'],
    date;

  if (dateStr) {
    let datePart = dateStr.split(' ')[0];
    date = new Date(datePart.replace(':', '-'));
  }

  console.log('Creating slide ', url, date);

  mongoose.model('Slide').create({
    url: url,
    title: '',
    creationDate: date
  }, function(err, slides) {
    if (err) {
      console.log(err);
    }
  });
}

/**
 * Read image metadata.
 *
 * @param {string} input
 * @returns {Promise<T>|Promise}
 */
function getImageMetaData(input) {
  return new Promise(function(resolve, reject) {
    let img = gm(input),
      meta;

    img.identify(function(error, value) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Metadata received for image: ', input);
        meta = value['Profile-EXIF'];
        resolve(meta);
      }
    });
  });
}

/**
 * Resize images for different resolutions.
 *
 * @param {Object} options.
 * @returns {Promise<T>|Promise}
 */
function resizeImage(options) {
  return new Promise(function(resolve, reject) {
    let img = gm(options.fromPath);
    let scaleWidth = options.scale === 'h' ? options.width : null;
    let scaleHeight = options.scale === 'v' ? options.height : null;

    console.log('Scale to w:', scaleWidth);
    console.log('Scale to h:', scaleHeight);

    img.resize(scaleWidth, scaleHeight);

    img.size(function(error, size) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        let alignConfig = {
          top: {
            x: 0,
            y: 0
          },
          center: {
            x: scaleHeight ? Math.max(0, (scaleWidth - options.width)/2) : 0,
            y: scaleWidth ? Math.max(0, (scaleHeight - options.height)/2) : 0
          }
        };
        let coordinate = alignConfig[options.align] || alignConfig.top;

        img.crop(options.width, options.height, coordinate.x, coordinate.y)
          .write(options.toPath, function(err) {
            if (err) {
              console.log(err);
              reject(err)
            }
          });
      }
      resolve(options);
    });
  });
}

/**
 * Process/generate slides form file system source directory.
 */
function processSlides() {
  // Loop through all the files in the temp directory
  fs.readdir(source, function(err, files) {
    if( err ) {
      console.error("Could not list the directory.", err );
      process.exit(1);
    }

    files.forEach(function(file, index) {
      // Make one pass and make the file complete
      let fromPath = path.join(source, file);
      let n = index + 1;

      resolutions.forEach(function(resolution) {
        let slideName = resolution.name + n + format;
        let toPath = path.join(destination, slideName);

        resizeImage({
          fromPath: fromPath,
          toPath: toPath,
          width: resolution.w,
          height: resolution.h,
          align: resolution.align,
          scale: resolution.scale
        });
      });

      getImageMetaData(fromPath).then(function(meta) {
        insertSlide(meta, n);
      }, function(error) {
        console.log(error);
      });
    });
  });
}