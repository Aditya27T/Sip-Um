const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./helpers/utils/logger');
const wrapper = require('./helpers/utils/wrapper');
const cookieSession = require('cookie-session');
const db = require('./app/models');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: "secret-session",
  httpOnly: true,
  secret: "secret",
}));

/**
 * initialize models
 */
db.sequelize.authenticate()
  .then(() => {
    logger.log('info', 'Connection has been established successfully.');
    db.sequelize.sync( {force: false} ).then(() => {
      logger.log('info', 'Database sync successfully.');
    });
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:', err);
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
});

module.exports = app;
