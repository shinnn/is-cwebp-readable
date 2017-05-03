'use strict';

const {strictEqual} = require('assert');

const {cyan} = require('chalk');

module.exports = function runBench(fn, suiteName) {
  const smallBuf = Buffer.from('0'.repeat(10));
  const buf = Buffer.from('0'.repeat(100));
  const largeBuf = Buffer.from('0'.repeat(1000));
  let i = 2000000;

  console.time(cyan(suiteName));

  while (i--) {
    strictEqual(fn(smallBuf), false);
    strictEqual(fn(buf), false);
    strictEqual(fn(largeBuf), false);
  }

  console.timeEnd(cyan(suiteName));
};
