---
title: CoffeeScript
year: 2009
era: 2000s
designers: [Jeremy Ashkenas]
paradigms: [multi-paradigm, functional, object-oriented, prototype-based]
typing: dynamic, weak
summary: The "little language" that compiled to JavaScript and whose arrow functions, classes and destructuring shaped ES2015.
links:
  - label: CoffeeScript.org
    url: https://coffeescript.org/
  - label: CoffeeScript on GitHub
    url: https://github.com/jashkenas/coffeescript
  - label: CoffeeScript 2 announcement and migration guide
    url: https://coffeescript.org/announcing-coffeescript-2/
---

## Hello, World!

```coffeescript
console.log 'Hello, World!'
```

Compile with `coffee -c hello.coffee` or run directly with `coffee hello.coffee`.

## About

CoffeeScript exposed "the good parts" of JavaScript through a cleaner, Ruby- and Python-inspired syntax: significant whitespace, optional parentheses, `->` function literals with lexical `this` via `=>`, classes with inheritance, comprehensions, splats, destructuring and the existential operator `?`. It compiled one-to-one into readable JavaScript that ran everywhere, and it demonstrated that a compile-to-JS language could be practical for production, which opened the door for TypeScript, Babel and the whole transpiler ecosystem.

## History

Jeremy Ashkenas, also the author of Backbone.js and Underscore.js, published CoffeeScript on Christmas Day 2009, and within a year the compiler was self-hosting and the language was bundled by default with Ruby on Rails 3.1. It was among the top ten languages on GitHub by 2012 and directly influenced the design of arrow functions, classes, destructuring and template literals in ECMAScript 2015. As native JavaScript absorbed its best ideas, usage declined; CoffeeScript 2 (2017) switched to emitting modern ES2015+ output, and the project remains maintained but is largely of historical significance today.
