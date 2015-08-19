(function () {
	angular
		.module('eanO365Example')
		.factory('commonFactory', commonFactory);

	function commonFactory($http, $q) {
		var common = {};
		
		// Methods
		common.isLoggedIn = isLoggedIn;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * Lets a controller check if there is a user
		 * currently logged in.
		 */
		function isLoggedIn() {
			var deferred = $q.defer();
			
			$http.get('/auth/isLoggedIn')
				.then(function (res) {
					if (res.data === false) {
						deferred.resolve(false);
					}
					else {
						deferred.resolve(res.data.displayname);
					}
				});
				
			return deferred.promise;
		};

		return common;
	}
})();