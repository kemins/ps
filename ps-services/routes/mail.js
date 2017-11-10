const express = require('express');
const router = express.Router();
const config = require('../config');
const responseAPI = require('../api/response-api');
const captchaAPI = require('../api/captcha-api');
const mailAPI = require('../api/mail-api');

/* Send message. */
router.post('/', (req, res, next) => {
  const {contact, token} = req.body;
  const {name, email, message} = contact;

  const mailOptions = {
    from: config.mail.sendFrom,
    to: config.mail.sendTo,
    subject: 'Contact form',
    text: `From: ${name} -> ${email}.\n\nMessage: ${message}`
  };

  captchaAPI.checkCaptcha(token)
    .then(() => mailAPI.sendMail(mailOptions))
    .then(() => responseAPI.handleSuccessResponse(res, 'Message has been sent!'),
      ({message}) => responseAPI.handleErrorResponse(res, message));
});

module.exports = router;