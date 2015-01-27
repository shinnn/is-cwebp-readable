/*!
 * is-webp-readable | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-webp-readable
*/
'use strict';

module.exports = function isCwebpReadable(buf) {
  return require('is-png')(buf) ||
         require('is-jpg')(buf) ||
         require('is-tif')(buf) ||
         require('is-webp')(buf);
};
