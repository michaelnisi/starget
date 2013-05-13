var starget = require('../')
  , cop = require('cop')
  , url = 'http://www.google.com/reader/shared/user%2F00420557349755252971%2Fstate%2Fcom.google%2Fstarred'
  , dir = '/tmp/starget-' + Math.floor(Math.random() * (1<<24))
  , opt = { url:url, dir:dir, all:false }

starget(opt)
  .pipe(cop(function (uri) { return uri + '\n' }))
  .pipe(process.stdout)
