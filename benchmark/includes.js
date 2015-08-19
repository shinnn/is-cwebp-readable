'use strict';

var fileType = require('file-type');

var vilidTypes = ['png', 'jpg', 'tif', 'webp'];

module.exports = function isCwebpReadable(buf) {
  var type = fileType(buf);

  if (!type) {
    return false;
  }

  return vilidTypes.includes(type.ext);
};
