'use strict';

var fileType = require('file-type');

module.exports = function isCwebpReadable(buf) {
  var type = fileType(buf);

  if (!type) {
    return false;
  }

  return /png|jpg|tif|webp/.test(type.ext);
};
