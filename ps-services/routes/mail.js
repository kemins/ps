var express = require('express');
var router = express.Router();
var config = require('../config');
var nodemailer = require('nodemailer');
var request = require('request');

/* Send message. */
router.post('/', function(req, res, next) {
  let transporter = nodemailer.createTransport(config.mail.endpoint);
  let contact = req.body.contact;
  let token = req.body.token;

  let mailOptions = {
    from: 'me',
    to: 'andriy.kemin@gmail.com',
    subject: 'Contact form',
    text: `From: ${contact.name} -> ${contact.email}.\n\nMessage: ${contact.message}`
  };

  checkCaptcha(token).then(function() {
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        res.json({
          fault: {
            message: error
          }
        });
      } else {
        res.json({
          success: {
            message: 'Message has been sent!'
          }
        });
      }
    });
  }, function(error) {
    res.json({
      fault: {
        message: error
      }
    });
  });
});

checkCaptcha = (userResponse) => {
  return new Promise(function(resolve, reject) {
    let options = {
      uri: config.captcha.url,
      form: {
        secret: config.captcha.token,
        response: userResponse
      }
    };

    request.post(config.captcha.url, options,
      function (error, response, body) {
        let data = JSON.parse(body);

        if (!error && response.statusCode == 200 && data.success) {
          resolve(response);
        } else {
          reject('Captcha verification fails.');
        }
      }
    );
  });
};


module.exports = router;
