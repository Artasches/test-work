require.config({
	baseUrl: './app',
	paths: {
		'angular': '../bower_components/angular/angular.min',
		'angularUiRouter': '../bower_components/angular-ui-router/release/angular-ui-router.min',
		'angularBootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
		'highcharts': '../bower_components/highcharts/highcharts',
		'lodash': '../bower_components/lodash/lodash'
	},
	shim: {
		'lodash': {
			exports: '_'
		},
		'angular': {
			exports: 'angular'
		},
		'angularUiRouter': {
			deps: ['angular']
		},
		'angularBootstrap': {
			deps: ['angular']
		},
		'highcharts': {
			deps: ['angular']
		}
	}
});

require(['angular', './app', './app.namespace'], function(ng, app, namespace) {
	'use strict';

	ng.element(document).ready(function() {
		ng.bootstrap(document, [namespace]);
	});
});