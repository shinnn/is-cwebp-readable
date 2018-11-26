'use strict';

const fileType = require('file-type');

const types = new Set([
	'png',
	'jpg',
	'tif',
	'webp'
]);

function fn(buf) {
	const type = fileType(buf);

	if (!type) {
		return false;
	}

	return types.has(type.ext);
}

require('./run')(fn, 'Set#has()');
