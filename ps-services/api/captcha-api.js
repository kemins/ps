const config = require('../config');
const request = require('request');

class CaptchaApi {
  checkCaptcha(response) {
    return new Promise((resolve, reject) => {
      const uri = config.captcha.url,
        options = {
          uri,
          form: {
            secret: config.captcha.token,
            response
          }
        };

      request.post(uri, options, (error, response, body) => {
          const data = JSON.parse(body);

          if (!error && response.statusCode == 200 && data.success) {
            resolve(response);
          } else {
            reject('Captcha verification fails.');
          }
        }
      );
    });
  };
}

module.exports = new CaptchaApi();
