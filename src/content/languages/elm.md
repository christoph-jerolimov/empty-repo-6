---
title: Elm
year: 2012
era: 2010s
designers: [Evan Czaplicki]
paradigms: [purely functional, reactive, declarative]
typing: static, strong, inferred
summary: A delightful purely functional language for web front ends, famous for "no runtime exceptions" and The Elm Architecture.
links:
  - label: Elm-lang.org
    url: https://elm-lang.org/
  - label: An Introduction to Elm (official guide)
    url: https://guide.elm-lang.org/
  - label: Elm package catalogue
    url: https://package.elm-lang.org/
  - label: Elm on GitHub
    url: https://github.com/elm/compiler
---

## Hello, World!

```elm
module Main exposing (main)

import Html exposing (text)


main =
    text "Hello, World!"
```

Run with `elm reactor` and open `Main.elm` in the browser, or build with `elm make Main.elm`.

## About

Elm is a Haskell-influenced language that compiles to JavaScript and is dedicated to building browser user interfaces. All functions are pure, all data is immutable and all side effects are described as data and executed by the runtime, which makes "no runtime exceptions in practice" a realistic promise. The Elm Architecture, a simple model-update-view loop, structures every application and directly inspired Redux and similar state-management libraries. The compiler is renowned for its friendly, specific error messages, and enforced semantic versioning in the package manager detects breaking API changes automatically.

## History

Evan Czaplicki designed Elm for his 2012 senior thesis at Harvard on functional reactive programming for GUIs and released it that year. The language moved away from explicit signals to the simpler command-and-subscription model in Elm 0.17 (2016), and 0.19 (2018) shrank output with dead-code elimination and finalised the architecture. NoRedInk, where Czaplicki worked for several years, became the best-known production user. Elm has evolved slowly and deliberately, and its ideas have spread through Redux, Elmish for F#, and the wider adoption of unidirectional data flow in front-end frameworks.
