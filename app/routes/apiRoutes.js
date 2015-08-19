var express = require('express');
var apiRoutes = express.Router();
var passport = require('passport');
var request = require('request');

module.exports = function (app, passport) {
	app.use('/messages', function (req, res, next) {
		if (req.isAuthenticated()) {
			request('https://graph.microsoft.com/beta/me/messages', 
			{
				'auth': { 
					'bearer' : passport.accessToken 
				}	
			}, 
			function(error, response, body) {
				if (!error) {
					res.status(200).send(body);
				}
				else {
					console.log(error);
				}
			});
		}
		else {
			res.send(401);
		}
	});
};
