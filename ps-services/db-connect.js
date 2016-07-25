var config = require('./config');
var mongoose = require('mongoose');
var fs = require('fs');

function connect() {
  let connection;

  return new Promise(function(resolve, reject) {
    console.log('connecting to db...');
    connection = mongoose.connect(config.db['dev'], function(error) {
      if (error) {
        console.log(error);
      } else {
        fs.readdirSync(__dirname + '/models').forEach(function(fileName) {
          require(__dirname + '/models/' + fileName);
        });

        resolve('connected');
      }
    });
  });
}

module.exports = {
  connect: connect
};