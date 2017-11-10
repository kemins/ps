const config = require('../config');
const nodemailer = require('nodemailer');

class MailApi {
  sendMail(mail) {
    const transporter = nodemailer.createTransport(config.mail.endpoint);

    return new Promise((resolve, reject) => {
      transporter.sendMail(mail, (error, info) => {
        error ? reject(error) : resolve(info);
      });
    });
  };
}

module.exports = new MailApi();
