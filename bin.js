#!/usr/bin/env node
var subarg = require('subarg');
var sink = require('sink-transform');
var ejs = require('ejs');
var argv = subarg(process.argv.slice(2));

process.stdin
  .pipe(sink.str(function(data) {  
    this.push(ejs.render(data, argv));
  }))
  .pipe(process.stdout);
