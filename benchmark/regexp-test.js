'use strict';

const fileType = require('file-type');

function fn(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return /^(?:png|jpg|tif|webp)$/.test(type.ext);
}

require('./run')(fn, 'RegExp#test()');
