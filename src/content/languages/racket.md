---
title: Racket
year: 1995
era: 1990s
designers: [Matthias Felleisen, PLT research group]
paradigms: [functional, procedural, meta, language-oriented]
typing: dynamic, with optional Typed Racket
summary: The Scheme descendant built for creating new languages, with a batteries-included distribution and a strong teaching heritage.
links:
  - label: Racket-lang.org
    url: https://racket-lang.org/
  - label: Racket documentation
    url: https://docs.racket-lang.org/
  - label: The Racket Guide
    url: https://docs.racket-lang.org/guide/
  - label: How to Design Programs (textbook)
    url: https://htdp.org/
---

## Hello, World!

```racket
#lang racket

(displayln "Hello, World!")
```

## About

Racket started as a Scheme but became a platform for "language-oriented programming": the `#lang` line at the top of each file selects the language it is written in, and Racket's macro system and module system make it practical to define new languages with their own syntax, semantics and static checks. The distribution includes the DrRacket IDE, a GUI toolkit, a web server, a documentation system, a package manager and Typed Racket, a gradually typed sister language. Its teaching languages and the *How to Design Programs* curriculum are used in universities and schools worldwide.

## History

Matthias Felleisen founded the PLT research group at Rice University in 1995, and the first release of what was then called PLT Scheme, with the DrScheme environment, was aimed at teaching novices. Over the following years it accumulated a module system, hygienic macros with full syntax objects, contracts and continuations research. The project was renamed Racket in 2010 to signal that it had grown beyond Scheme, and the runtime was rebuilt on top of Chez Scheme in 2019, giving a large performance boost. Racket remains an important venue for programming-language research and education.
