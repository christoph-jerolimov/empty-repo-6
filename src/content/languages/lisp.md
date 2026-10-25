---
title: Lisp
year: 1958
era: 1950s
designers: [John McCarthy]
paradigms: [functional, procedural, meta, reflective]
typing: dynamic, strong
summary: The second-oldest high-level language still in use, built on symbolic expressions, recursion and code-as-data.
links:
  - label: McCarthy's 1960 paper "Recursive Functions of Symbolic Expressions"
    url: https://www-formal.stanford.edu/jmc/recursive.html
  - label: History of Lisp (McCarthy, 1979)
    url: https://www-formal.stanford.edu/jmc/history/lisp/lisp.html
  - label: LISP 1.5 Programmer's Manual (Software Preservation Group)
    url: https://www.softwarepreservation.org/projects/LISP/book/LISP%201.5%20Programmers%20Manual.pdf
  - label: Common Lisp HyperSpec
    url: https://www.lispworks.com/documentation/HyperSpec/Front/
---

## Hello, World!

In the spirit of LISP 1.5, which worked with symbols rather than strings:

```lisp
(PRINT (QUOTE (HELLO WORLD)))
```

In any modern Lisp dialect:

```lisp
(print "Hello, World!")
```

## About

Lisp ("LISt Processor") represents both programs and data as nested lists written as parenthesised symbolic expressions. Because code is just data, Lisp programs can inspect and generate other programs, which gives rise to its famously powerful macro systems. It introduced or popularised garbage collection, conditionals as expressions, first-class functions, recursion as a primary control structure, dynamic typing and the interactive read-eval-print loop. Today the name covers a family of dialects including Common Lisp, Scheme, Clojure, Emacs Lisp and Racket.

## History

John McCarthy designed Lisp at MIT in 1958 as a notation for artificial-intelligence research and described it in his 1960 paper on recursive functions. Steve Russell realised that the paper's `eval` function could be hand-translated into IBM 704 machine code, producing the first interpreter. Lisp became the language of AI labs through the 1960s and 1970s, spawning specialised Lisp machines in the 1980s. The splintering of dialects led to the Common Lisp standardisation effort (ANSI, 1994), while Scheme (1975) pursued minimalism. Lisp's ideas resurfaced in the 2000s through Clojure on the JVM and continue to influence languages such as JavaScript, Python, Ruby and Julia.
