---
title: Haskell
year: 1990
era: 1990s
designers: [Haskell committee (Simon Peyton Jones, Paul Hudak, Philip Wadler, and others)]
paradigms: [purely functional, lazy, declarative]
typing: static, strong, inferred
summary: The purely functional, lazily evaluated language that turned type classes and monads into mainstream ideas.
links:
  - label: Haskell.org
    url: https://www.haskell.org/
  - label: Haskell 2010 Language Report
    url: https://www.haskell.org/onlinereport/haskell2010/
  - label: Glasgow Haskell Compiler (GHC)
    url: https://www.haskell.org/ghc/
  - label: Hackage package archive
    url: https://hackage.haskell.org/
---

## Hello, World!

```haskell
main :: IO ()
main = putStrLn "Hello, World!"
```

Run it with `runghc hello.hs`, or compile with `ghc hello.hs && ./hello`.

## About

Haskell is pure: functions cannot have side effects, and effects such as printing are described as values of type `IO` that the runtime executes. Evaluation is lazy by default, so infinite data structures and custom control flow are ordinary library code. Its type system, with type classes, algebraic data types, parametric polymorphism and powerful extensions in GHC, catches a vast range of errors at compile time while inference keeps annotations optional. Haskell is used for compilers, financial modelling, blockchain systems, static analysis tools and anywhere correctness is paramount.

## History

By the late 1980s there were many lazy functional languages, including Miranda, Lazy ML and Orwell, and a committee formed in 1987 to define a common one. Haskell 1.0, named after the logician Haskell Curry, was published in 1990, and the Haskell 98 report (1999) provided a stable base, updated as Haskell 2010. The Glasgow Haskell Compiler became the dominant implementation and the proving ground for research on monads, software transactional memory, generalised algebraic data types and type families. The motto "avoid success at all costs" notwithstanding, Haskell's ideas now appear in Rust, Swift, Scala, TypeScript and PureScript.
