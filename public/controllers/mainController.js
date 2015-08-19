(function () {
	angular
		.module('eanO365Example')
		.controller('MainController', MainController);
		
	/**
	 * The MainController code.
	 */
	MainController.$inject = ['$http', '$log', '$cookies', 'commonFactory'];
	function MainController($http, $log, $cookies, common) {
		var vm = this;
		
		// Properties
		vm.isLoggedIn = true; // Set to true to avoid flicker during isLoggedIn check.
		vm.emails;
		
		// Methods
		vm.getMessages = getMessages;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		(function activate() {
			$log.debug('Activated MainController.');
			
			// Check to see if a user is logged in and render UI appropriately. 
			common.isLoggedIn()	
				.then(function(res) {
					if (res) {
						vm.isLoggedIn = true;
						getMessages();
					}
					else {
						vm.isLoggedIn = false;
						$cookies.remove('connect.sid');					
					}
				});	
		})();
		
		/**
		 * Get the logged in user's messages from Office 365.
		 */
		function getMessages() {
			var req = {
				method: 'GET',
				url: '/messages'
			};
			
			$http(req)
				.then(function(res) {
					vm.emails = res.data.value;
				});
		};
	};
})();
