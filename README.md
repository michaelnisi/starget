# starget - copy images of starred items

The tiny `starget` command-line tool is of rather specific use: it copies all images referred in your starred [Google Reader](http://www.google.com/reader/) items to disk. Its peculiar use case is only exceeded by its short-livedness—use before [July 1, 2013](http://googlereader.blogspot.de/2013/03/powering-down-google-reader.html).

## Usage

    starget url target_dir [-all]

The following options are available:

- -all Download images of all items you ever starred.

To download the images of my latest [starred](http://bit.ly/13TMQGc) items:

    starget http://bit.ly/13TMQGc /tmp/starred

Add the `-all` option and you would literally download all of my starred images since 2007. 

So, if you have some starred items with images: make the starred items page public in your Google Reader settings, copy and paste the URL, and download all the images you once have starred.

## Installation

Install with [npm](https://npmjs.org):

    npm install -g starget

## License

[MIT License](https://raw.github.com/michaelnisi/starget/master/LICENSE)
