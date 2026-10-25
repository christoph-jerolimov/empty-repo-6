---
title: Standard ML
year: 1983
era: 1980s
designers: [Robin Milner, Mads Tofte, Robert Harper, David MacQueen]
paradigms: [functional, imperative, modular]
typing: static, strong, inferred
summary: The typed functional language with Hindley–Milner inference and a formally defined semantics, the root of OCaml and F#.
links:
  - label: The Definition of Standard ML (Revised, 1997, PDF)
    url: https://smlfamily.github.io/sml97-defn.pdf
  - label: SML Family homepage
    url: https://smlfamily.github.io/
  - label: Standard ML of New Jersey
    url: https://www.smlnj.org/
  - label: MLton whole-program optimising compiler
    url: http://mlton.org/
---

## Hello, World!

```ocaml
print "Hello, World!\n";
```

## About

Standard ML (SML) is a strict, mostly functional language with algebraic data types, pattern matching, parametric polymorphism and automatic type inference, so programs are fully statically typed yet rarely need type annotations. Its module system of structures, signatures and functors remains one of the most expressive ever designed. SML is unusual in having a complete formal definition of both static and dynamic semantics, which made it the language of choice for research in type theory, compilers and theorem provers, and for teaching at universities such as Carnegie Mellon.

## History

ML ("Meta Language") was created by Robin Milner at Edinburgh in 1973 as the scripting language for the LCF theorem prover, where its type system guaranteed that only valid proofs could be constructed. Standard ML was defined from 1983 onwards by Milner, Mads Tofte and Robert Harper to unify the various ML dialects, and published as *The Definition of Standard ML* in 1990, revised in 1997. Milner received the Turing Award in 1991 in part for this work. Descendants include Caml and OCaml, F#, and the influence of ML is visible in Haskell, Rust, Scala, Swift and Kotlin.
