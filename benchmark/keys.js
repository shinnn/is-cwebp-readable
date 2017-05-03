'use strict';

const fileType = require('file-type');

const types = {
  png: true,
  jpg: true,
  tif: true,
  webp: true
};

function fn(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return !!types[type.ext];
}

require('./run')(fn, 'Object keys');
