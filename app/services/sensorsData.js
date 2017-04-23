define([], function() {
	'use strict';

	function sensorsData() {

		var svc = {};

		svc.random = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		var d = new Date(),
			date = d.setDate(d.getDate() - 60);

		svc.sensors = [
			{
				id: 1,
				type: "Temperature",
				name: "Temperature in office 28",
				units: '°C',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(20, 28)];
				})
			},
			{
				id: 2,
				type: "Temperature",
				name: "Temperature in office 30",
				units: '°C',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(20, 28)];
				})
			},
			{
				id: 3,
				type: "Humidity",
				name: "Humidity in office 28",
				units: '%',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(40, 60)];
				})
			},
			{
				id: 4,
				type: "Humidity",
				name: "Humidity in office 30",
				units: '%',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(40, 60)];
				})
			},
			{
				id: 5,
				type: "Illumination",
				name: "Illumination in office 28",
				units: 'lux',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(200, 300)];
				})
			},
			{
				id: 6,
				type: "Illumination",
				name: "Illumination in office 30",
				units: 'lux',
				data: _.range(60).map(function(item, i) {
					return [date + i * 1000 * 60 * 60 * 24, svc.random(200, 300)];
				})
			}
		];

		return svc;

	}

	return {
		sensorsData: [
			sensorsData
		]
	};
});