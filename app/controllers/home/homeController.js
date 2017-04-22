define(['angular', 'lodash'], function(ng, _) {
	'use strict';

	function homeController($scope, $state) {

		console.log('ololo', $state)

	}

	return {
		homeController: [
			'$scope', '$state', homeController
		]
	};
});