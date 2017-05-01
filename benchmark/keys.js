'use strict';

const fileType = require('file-type');

const types = {
  png: true,
  jpg: true,
  tif: true,
  webp: true
};

module.exports = function isCwebpReadable(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return !!types[type.ext];
};
