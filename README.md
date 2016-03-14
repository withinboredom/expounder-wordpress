# Expounder

Expounder is a small JS library that implements a concept I had for adaptable
experience levels in educational texts. In more concrete terms, expounder allows
authors of tutorials to hide their explanations if they expect readers to be
familiar with a concept. The author can choose to add a link to the concept,
which will appear underlined, and the reader can click on it to expand the next
few sentences, paragraph or any other element that explains the concept.

This way, people familiar with a term don't need to spend a paragraph reading
about it or waste time (and potentially miss other useful information) skimming
ahead. You can see an example in the `examples` directory or on [one of my
posts](https://www.stavros.io/posts/building-cheap-home-sensorcontroller/).


## Usage

Expounder.js can be added to your site in two simple steps:

1. Include `expounder.js` and `expounder.css` (or the minified version for
   production) in your page.
2. Add `data-expounder` with an arbitrary ID for `span` elements that will act
   as hooks that expand areas and `data-expounded` for the areas to be expanded.

For example:

```html
In the land of Mordor, in the fires of <span data-expounder="mount-doom">Mount
Doom</span>, the Dark Lord Sauron forged in secret, a master ring, to control
all others.

<div data-expounded="mount-doom">Mount Doom is that big-ass mountain over there
with the fires coming out of it.</div>
````


## License

This library is released under the MIT license (see the LICENSE file).

* 3/13/2016 Initial release


## Thanks

Thanks go to:

* [Stelios](https://github.com/stelabouras), who wrote the code for the entire
  thing.


## Changelog

* 0.0.1 -- Initial release.
