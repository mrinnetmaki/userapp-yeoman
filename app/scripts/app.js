'use strict';

angular
  .module('userappYeomanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'UserApp'	
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
		public: true
      })
      .otherwise({
        redirectTo: '/',
		public: true
      });
  })
  .run(function(user, $location) {
    user.init({ appId: '53a70241af6fd' });
  });
