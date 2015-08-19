(function() {
  angular
    .module('eanO365Example', [
      'ngRoute',
      'ui.bootstrap',
      'angular-loading-bar',
      'ngCookies'
    ])
    .config(config); 
  
  function config($routeProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
    // Configure the routes. 
  	$routeProvider
  		.when('/', {
  			templateUrl: 'views/main.html',
  			controller: 'MainController',
  			controllerAs: 'main'
  		}) 
  		.otherwise({ 
        redirectTo: '/' 
      });
      
    // Make the URLs pretty.
    $locationProvider.html5Mode(true);
    
    // Remove spinner from loading bar.
    cfpLoadingBarProvider.includeSpinner = false;
  };
})();

