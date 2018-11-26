'use strict';

const fileType = require('file-type');

const validTypes = ['png', 'jpg', 'tif', 'webp'];

function fn(buf) {
	const type = fileType(buf);

	if (!type) {
		return false;
	}

	return validTypes.indexOf(type.ext) !== -1;
}

require('./run')(fn, 'Array#indexOf()');
