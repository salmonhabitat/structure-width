// 'watershed' is assumed to be the catchment area in square miles
var structure = function (watershed) {

	// Estimate a bankfull width.
	// This is based off a regression of projects SHARE has previously completed.
	var bankfull = Math.pow(watershed, 0.3429) * (8.7147);

	// Structure width is in many cases, conservatively estimated to be
	// bankfull width * 1.2
	var width = (bankfull * 1.2).toFixed(2);

	return parseFloat(width);

};

module.exports = structure;
