var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var firebase = require('firebase');


var index = require('./routes/index');
var users = require('./routes/users');
//var login = require('./routes/login');
var homepage = require('./routes/OldJSfiles/homepage');
var waterquality = require('./routes/waterquality');
var watersource = require('./routes/watersource');
var newhomepage = require('./routes/newhomepage');
var profile = require('./routes/profile');
var registration = require('./routes/registration');

//var firebaseui = require('firebaseui');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('index', index);
app.use('/users', users);
//app.use('/login', login);
app.use('/homepage', homepage);
app.use('/watersource', watersource);
app.use('/waterquality', waterquality);
app.use('/newhomepage', newhomepage);
app.use('/profile', profile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/registration', registration);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
