'use strict';

const fileType = require('file-type');

const validTypes = ['png', 'jpg', 'tif', 'webp'];

function fn(buf) {
	const type = fileType(buf);

	if (!type) {
		return false;
	}

	return validTypes.includes(type.ext);
}

require('./run')(fn, 'Array#includes()');
