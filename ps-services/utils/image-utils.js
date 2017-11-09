const gm = require('gm');
const fs = require('fs');
const path = require('path');
const process = require('process');
const dbConnect = require('./../db-connect');
const mongoose = require('mongoose');
const config = require('../config');
const _ = require('lodash');

class ImageUtils {
  constructor(source, destination) {
    this.source = source;
    this.destination = destination;

    this.format = '.jpeg';
    this.resolutions = [
      {
        name: 'xl',
        w: 2048,
        h: 1152,
        scale: 'h',
        align: 'top'
      },
      {
        name: 'l',
        w: 1224,
        h: 689,
        scale: 'h',
        align: 'center'
      },
      {
        name: 'm_l',
        w: 1024,
        h: 768,
        scale: 'v',
        align: 'center'
      },
      {
        name: 'm_p',
        w: 768,
        h: 1024,
        scale: 'v',
        align: 'center'
      },
      {
        name: 's_l',
        w: 667,
        h: 375,
        scale: 'h',
        align: 'center'
      },
      {
        name: 's_p',
        w: 375,
        h: 667,
        align: 'center',
        scale: 'v'
      }
    ];
  }

  /**
   * Generate slides from source directory.
   */
  generateSlides() {
    dbConnect.connect().then((status) => {
      console.log(status);
      mongoose.model('Slide').remove({}, (error) => {
        if (error) {
          console.log(error);
        }
      });
      this.processSlides();
    });
  }

  /**
   * Insert slide to db.
   *
   * @param {Object} meta
   * @param {number} index
   */
  insertSlide(meta, index) {
    const url = {};

    // loop through all supported resolutions.
    this.resolutions.forEach((resolution) => {
      url[resolution.name] = `${resolution.name}${index}${this.format}`;
    });

    // Read creation date from metadata.
    const dateStr = _.get(meta, 'Date Time') || _.get(meta, 'Date Time Original');
    let date;

    if (dateStr) {
      let datePart = dateStr.split(' ')[0];
      date = new Date(datePart.replace(':', '-'));
    }

    console.log('Creating slide ', url, date);

    mongoose.model('Slide').create({
      url: url,
      title: '',
      creationDate: date
    }, (err, slides) => {
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
  getImageMetaData(input) {
    return new Promise((resolve, reject) => {
      let img = gm(input),
        meta;

      img.identify((error, value) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Metadata received for image: ', input);
          meta = value['IProfile-EXIF'];
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
  resizeImage(options) {
    return new Promise((resolve, reject) => {
      const img = gm(options.fromPath);
      const scaleWidth = options.scale === 'h' ? options.width : null;
      const scaleHeight = options.scale === 'v' ? options.height : null;

      console.log('Scale to w:', scaleWidth);
      console.log('Scale to h:', scaleHeight);

      img.resize(scaleWidth, scaleHeight);

      img.size((error, size) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          const alignConfig = {
            top: {
              x: 0,
              y: 0
            },
            center: {
              x: scaleHeight ? Math.max(0, (scaleWidth - options.width) / 2) : 0,
              y: scaleWidth ? Math.max(0, (scaleHeight - options.height) / 2) : 0
            }
          };
          const coordinate = alignConfig[options.align] || alignConfig.top;

          if (options.crop) {
            img.crop(options.width, options.height, coordinate.x, coordinate.y);
          }

          img.write(options.toPath, (err) => {
            if (err) {
              console.log(err);
              reject(err)
            } else {
              resolve(options);
            }
          });
        }
      });
    });
  }

  /**
   * Process/generate slides from file system source directory.
   */
  processSlides() {
    // Loop through all the files in the temp directory
    fs.readdir(this.source, (err, files) => {
      if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
      }

      files.forEach((file, index) => {
        // Make one pass and make the file complete
        let fromPath = path.join(this.source, file);
        let n = index + 1;

        this.resolutions.forEach((resolution) => {
          let slideName = `${resolution.name}${n}${this.format}`;
          let toPath = path.join(this.destination, slideName);

          this.resizeImage({
            fromPath: fromPath,
            toPath: toPath,
            width: resolution.w,
            height: resolution.h,
            align: resolution.align,
            scale: resolution.scale,
            crop: true
          });
        });

        this.getImageMetaData(fromPath).then((meta) => {
          this.insertSlide(meta, n);
        }, (error) => {
          console.log(error);
        });
      });
    });
  }

  mountSlides(path, name, data) {
    return new Promise((resolve, reject) => {
      const writePath = `${path}${name}`,
        avatar = {
          l: writePath
        };

      // Store original file
      fs.writeFile(writePath, data, {encoding: "base64"}, (err) => {
        if (err) {
          reject(err);
        } else {
          const queue = [];
          _.chain(config.slides.resolutions)
            .filter({autoGenerated: true})
            .forEach((resolution) => {
              const toPath = `${path}${resolution.prefix}${name}`;

              queue.push(this.resizeImage({
                fromPath: writePath,
                toPath: toPath,
                width: resolution.width,
                scale: 'h',
                crop: false
              }));

              avatar[resolution.type] = toPath;
            })
            .value();

          Promise.all(queue)
            .then(() => {
              resolve(avatar);
            }, reject);
        }
      });
    });
  }
}

/*new ImageUtils('C:/Users/Andriy_Kemin/Pictures/bg/', 'C:/programing/workspace/ps/ps-services/public/slides/')
  .generateSlides();*/

module.exports = ImageUtils;