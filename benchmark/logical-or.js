'use strict';

const fileType = require('file-type');

function fn(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  const ext = type.ext;

  return ext === 'png' || ext === 'jpg' || ext === 'tif' || ext === 'webp';
}

require('./run')(fn, 'Logical OR');
