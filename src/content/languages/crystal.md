---
title: Crystal
year: 2014
era: 2010s
designers: [Ary Borenszweig, Juan Wajnerman, Brian Cardiff, Manas Technology Solutions]
paradigms: [object-oriented, imperative, concurrent]
typing: static, strong, inferred
summary: Ruby's syntax and joy with compiled, statically typed, C-level performance through global type inference.
links:
  - label: Crystal-lang.org
    url: https://crystal-lang.org/
  - label: Crystal language reference
    url: https://crystal-lang.org/reference/
  - label: Crystal API documentation
    url: https://crystal-lang.org/api/
  - label: Crystal on GitHub
    url: https://github.com/crystal-lang/crystal
---

## Hello, World!

```crystal
puts "Hello, World!"
```

Compile and run with `crystal run hello.cr`, or build an optimised binary with `crystal build --release hello.cr`.

## About

Crystal looks almost exactly like Ruby but compiles ahead of time with LLVM to efficient native code. Its compiler performs global type inference so that type annotations are rarely needed, yet nil and type errors are caught at compile time, with union types tracking the possibilities. The language offers macros that generate code at compile time, generics, structs for stack-allocated values, easy bindings to C libraries, and concurrency through fibers and channels inspired by Go. The result appeals to Ruby developers who want speed and safety without leaving a familiar style.

## History

Crystal was started in 2011 at the Argentinian consultancy Manas Technology Solutions by Ary Borenszweig and Juan Wajnerman, with Brian Cardiff joining as a core developer, and the compiler became self-hosting in November 2013. The first public releases followed in 2014. After a long 0.x series the team shipped Crystal 1.0 in March 2021 with a commitment to backward compatibility, and multithreading support, Windows support and improved incremental compilation have been the focus of subsequent releases. Development is funded by sponsors through 84codes and the community.
