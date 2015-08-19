var express = require('express');
var authRoutes = express.Router();
var passport = require('passport');
var AzureOAuthStrategy = require('passport-azure-oauth').Strategy;

authRoutes.get('/isLoggedIn',
	function (req, res) {
		res.send(req.isAuthenticated() ? req.user : false);
	});

authRoutes.get('/logIn',
	passport.authenticate('azureoauth'),
	function (req, res) {
	});

authRoutes.get('/receiveAccessCode',
	passport.authenticate('azureoauth'),
	function (req, res) {
		res.redirect('/');
	});

authRoutes.get('/logOut', function (req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = authRoutes;