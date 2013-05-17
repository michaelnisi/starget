
// starget - copy images of starred items

var path = require('path')
  , tubule = require('tubule')
  , cop = require('cop')
  , scrim = require('scrim')
  , PassThrough = require('stream').PassThrough
  , request = require('request')

module.exports = function (opt) {
  var url = opt.url
    , dir = opt.dir
    , all = opt.all

  var stream = new PassThrough()

  function get (uri) {
    url = null

    var t = tubule(dir)
    t.on('error', error)

    request(uri)
      .on('error', error)
      .pipe(scrim())
      .on('error', error)
      .on('more', function (u) {
         url = u
      })
      .pipe(cop(filter))
      .pipe(t)
      .on('finish', function () {
        all && url ? get(url) : stream.push(null)
      })
      .on('readable', function () {
        var chunk = t.read()
        if (chunk) stream.push(chunk)
      })
  }

  function error(err) {
    stream.emit('error', err)
  }

  get(url)

  return stream
}

function filter (chunk) {
  var uri = require('url').parse(chunk.toString())
    , http = uri.protocol  === 'http:'

  return http && path.extname(uri.path) === '.jpg' ? uri.href : null
}
