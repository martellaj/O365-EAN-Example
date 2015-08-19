var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

// Configure Passport with Azure AD strategy. 
var passport = require('passport');
require('./app/scripts/passport.js')(passport);

// Middlewares, ahoy!
app.use(morgan('dev'));
app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

// Initialize variables. 
var port = process.env.PORT || 8080; 

// Configure app to handle CORS requests.
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

// Route registration
require('./app/routes/apiRoutes')(app, passport);
var authRoutes = require('./app/routes/authRoutes');
app.use('/auth', authRoutes); 

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the app.  
app.listen(port);
console.log('Listening on port ' + port + '...'); 