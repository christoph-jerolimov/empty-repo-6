---
title: Nim
year: 2008
era: 2000s
designers: [Andreas Rumpf]
paradigms: [multi-paradigm, imperative, functional, object-oriented, metaprogramming]
typing: static, strong, inferred
summary: Python-like syntax, C-like performance and a macro system that can rewrite the abstract syntax tree.
links:
  - label: Nim-lang.org
    url: https://nim-lang.org/
  - label: Nim Manual
    url: https://nim-lang.org/docs/manual.html
  - label: Nim standard library documentation
    url: https://nim-lang.org/docs/lib.html
  - label: Nimble package directory
    url: https://nimble.directory/
---

## Hello, World!

```nim
echo "Hello, World!"
```

Compile and run with `nim c -r hello.nim`.

## About

Nim is a statically typed, compiled language with indentation-based syntax, type inference and a style-insensitive identifier scheme, which together make code look much like Python while compiling to C, C++, Objective-C or JavaScript. It offers generics, templates and full AST macros for metaprogramming, uniform function call syntax, and a choice of memory-management strategies ranging from the default deterministic ORC reference counting to manual control, which suits it to systems programming, game development and embedded targets as well as scripting-style tasks.

## History

Andreas Rumpf began the language in 2005 under the name Nimrod and made the first public release in 2008, with the compiler becoming self-hosting that same year. It was renamed Nim in 2014 after a redesign, and Nim 1.0 in September 2019 committed to a stable core language. Nim 2.0 (2023) made the ORC memory manager the default and improved concurrency primitives. Development is community-driven, with Rumpf still leading, and the language has found users in game studios, tooling and the Status Ethereum client.
