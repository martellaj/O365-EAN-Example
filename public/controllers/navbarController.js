(function () {
	angular
		.module('eanO365Example')
		.controller('NavbarController', NavbarController);
	
	/**
	 * The NavbarController code.
	 */
	NavbarController.$inject = ['$http', '$log', 'commonFactory'];
	function NavbarController($http, $log, common) {
		var vm = this;
		
		// Properties
		vm.isCollapsed;
		vm.isLoggedIn;
		
		// Methods
		 
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		(function activate() {
			$log.debug('Activated NavbarController.');
			
			vm.isCollapsed = true;
			
			// Check to see if a user is logged in and render UI appropriately. 
			common.isLoggedIn()	
				.then(function(res) {
					if (res) {
						vm.isLoggedIn = res;
					}
					else {
						vm.isLoggedIn = false;						
					}
				});
		})();	
	};
})();
