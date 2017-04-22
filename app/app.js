define([
	'angular',
	'./app.namespace',
	'./app.routes',
	'./app.controllers',
	'./app.directives',
	'./app.services',
	'./app.modules'

], function(ng, namespace, routes, controllers, directives, services, modules) {
	'use strict';

	ng.module(namespace, [
		'ui.router',
		'ui.bootstrap'
	]);

	// register routes
	ng.module(namespace)
		.config(routes);

	// register controllers
	ng.forEach(controllers, function(item, name) {
		ng.module(namespace)
			.controller(name, item);
	});

	// register directives
	ng.forEach(directives, function(item, name) {
		ng.module(namespace)
			.directive(name, item);
	});

	// register services
	ng.forEach(services, function(item, name) {
		ng.module(namespace)
			.factory(name, item);
	});

});
