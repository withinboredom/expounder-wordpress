=== Expounder ===
Contributors: withinboredom
Tags: tutorials,text expander
Requires at least: 5.6.2
Tested up to: 5.6.2
Requires PHP: 7.4
License: GPLv2

Allows authors of tutorials to hide their explanations if they expect readers to be familiar with a concept.

== Description ==
Expounder allows authors of tutorials to hide their explanations if they expect readers to be familiar with a concept. The author can choose to add a link to the concept, which will appear underlined, and the reader can click on it to expand the next few sentences, paragraph or any other element that explains the concept.

This way, people familiar with a term don't need to spend a paragraph reading about it or waste time (and potentially miss other useful information) skimming ahead.

Currently, only shortcodes are supported, with Gutenberg support coming soon.

Mark a clickable bit of text:

`[ex# name='expound']some clickable bit of text[/ex#]`

And then when clicked, show the this:

`[ex#d name='expound']this only shows when the other one is clicked[/ex#d]`