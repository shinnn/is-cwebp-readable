'use strict';

const {strictEqual} = require('assert').strict;

const {cyan} = require('chalk');

module.exports = function runBench(fn, suiteName) {
	const webp = Buffer.from([
		82,
		73,
		70,
		70,
		18,
		0,
		0,
		0,
		87,
		69,
		66,
		80,
		86,
		80,
		56,
		76,
		6,
		0,
		0,
		0,
		47,
		65,
		108,
		111,
		0,
		107
	]);
	let i = 10000000;

	strictEqual(fn(webp), true);

	console.time(cyan(suiteName));

	while (i--) {
		fn(webp);
	}

	console.timeEnd(cyan(suiteName));
};
