#!/usr/bin/env node

var url = require('url')
  , fs = require('fs')
  , path = require('path')
  , starget = require('../')
  , cop = require('cop')


;(function () {
  var argv = process.argv.splice(2)
    , opt = {url:argv[0], dir:argv[1], all:argv[2] === '-all'}
    , uri = url.parse(opt.url)
    , valid = !!uri.protocol && !!uri.host && !!opt.dir

  if (!valid) {
    console.error('Usage: starget url target_dir [-all]')
    return
  }

  starget(opt)
    .pipe(cop(function (uri) { return uri + '\n' }))
    .pipe(process.stdout)
})()
