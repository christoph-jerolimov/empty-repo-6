---
title: Fortran
year: 1957
era: 1950s
designers: [John Backus, IBM]
paradigms: [imperative, procedural, array, object-oriented]
typing: static, strong, manifest
summary: The first widely used high-level language, still the workhorse of scientific and high-performance computing.
links:
  - label: Fortran-lang community homepage
    url: https://fortran-lang.org/
  - label: ISO/IEC JTC1/SC22/WG5 Fortran standards committee
    url: https://wg5-fortran.org/
  - label: J3 US Fortran standards committee (draft standards)
    url: https://j3-fortran.org/
  - label: GNU Fortran (gfortran)
    url: https://gcc.gnu.org/fortran/
---

## Hello, World!

```fortran-free-form
program hello
  implicit none
  print *, 'Hello, World!'
end program hello
```

Compile with `gfortran hello.f90 -o hello && ./hello`.

## About

Fortran (originally FORTRAN, from "Formula Translation") is a compiled language designed for numeric computation. Its multidimensional arrays, whole-array expressions, built-in complex numbers and, since Fortran 2008, coarrays for parallel programming make it a natural fit for simulations in physics, climate science, chemistry and engineering. Decades of compiler optimisation and a huge body of validated numerical libraries such as BLAS and LAPACK mean that a great deal of today's supercomputer time is still spent executing Fortran.

## History

John Backus proposed the project at IBM in 1953 to reduce the cost of programming the IBM 704, and the first compiler shipped in April 1957. Its optimising compiler convinced a sceptical community that generated code could rival hand-written assembly. Fortran II and IV followed, and the 1966 ANSI standard made it the first standardised programming language. FORTRAN 77 added structured programming, Fortran 90 brought free-form source, modules and dynamic memory, Fortran 2003 added object-oriented features, and the most recent revisions, Fortran 2018 and Fortran 2023, continue to refine parallelism and interoperability with C.
