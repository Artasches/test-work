require.config({
	baseUrl: './app',
	paths: {
		'angular': '../bower_components/angular/angular.min',
		'angularUiRouter': '../bower_components/angular-ui-router/release/angular-ui-router.min',
		'angularBootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
		'highcharts': '../bower_components/highcharts/highcharts',
		'highcharts-ng': '../bower_components/highcharts-ng/dist/highcharts-ng.min',
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
		},
		'highcharts-ng': {
			deps: ['angular', 'highcharts']
		}
	}
});

require(['angular', './app', './app.namespace'], function(ng, app, namespace) {
	'use strict';

	ng.element(document).ready(function() {
		ng.bootstrap(document, [namespace]);
	});
});