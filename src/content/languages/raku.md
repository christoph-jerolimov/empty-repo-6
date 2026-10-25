---
title: Raku
year: 2015
era: 2010s
designers: [Larry Wall, Raku community]
paradigms: [multi-paradigm, object-oriented, functional, procedural, concurrent]
typing: dynamic, gradual, strong
summary: The language formerly known as Perl 6; a from-scratch redesign with grammars, gradual typing and built-in concurrency.
links:
  - label: Raku.org
    url: https://raku.org/
  - label: Raku documentation
    url: https://docs.raku.org/
  - label: Raku design documents (Synopses)
    url: https://design.raku.org/
  - label: Rakudo compiler
    url: https://rakudo.org/
---

## Hello, World!

```raku
say 'Hello, World!';
```

Run with `raku hello.raku`.

## About

Raku keeps Perl's expressiveness and love of text but is a different language: it has a clean object system with roles and a meta-object protocol, gradual typing, lazy lists, junctions, rational numbers by default, Unicode operators, and a full concurrency model with promises, supplies and channels. Its most distinctive feature is grammars, which elevate regular expressions into readable, composable, recursive-descent parsers that are part of the language and used to implement Raku itself. The reference compiler, Rakudo, runs on the MoarVM and JVM back ends.

## History

Larry Wall announced Perl 6 in July 2000 as a community rewrite of Perl, and the design was captured in a series of Apocalypses, Exegeses and Synopses. Several implementations came and went, including Pugs in Haskell and Parrot, before Rakudo on MoarVM became the production compiler and the first official release, Rakudo Star "Christmas" 6.c, shipped on 25 December 2015. The name confused users and held back both languages, so after long discussion the project was renamed Raku in October 2019. Development continues with monthly Rakudo releases and language versions 6.d (2018) and 6.e in progress.
