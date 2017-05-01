'use strict';

const fileType = require('file-type');

const vilidTypes = ['png', 'jpg', 'tif', 'webp'];

module.exports = function isCwebpReadable(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return vilidTypes.includes(type.ext);
};
