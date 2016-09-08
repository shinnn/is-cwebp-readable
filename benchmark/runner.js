/* globals set, suite, bench */
'use strict';

const main = require('..');
const includes = require('./includes.js');
const indexOf = require('./index-of.js');
const keys = require('./keys.js');
const regex = require('./regex.js');

const fixture = new Buffer(100);

suite('Detect file type', () => {
  set('iterations', 30000);

  bench('logical OR (current version)', () => main(fixture));
  bench('array.includes', () => includes(fixture));
  bench('array.indexOf', () => indexOf(fixture));
  bench('keys', () => keys(fixture));
  bench('regular expression', () => regex(fixture));
});
