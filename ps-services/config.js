module.exports = {
  db: {
    prod: "mongodb://user:pass@example.com:27017/ps",
    dev: "mongodb://localhost:27017/ps",
    test: "mongodb://localhost:27017/ps"
  },
  storage: {
    slides: 'http://localhost:7000/slides/'
  },
  mail: {
    endpoint: 'smtps://andriy.kemin%40gmail.com:19852828@smtp.gmail.com'
  },
  captcha: {
    token: '6LcTiwMTAAAAAOG94fJQ_lGvt2jPTRLHjgDWwQlR',
    url: 'https://www.google.com/recaptcha/api/siteverify'
  }
};