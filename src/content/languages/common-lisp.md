---
title: Common Lisp
year: 1984
era: 1980s
designers: [Guy L. Steele, Scott Fahlman, Richard P. Gabriel, David Moon, Daniel Weinreb]
paradigms: [multi-paradigm, functional, procedural, object-oriented, meta]
typing: dynamic, strong, optional declarations
summary: The large, industrial-strength Lisp standard, with CLOS, the condition system and a legendary macro facility.
links:
  - label: Common Lisp HyperSpec (ANSI standard, hypertext)
    url: https://www.lispworks.com/documentation/HyperSpec/Front/
  - label: Common-Lisp.net
    url: https://common-lisp.net/
  - label: Steel Bank Common Lisp (SBCL)
    url: https://www.sbcl.org/
  - label: Practical Common Lisp by Peter Seibel
    url: https://gigamonkeys.com/book/
---

## Hello, World!

```lisp
(format t "Hello, World!~%")
```

Or as a named function:

```lisp
(defun hello ()
  (write-line "Hello, World!"))

(hello)
```

## About

Common Lisp is a "big" Lisp designed for building large systems. It ships with the Common Lisp Object System (CLOS), which offers multiple dispatch, multiple inheritance and a metaobject protocol; a condition system that generalises exceptions with restarts that let programs recover rather than unwind; and macros that operate on the full code tree. Optional type declarations let compilers such as SBCL produce fast native code, and the interactive image-based workflow means programs are grown and modified while they run.

## History

By the early 1980s the Lisp world had fragmented into MacLisp, Interlisp, Lisp Machine Lisp, NIL and others. With DARPA encouragement, a group led by Guy Steele produced *Common Lisp: The Language* in 1984 to unify them, and the ANSI X3J13 committee refined that into the standard adopted in 1994, notable as the first object-oriented language to be ANSI standardised. Commercial implementations from Franz, LispWorks and Symbolics were joined by free ones such as CMUCL, SBCL, CLISP, ECL and Clozure CL. Common Lisp powered early expert systems and still runs in airline scheduling, chip verification, Grammarly and NASA mission planning.
