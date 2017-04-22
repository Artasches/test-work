define([], function() {
	'use strict';
	// it's a factory, dude =)

	function sensorsData($rootScope) {

		var svc = {};

		svc.sensors = [
			{
				id: 1,
				type: "temperature",
				name: "Temperature in office 28",
				added: false
			},
			{
				id: 2,
				type: "temperature",
				name: "Temperature in office 30",
				added: false
			},
			{
				id: 3,
				type: "humidity",
				name: "Humidity in office 28",
				added: false
			},
			{
				id: 4,
				type: "humidity",
				name: "Humidity in office 30",
				added: false
			},
			{
				id: 5,
				type: "illumination",
				name: "Illumination in office 28",
				added: false
			},
			{
				id: 6,
				type: "illumination",
				name: "Illumination in office 30",
				added: false
			}
		];

		return svc;

	}

	return {
		sensorsData: [
			'$rootScope', sensorsData
		]
	};
});