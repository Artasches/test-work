define(['angular', 'lodash'], function(ng, _) {
	'use strict';

	function homeController($scope, $uibModal, sensorsData) {

		var d = new Date();
		$scope.dateFrom = d.setMonth(d.getMonth() - 1);
		$scope.dateTo = new Date();

		$scope.dateOptions = {
			maxDate: new Date(),
			minDate: new Date(2010, 1, 1),
			startingDay: 1
		};

		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};

		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};

		$scope.format = 'dd.MM.yyyy';

		$scope.popup1 = {
			opened: false
		};

		$scope.popup2 = {
			opened: false
		};

		$scope.addChart = {
			open: function() {
				$scope.modalInstance = $uibModal.open({
					templateUrl: './app/controllers/home/modals/addChart.html',
					size: 'lg',
					scope: $scope
				});
			},
			close: function() {
				$scope.modalInstance.close();
			},
			selectedSensor: "1",
			sensors: sensorsData.sensors
		};
	}

	return {
		homeController: [
			'$scope', '$uibModal', 'sensorsData', homeController
		]
	};
});