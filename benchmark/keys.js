'use strict';

var fileType = require('file-type');

var types = {
  png: true,
  jpg: true,
  tif: true,
  webp: true
};

module.exports = function isCwebpReadable(buf) {
  var type = fileType(buf);

  if (!type) {
    return false;
  }

  return !!types[type.ext];
};
