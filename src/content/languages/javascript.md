---
title: JavaScript
year: 1995
era: 1990s
designers: [Brendan Eich]
paradigms: [multi-paradigm, event-driven, functional, prototype-based, imperative]
typing: dynamic, weak
summary: The language of the web browser, now also of servers, mobile apps and desktop apps through Node.js and friends.
links:
  - label: ECMAScript Language Specification (ECMA-262)
    url: https://tc39.es/ecma262/
  - label: MDN Web Docs – JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - label: TC39, the ECMAScript committee
    url: https://tc39.es/
  - label: Node.js
    url: https://nodejs.org/
---

## Hello, World!

```javascript
console.log("Hello, World!");
```

In a web page, replacing the document body:

```javascript
document.body.textContent = "Hello, World!";
```

## About

JavaScript is the only language that runs natively in every web browser, which makes it the most widely deployed runtime on Earth. It is dynamically typed, prototype-based, and built around first-class functions, closures and a single-threaded event loop with promises and `async`/`await` for concurrency. ECMAScript 2015 (ES6) modernised the language with classes, modules, arrow functions and destructuring, and yearly editions have continued since. Node.js took JavaScript to the server in 2009, and npm is the largest package registry of any language.

## History

Brendan Eich created the language in ten days in May 1995 at Netscape, under the names Mocha and LiveScript before it was renamed JavaScript to ride Java's popularity. Microsoft's JScript and the browser wars prompted standardisation as ECMAScript in 1997. The ES4 effort collapsed in 2008, but AJAX, jQuery and Google's V8 engine revived the language; ES5 (2009) and especially ES2015 transformed it, and TC39 now ships an edition every June. Frameworks such as React, Angular and Vue, plus runtimes like Node.js, Deno and Bun, have made JavaScript a full-stack language.
