define(['angular', 'lodash'], function(ng, _) {
	'use strict';

	function homeController($scope, $uibModal, sensorsData) {

		var d = new Date();
		$scope.dateFrom = new Date(d.setDate(d.getDate() - 7));
		$scope.dateTo = new Date();

		$scope.dateUpdate = function() {
			$scope.ts = {
				from: $scope.dateFrom.getTime(),
				to: $scope.dateTo.getTime()
			};
			Highcharts.charts.forEach(function(item) {
				item.update({
					xAxis: {
						type: 'datetime',
						min: $scope.ts.from,
						max: $scope.ts.to
					}
				});
			})
		};

		$scope.dateUpdate();

		$scope.dateOptions = {
			maxDate: new Date(),
			minDate: new Date(1, 1, 2017),
			startingDay: 1,
			dateDisabled: function(data) {
				var date = data.date,
					mode = data.mode,
					today = new Date();

				return mode === 'day' && (today.getTime() - date.getTime() > 60 * 24 * 60 * 60 * 1000)
			}
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
			selectedSensor: '1',
			selectedSensor2: '0',
			sensors: sensorsData.sensors,
			title: 'New chart',
			add: function() {
				var self = this;
				var sensor = _.find(sensorsData.sensors, {id: parseInt(self.selectedSensor)});
				if (sensor) {
					var ch = {
						id: new Date().getTime(),
						chart: {
							type: 'line'
						},
						title: {
							text: self.title
						},
						xAxis: {
							type: 'datetime',
							min: $scope.ts.from,
							max: $scope.ts.to
						},
						yAxis: {
							title: {
								text: sensor.type + ', ' + sensor.units
							}
						},
						tooltip: {
							crosshairs: true,
							shared: true,
							valueSuffix: sensor.units
						},
						series: [{
							name: sensor.name,
							data: sensor.data,
							id: '' + sensor.id
						}]
					};

					if (parseInt(self.selectedSensor2)) {
						var sensor2 = _.find(sensorsData.sensors, {id: parseInt(self.selectedSensor2)});
						if (sensor2) {
							var colors = 0;
							var y = [];
							ch.yAxis = {
								labels: {
									format: '{value}' + sensor.units,
									style: {
										color: Highcharts.getOptions().colors[++colors]
									}
								},
								title: {
									text: sensor.type,
									style: {
										color: Highcharts.getOptions().colors[++colors]
									}
								},
								opposite: true

							};
							ch.tooltip = {
								shared: true
							};
							y.push(ch.yAxis);
							y.push({
								labels: {
									format: '{value}' + sensor2.units,
									style: {
										color: Highcharts.getOptions().colors[++colors]
									}
								},
								title: {
									text: sensor2.type,
									style: {
										color: Highcharts.getOptions().colors[++colors]
									}
								},
								opposite: true
							});
							ch.yAxis = y;
							ch.series[0].yAxis = 0;
							ch.series[0].tooltip = {
								valueSuffix: sensor.units
							};
							ch.series.push({
								name: sensor2.name,
								data: sensor2.data,
								id: '' + sensor2.id,
								yAxis: 1,
								tooltip: {
									valueSuffix: sensor2.units
								}

							});

						}
					}
					$scope.charts.push(ch);
				}
				$scope.modalInstance.close();
			}
		};
		$scope.charts = [];

		$scope.swapChartType = function(chart) {
			if (chart.chart.type === 'line') {
				chart.chart.type = 'bar'
			} else {
				chart.chart.type = 'line'
			}
		};

		$scope.remove = function(chart) {
			_.remove($scope.charts, {id: chart.id});
		};
	}

	return {
		homeController: [
			'$scope', '$uibModal', 'sensorsData', homeController
		]
	};
});