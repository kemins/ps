var gm = require('gm');
var fs = require('fs');
var path = require('path');
var process = require('process');
var dbConnect = require('./../db-connect');
var mongoose = require('mongoose');


let resolutions = [{
  name: 'xl',
  w: 2048,
  h: 600
}];

let source = 'C:/Users/Andriy_Kemin/Pictures/bg/';
let destination = 'C:/programing/workspace/ps/ps-services/public/slides/';
let format = '.png';

dbConnect.connect().then(function(status) {
  console.log(status);
  mongoose.model('Slide').remove({});
  processSlides();
});

function insertSlide(name) {
  let url = {};

  resolutions.forEach(function(resolution) {
    url[resolution.name] = name;
  });
  mongoose.model('Slide').create({
    url: url,
    title: 'Slide ' + name
  }, function(err, slides) {
    if (err) {
      console.log(err);
    }
  });
}

function resizeImage(input, output, w, h, align) {
  let img = gm(input);

  img.size(function(error, size) {
    if (error) {
      console.log(error);
    } else {
      let alignConfig = {
        top: {
          x: 0,
          y: 0
        },
        center: {
          x: Math.max(0, (size.width - w)/2),
          y: Math.max(0, (size.height - h)/2)
        }
      };
      let coordinate = alignConfig[align] || alignConfig.top;

      img.resize(w)
        .crop(w, h, coordinate.x, coordinate.y)
        .write(output, function(err) {
          if (err) {
            console.log(err);
          }
        });
    }
  });
}

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

      resolutions.forEach(function(resolution) {
        let n = index++;
        let slideName = resolution.name + n + format;
        let toPath = path.join(destination, slideName);

        resizeImage(fromPath, toPath, resolution.w, resolution.h);
        insertSlide(slideName);
      });
    } );
  } );
}