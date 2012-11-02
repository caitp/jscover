/*!
 * jscover - bin/jscover.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var program = require('commander');
var version = require('../package.json').version;
var jscover = require('../');

program
  .version(version)
  .option('--js-version', 'use the specified JavaScript version')
  .option('--no-instrument', 'copy but do not instrument PATH')
  .option('--exclude', 'don\'t copy from source/PATH')
  .parse(process.argv);

// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineappe');
// if (program.bbq) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

var source = program.args[0];
var target = program.args[1];
var options = {};

jscover(source, target, options, function (err, stdout) {
  if (err) {
    if (stdout) {
      console.error(stdout);
    }
    throw err;
  }
  if (stdout) {
    console.log(stdout);
  }
});