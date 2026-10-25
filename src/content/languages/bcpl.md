---
title: BCPL
year: 1967
era: 1960s
designers: [Martin Richards]
paradigms: [imperative, procedural, structured]
typing: untyped (single word type)
summary: The tiny typeless systems language that led to B and then C, and the origin of curly braces and the first "hello, world".
links:
  - label: Martin Richards' BCPL distribution and manual
    url: https://www.cl.cam.ac.uk/~mr10/BCPL.html
  - label: BCPL Reference Manual (1967, PDF)
    url: https://www.cl.cam.ac.uk/~mr10/bcplman.pdf
  - label: Dennis Ritchie's "The Development of the C Language"
    url: https://www.bell-labs.com/usr/dmr/www/chist.html
---

## Hello, World!

```text
GET "libhdr"

LET start() = VALOF
{ writes("Hello, World!*n")
  RESULTIS 0
}
```

`*n` is BCPL's newline escape. In the original 1967 syntax the braces would be written `$(` and `$)`.

## About

BCPL ("Basic Combined Programming Language") has exactly one data type, the machine word, and leaves it to operators to decide whether a word is an integer, a pointer or a character. That radical simplicity made it easy to port: the compiler produced an intermediate code called O-code that could be retargeted quickly, an idea that prefigured later virtual machines. BCPL gave us the `{ }` block delimiters (as `$( $)`), the `//` comment, and the convention of a `start` or `main` entry point.

## History

Martin Richards designed BCPL at Cambridge in 1966 as a simplified version of CPL and implemented it at MIT in 1967. It was used for the early Multics work and on the Xerox Alto, and in 1969 Ken Thompson stripped it down further to create B for the PDP-7 Unix system; Dennis Ritchie then added types to B and produced C. Richards' own 1967 memo on BCPL contains the first known "hello, world" style example, which Brian Kernighan borrowed for his 1972 B tutorial and later immortalised in *The C Programming Language*. Richards still maintains a modern BCPL distribution.
