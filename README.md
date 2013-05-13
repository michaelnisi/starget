# starget - copy images of starred items

![x](https://dl-web.dropbox.com/get/Public/reader.png?w=AACFB2FdUS_S9d1_nAoaVg7_g9ErA4nrlM7CsgQ98IBRhQ)

`starget` is a tiny command-line tool of specific use: it copies all images referred in your starred Google Reader items to disk. Its peculiar use case is only exceeded by its short-livedness—use before July 1, 2013.

## Usage

    starget url target_dir [-all]

The following options are available:

- -all Download images of all items you ever starred.

The following downloads the images of my latest [starred](http://bit.ly/13TMQGc) items:

    starget http://bit.ly/13TMQGc /tmp/starred

## Installation

Install with [npm](https://npmjs.org):

    npm install -g starget

## License

[MIT License](https://raw.github.com/michaelnisi/starget/master/LICENSE)
