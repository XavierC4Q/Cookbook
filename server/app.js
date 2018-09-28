const express = require('express');
require('dotenv').config();
const config = require('./config')

const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const User = require('./models/user');

const users = require('./routes/user');
const auth = require('./routes/auth');
const recipe = require('./routes/recipe')

const app = express();
mongoose.connect(config.db, { useNewUrlParser: true }).then(() => {
  console.log(`SERVER UP AND RUNNING localhost:${config.dev}`)
});
mongoose.globalPromise = Promise;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.secret
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', auth);
app.use('/users', users)
app.use('/recipe', recipe)

passport.use(new LocalStrategy(User.authenticate('local')));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
