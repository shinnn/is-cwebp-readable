'use strict';

const fileType = require('file-type');

module.exports = function isCwebpReadable(buf) {
  const type = fileType(buf);

  if (!type) {
    return false;
  }

  return /png|jpg|tif|webp/.test(type.ext);
};
