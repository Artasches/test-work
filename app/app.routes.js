// angular/app.routes.js

define([], function() {
	'use strict';

	return ['$stateProvider', '$urlRouterProvider', function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					main: {
						controller: 'homeController',
						templateUrl: './app/controllers/home/homeTmpl.html'
					}
				}
			});

		$urlRouterProvider
			.when('', '/home')
			.otherwise('/home');
	}];
});