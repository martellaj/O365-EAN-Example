(function (config) {
	config.appOptions = {
		clientId: '<Your app client ID from Azure AD.>',
		clientSecret: '<Your app key from Azure AD.>',
		tenantId: '<Your tenant GUID from Azure AD ("View Endpoints" in your directory page).>',
		redirectURL: '<The endpoint where OAuth will return your access code to (/auth/receiveAccessCode in this example).>'
	};
})(module.exports);