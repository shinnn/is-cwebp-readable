'use strict';

const fileType = require('file-type');

const vilidTypes = ['png', 'jpg', 'tif', 'webp'];

function fn(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return vilidTypes.includes(type.ext);
}

require('./run')(fn, 'Array#includes()');