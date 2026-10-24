---
title: OCaml
year: 1996
era: 1990s
designers: [Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy]
paradigms: [functional, imperative, object-oriented, modular]
typing: static, strong, inferred
summary: The pragmatic, fast ML dialect behind the Coq proof assistant, Jane Street's trading systems and the first Rust compiler.
links:
  - label: OCaml.org
    url: https://ocaml.org/
  - label: The OCaml Manual
    url: https://ocaml.org/manual/
  - label: Real World OCaml (book)
    url: https://dev.realworldocaml.org/
  - label: opam package manager
    url: https://opam.ocaml.org/
---

## Hello, World!

```ocaml
let () = print_endline "Hello, World!"
```

Run with `ocaml hello.ml`, or compile natively with `ocamlfind ocamlopt hello.ml -o hello`.

## About

OCaml takes the ML heritage of type inference, algebraic data types, pattern matching and a powerful module system, and adds a practical mix of imperative features, an object system and a native-code compiler that produces fast executables with fast compile times. The type system catches errors early without ceremony, and features such as polymorphic variants, generalised algebraic data types and first-class modules support sophisticated library design. OCaml 5 added multicore parallelism and effect handlers. It is used in formal verification (Coq, Why3), static analysis (Infer, Frama-C), finance, and as the implementation language of early versions of Rust, Flow, Hack and ReasonML.

## History

Caml ("Categorical Abstract Machine Language") was developed at INRIA in France from 1985 by Guy Cousineau, Gérard Huet and others, and Xavier Leroy's lightweight Caml Light appeared in 1990. Leroy, Jérôme Vouillon and Didier Rémy added the object layer that gave Objective Caml, released in 1996, its name, and the native-code compiler arrived at the same time. Renamed OCaml in 2011, the language gained the opam package manager in 2013 and a reorganised OCaml.org community. The multicore runtime, developed over nearly a decade at OCaml Labs, was released as OCaml 5.0 in December 2022.
