const mongoose = require('mongoose');
const config = require('../config');
const _ = require('lodash');
const fs = require('fs');
const request = require('request');

const {socialLogin} = config;
const authToken = new Buffer(socialLogin.publicKey + ':' + socialLogin.privateKey).toString('base64');

class UserApi {
  getUserByToken(token) {
    return this.searchUser({token});
  }

  searchUser(criteria) {
    return new Promise((resolve, reject) => {
      mongoose.model('User').find(criteria, (err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(_.first(users));
        }
      })
    });
  }

  getUserById(id) {
    return this.searchUser({_id: id});
  }

  transformAvatar(picture) {
    const result = {};

    _.forEach(config.slides.resolutions, ({type}) => {
      const url = picture[type],
        stored = !_.includes(url, 'http');

      result[type] = stored ? `${config.slides.endpoint.avatar}/${type}` : url;
    });

    return result;
  }

  createUserPictures(pictureUrl) {
    const picture = {};

    _.forEach(config.slides.resolutions, (resolution) => {
      picture[resolution.type] = pictureUrl;

      if (resolution.width) {
        picture[resolution.type] = `${picture[resolution.type]}?sz=${resolution.width}`;
      }
    });

    return picture;
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      const picture = this.createUserPictures(user.picture);

      mongoose.model('User')
        .create(_.assign(user, {
          active: true,
          picture
        }), (error, user) => {
          if (error) {
            reject(error);
          } else {
            fs.mkdirSync(`${config.fs.users}${user._id}`);
            resolve(user);
          }
        });
    });
  }

  authenticate(connectionToken) {
    return new Promise((resolve, reject) => {
      const uri = `${socialLogin.siteDomain}/connections/${connectionToken}.json`;
      const options = {
        uri,
        headers: {
          'Authorization': `Basic ${authToken}`
        }
      };
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(body).response.result.data);
        }
      });
    });
  }
}

module.exports = new UserApi();
