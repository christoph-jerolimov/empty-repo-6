---
title: D
year: 2001
era: 2000s
designers: [Walter Bright, Andrei Alexandrescu]
paradigms: [multi-paradigm, imperative, object-oriented, functional, generic]
typing: static, strong, inferred
summary: A re-imagined C++ with garbage collection, powerful compile-time metaprogramming and design by contract.
links:
  - label: Dlang.org
    url: https://dlang.org/
  - label: D Language Specification
    url: https://dlang.org/spec/spec.html
  - label: D package registry (DUB)
    url: https://code.dlang.org/
  - label: D Language Foundation on GitHub
    url: https://github.com/dlang
---

## Hello, World!

```d
import std.stdio;

void main()
{
    writeln("Hello, World!");
}
```

Compile with `dmd hello.d && ./hello`, or run directly with `rdmd hello.d`.

## About

D keeps the performance and C-compatible ABI of C++ but cleans up the syntax and semantics: modules replace header files, garbage collection is available alongside manual memory management, and slices, ranges and uniform function call syntax make everyday code concise. Its compile-time function execution, static `if`, mixins and templates give D some of the most capable metaprogramming of any systems language, and contracts, unit tests and documentation comments are built into the language itself. Three compilers, DMD, GDC (in GCC) and LDC (on LLVM), share a common front end.

## History

Walter Bright, author of the first native C++ compiler, Zortech C++, began D in 1999 and released version 1.0 in 2007 after years of public development. D2, a substantial redesign with immutability, a new standard library (Phobos) and ideas from Andrei Alexandrescu, became the sole version in 2010 and was described in his book *The D Programming Language*. The compiler back end was fully open-sourced in 2017, and GDC was merged into GCC 9 in 2019. D has a modest but durable community and is used at companies such as Symmetry Investments, Weka.io and in parts of Funkwerk and eBay.
