define([
	'./services/sensorsData'
], function() {
	'use strict';

	// modify list to object
	return Array.prototype.reduce.call(arguments, function(result, item) {
		var key = Object.keys(item).shift();
		result[key] = item[key];
		return result;
	}, {});
});