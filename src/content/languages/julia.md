---
title: Julia
year: 2012
era: 2010s
designers: [Jeff Bezanson, Stefan Karpinski, Viral B. Shah, Alan Edelman]
paradigms: [multiple dispatch, functional, procedural, array, meta]
typing: dynamic, strong, optional declarations, parametric
summary: The scientific language that aims to be as easy as Python and as fast as C, built on multiple dispatch and JIT compilation.
links:
  - label: JuliaLang.org
    url: https://julialang.org/
  - label: Julia documentation
    url: https://docs.julialang.org/
  - label: Julia package ecosystem (JuliaHub)
    url: https://juliahub.com/
  - label: "\"Why We Created Julia\" (2012 blog post)"
    url: https://julialang.org/blog/2012/02/why-we-created-julia/
---

## Hello, World!

```julia
println("Hello, World!")
```

Run with `julia hello.jl`.

## About

Julia solves the "two-language problem" of prototyping in a dynamic language and rewriting in C or Fortran for speed: its LLVM-based just-in-time compiler specialises every function on the concrete argument types it is called with, so idiomatic code runs at native speed. Multiple dispatch, where the method chosen depends on the types of all arguments, is the central organising principle and makes libraries unusually composable. Julia also offers Lisp-style macros, first-class support for arrays and linear algebra, built-in package management with reproducible environments, distributed and GPU computing, and easy calls to C, Fortran and Python.

## History

Jeff Bezanson, Stefan Karpinski, Viral Shah and Alan Edelman began Julia in 2009 at MIT and announced it in February 2012 with the blog post "Why We Created Julia", which laid out their greedy wish list for a scientific language. Julia 1.0 was released in August 2018 with a stability guarantee, and the language has since been used for climate modelling (CliMA), pharmaceutical modelling (Pumas), the Federal Reserve's macroeconomic models and the Celeste astronomy project, which ran at petaflop scale. Julia Computing (now JuliaHub) was founded by the creators in 2015, and the co-creators received the James H. Wilkinson Prize for Numerical Software in 2019.
