'use strict';

const fileType = require('file-type');

const validTypes = ['png', 'jpg', 'tif', 'webp'];

module.exports = function isCwebpReadable(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return validTypes.indexOf(type.ext) === -1;
};
