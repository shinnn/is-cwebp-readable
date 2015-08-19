'use strict';

var fileType = require('file-type');

var validTypes = ['png', 'jpg', 'tif', 'webp'];

module.exports = function isCwebpReadable(buf) {
  var type = fileType(buf);

  if (!type) {
    return false;
  }

  return validTypes.indexOf(type.ext) === -1;
};
