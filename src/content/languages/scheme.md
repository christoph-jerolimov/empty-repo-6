---
title: Scheme
year: 1975
era: 1970s
designers: [Guy L. Steele, Gerald Jay Sussman]
paradigms: [functional, procedural, meta]
typing: dynamic, strong
summary: A minimalist Lisp dialect with lexical scope, first-class continuations and proper tail calls, famous as the language of SICP.
links:
  - label: Scheme.org, community homepage
    url: https://www.scheme.org/
  - label: R7RS Small (Revised⁷ Report on Scheme)
    url: https://small.r7rs.org/
  - label: Structure and Interpretation of Computer Programs (SICP)
    url: https://mitpress.mit.edu/9780262510875/structure-and-interpretation-of-computer-programs/
  - label: GNU Guile
    url: https://www.gnu.org/software/guile/
---

## Hello, World!

```scheme
(display "Hello, World!")
(newline)
```

## About

Scheme strips Lisp down to a small core of orthogonal features: lexical scoping, first-class procedures, proper tail recursion (so loops are written as recursive calls), hygienic macros and first-class continuations that capture "the rest of the computation". The standard is deliberately brief, and the language is described by a few dozen pages compared to hundreds for Common Lisp. That minimalism made it the ideal vehicle for teaching programming-language concepts and for research into compilers, type systems and program semantics.

## History

Gerald Jay Sussman and Guy Steele created Scheme at the MIT AI Lab in 1975 while trying to understand Carl Hewitt's actor model, and documented their discoveries in the influential "Lambda Papers". It became the language of MIT's introductory course and of *Structure and Interpretation of Computer Programs* (1985), which shaped computer-science teaching for decades. The language has been defined by a series of "Revised Reports" (R⁴RS in 1991, R⁵RS in 1998, R⁶RS in 2007 and R⁷RS Small in 2013) plus an IEEE standard, and implementations such as Racket, Guile, Chez Scheme, Chicken and Gambit remain active.
