const host = 'http://localhost:8000';

module.exports = {
  host: host,
  db: {
    prod: "mongodb://user:pass@example.com:27017/ps",
    dev: "mongodb://localhost:27017/ps",
    test: "mongodb://localhost:27017/ps"
  },
  storage: {
    slides: `${host}/slides/`
  },
  mail: {
    endpoint: 'smtps://andriy.kemin%40gmail.com:19852828@smtp.gmail.com'
  },
  captcha: {
    token: '6LcTiwMTAAAAAOG94fJQ_lGvt2jPTRLHjgDWwQlR',
    url: 'https://www.google.com/recaptcha/api/siteverify'
  },
  socialLogin: {
    publicKey: 'ec78409e-3513-4a17-9a2e-84e03b95c86a',
    privateKey: 'a881e06e-2f83-4a17-bb05-6d9a6a2a530e',
    siteDomain: 'https://photo-state.api.oneall.com'
  },
  fs: {
    users: '/ps/users/',
  },
  slides: {
    endpoint: {
      avatar: `${host}/profile/avatar`
    },
    resolutions: [
      {
        type: 'l'
      },
      {
        width: 1920,
        prefix: '_',
        type: 'm',
        autoGenerated: true
      },
      {
        width: 800,
        prefix: '__',
        type: 's',
        autoGenerated: true
      }
    ]
  }
};