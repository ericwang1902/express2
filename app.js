var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();

var mongoutils = require('./controllers/dbutils/mongoutils')//数据库工具包
mongoutils.createconnection();


var session = require('express-session');//1. express-session
var MongoStore = require('connect-mongo')(session);//用于session的配置
var flash = require('connect-flash');// 2. connect-flash

var passport = require('passport')//3.验证
var LocalStrategy = require('passport-local').Strategy;//4.登录策略
var bcrypt = require('bcryptjs');//5.数据加密

var usermodel = require('./models/userModel')

var index = require('./routes/index');

var mongoose = require('mongoose')

var userinit = require('./controllers/seeds/userinit')


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//1.express-session
app.use(session({
  secret: "express2",
  store: new MongoStore(
    {
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60
    }),
  resave: false,
  saveUninitialized: true
}));
//2.connect-flash
app.use(flash());
//passportjs
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  usermodel.findOne({ _id: id }, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function (username, password, done) {

    usermodel.findOne({ username: username }, function (err, user) {
      if (err) return console.error(err);
      //console.log(user)
      if (!user) {
        console.log('用户名不存在');

        return done(null, false, { message: '用户名不存在！' })
      } else {
        //参数说明：password和user.psd进行比较，第三个参数是回调函数
        bcrypt.compare(password, user.psd, function (err, isMatch) {
          if (err) return console.error(err);

          if (isMatch) {
            console.log("用户名和密码验证成功！")

            return done(null, user);
          } else {
            console.log("密码不匹配！")
            return done(null, false, { message: '密码不匹配！' });
          }
        })
      }
    })
  }
));



app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message + ":development",
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
