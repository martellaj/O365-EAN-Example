var AzureOAuthStrategy = require('passport-azure-oauth').Strategy;
var config = require('./config');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
	
  // Configure Passport strategy.
  passport.use('azureoauth',
    new AzureOAuthStrategy({
      clientId: config.appOptions.clientId,
      clientSecret: config.appOptions.clientSecret,
      tenantId: config.appOptions.tenantId,
      resource: 'https://graph.microsoft.com',
      redirectURL: config.appOptions.redirectURL
    },
    function (accessToken, refreshToken, profile, next) {
      passport.accessToken = accessToken;
      return next(null, profile);
    })
  );
};