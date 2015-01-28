/* glogals: suite, bench */
'use strict';

var main = require('..');
var indexOf = require('./index-of.js');
var regex = require('./regex.js');

var fixture = new Buffer(100);

suite('Detect file type', function () {
  set('iterations', 30000);

  bench('logical OR', function() {
    main(fixture);
  });

  bench('array.indexOf', function() {
    indexOf(fixture);
  });

  bench('regular expression', function() {
    regex(fixture);
  });
});
