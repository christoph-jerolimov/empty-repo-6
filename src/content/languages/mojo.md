---
title: Mojo
year: 2023
era: 2020s
designers: [Chris Lattner, Modular]
paradigms: [multi-paradigm, imperative, functional, generic]
typing: static, strong, with Python-style dynamic interop
summary: A Python-family language from the creator of LLVM and Swift, built for AI hardware with systems-level performance.
links:
  - label: Mojo homepage (Modular)
    url: https://www.modular.com/mojo
  - label: Mojo Manual
    url: https://docs.modular.com/mojo/manual/
  - label: Mojo standard library on GitHub
    url: https://github.com/modular/modular
  - label: Mojo changelog
    url: https://docs.modular.com/mojo/changelog
---

## Hello, World!

```python
def main():
    print("Hello, World!")
```

Run with `mojo hello.mojo`. The same program can be written with `fn main():` for a fully statically checked function.

## About

Mojo is designed to be a superset of Python over time, keeping Python's syntax and ecosystem interoperability while adding the pieces needed for high-performance systems programming: `fn` functions with strict typing, `struct` value types with ownership and borrow semantics, compile-time parameters and metaprogramming, SIMD types and direct control over memory layout. It is built on MLIR, the compiler infrastructure Lattner created for heterogeneous hardware, so the same code can target CPUs and GPUs. Mojo is the programming language of Modular's MAX inference platform and is aimed squarely at AI and numerical workloads.

## History

Chris Lattner and Tim Davis founded Modular in 2022 after their work on Swift, MLIR and TensorFlow infrastructure at Apple, Google and SiFive. Mojo was announced in May 2023 with a notebook-based playground, and a local SDK for Linux followed in September 2023 and for macOS later that year. The standard library was open-sourced under the Apache licence in March 2024, and Modular has committed to open-sourcing the compiler as the language matures. Mojo is still pre-1.0 and evolves quickly, with frequent breaking changes documented in its changelog, but it has attracted significant attention as a potential bridge between Python productivity and hardware performance.
