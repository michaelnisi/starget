
// starget - copy images of starred items

var path = require('path')
  , url = require('url')
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
  var urlStr = chunk.toString()
    , p = url.parse(urlStr)
    , http = p.protocol  === 'http:'

  return http && path.extname(p.path) === '.jpg' ? p.href : null
}
