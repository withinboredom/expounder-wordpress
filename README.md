# Expounder

Expounder is a small JS library that implements a concept I had for adaptable
experience levels in educational texts. In more concrete terms, expounder allows
authors of tutorials to hide their explanations if they expect readers to be
familiar with a concept. The author can choose to add a link to the concept,
which will appear underlined, and the reader can click on it to expand the next
few sentences, paragraph or any other element that explains the concept.

This way, people familiar with a term don't need to spend a paragraph reading
about it or waste time (and potentially miss other useful information) skimming
ahead. You can see an example in the `examples` directory, on the [Expounder
page](https://skorokithakis.github.io/expounder/) or on [one of my
posts](https://www.stavros.io/posts/building-cheap-home-sensorcontroller/).


## Usage

Expounder.js can be added to your site in two simple steps:

<ol>
<li>Download and include <code>expounder.js</code> and <code>expounder.css</code> (or the minified
   version, for production) in your page. Alternatively, just add these two
   lines to your HTML:

<code><pre>&lt;script src="https://gitcdn.xyz/repo/skorokithakis/expounder/master/expounder.js">&lt;/script>
&lt;link rel="stylesheet" href="https://gitcdn.xyz/repo/skorokithakis/expounder/master/expounder.css" /></pre></code>

   </li>
   <li>
   Add <code>data-expounder</code>with arbitrary IDs for <code>span</code> elements that will act
   as hooks that expand areas, and <code>data-expounded</code> for the areas to be expanded.
   </li>
</ol>

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


## Thanks

Thanks go to:

* [Stelios](https://github.com/stelabouras), who wrote the code for the entire
  thing.


## Changelog

* 0.0.3 -- 4/3/2016 Updated the API, added the ability to expand every element with the same data-expounded id from a single expounder link.
* 0.0.2 -- 4/1/2016 Added contract option with data-expounder-c attribute.
* 0.0.1 -- 3/13/2016 Initial release.
