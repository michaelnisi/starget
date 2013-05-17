# starget - copy images of starred items

In the remaining light cast by Google sunsetting [Reader](http://googlereader.blogspot.de/2013/03/powering-down-google-reader.html) I wrote `starget`, a small command-line tool of particular use: `starget` copies all images referred in your (public) starred [Google Reader](http://www.google.com/reader/) items to a local directory. Its peculiar use case is only exceeded by its short-livedness—use before July 1, 2013.

## Usage

    starget url target_dir [-all]

The following options are available:

- -all Download images of all your starred items.

To download the images of my latest [starred](http://bit.ly/13TMQGc) items:

    starget http://bit.ly/13TMQGc /tmp/starred

Add the `-all` option and you would literally download all of my starred images since 2007. 

So, if you have starred items with images that you don't want to lose: make the starred items page public in your Google Reader settings, copy and paste the URL, and download all the images you once have starred.

## Installation

Install with [npm](https://npmjs.org):

    npm install -g starget

## License

[MIT License](https://raw.github.com/michaelnisi/starget/master/LICENSE)
