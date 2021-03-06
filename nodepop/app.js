'use strict';

var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');



var app = express();
//requerimos la conexion a la bbdd con mongoose.
require('./lib/connectMongoose');
//Requerimos los Modelos que vamos a mapear con mongoose
require('./models/Advertisement');
require('./models/PushNotificationToken');
require('./models/User');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



app.use((req, res, next) => {
  req.lang = req.get('x-lang') || 'es';
  next();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Para servir la documentación del API
app.use('/doc',express.static('doc', {'index': ['index.html']}));

//Para servir las fotos en http://server/images/anuncios/
app.use('/images/anuncios',express.static( path.join(__dirname, 'public/images') ) );

app.use('/', routes);
app.use('/users', users);



//RUTAS del API:

app.use('/api/v1/anuncios', require('./routes/api/v1/anuncios'));
app.use('/api/v1/usuarios', require('./routes/api/v1/usuarios'));
app.use('/api/v1/pushtoken', require('./routes/api/v1/pushtoken'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) { 
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
