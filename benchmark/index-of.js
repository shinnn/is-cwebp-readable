'use strict';

var fileType = require('file-type');

module.exports = function isCwebpReadable(buf) {
  var type = fileType(buf);

  if (!type) {
    return false;
  }

  return ['png', 'jpg', 'tif', 'webp'].indexOf(type.ext) === -1;
};
