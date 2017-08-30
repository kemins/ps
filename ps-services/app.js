const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');
const routes = require('./routes/index');
const slides = require('./routes/slides');
const mail = require('./routes/mail');
const users = require('./routes/users');
const avatar = require('./routes/avatar');
const profile = require('./routes/profile');
const dbConnect = require('./db-connect');
const passport = require('passport');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ps-secret-key'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/slides', slides);
app.use('/mail', mail);
app.use('/users', users);

app.use((req, res, next) => {
  if (req.isAuthenticated() ) {
    next();
  } else {
    res.send(401, 'not authorized');
  }
});

app.use('/profile', profile);
app.use('/profile/avatar', avatar);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  dbConnect.connect();
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
