---
title: Forth
year: 1970
era: 1970s
designers: [Charles H. Moore]
paradigms: [stack-oriented, concatenative, procedural, reflective]
typing: untyped
summary: A stack-based language and interactive environment so small it fits in a few kilobytes, beloved in embedded systems and space probes.
links:
  - label: Forth Standard (Forth 2012)
    url: https://forth-standard.org/
  - label: Gforth, the GNU Forth system
    url: https://gforth.org/
  - label: FORTH, Inc.
    url: https://www.forth.com/
  - label: Starting Forth by Leo Brodie (online edition)
    url: https://www.forth.com/starting-forth/
---

## Hello, World!

```text
." Hello, World!" CR
```

Or defined as a reusable word and then executed:

```text
: HELLO  ." Hello, World!" CR ;
HELLO
```

## About

Forth programs are built from "words" that operate on an implicit data stack, using reverse Polish notation: `2 3 + .` prints 5. New words are defined in terms of existing ones and immediately become part of the language, so the system is both a compiler and an interactive shell. The entire environment, including the compiler, is tiny and can run directly on bare hardware, which is why Forth has been used in boot firmware (Open Firmware), telescope controllers, NASA spacecraft and countless microcontrollers.

## History

Charles "Chuck" Moore evolved Forth through the 1960s while working on telescope control at the National Radio Astronomy Observatory and named it in 1970 for the "fourth-generation" software he felt it represented (the IBM 1130 only allowed five-character names). FORTH, Inc. was founded in 1973 to commercialise it, and the Forth Interest Group's public-domain fig-FORTH spread it to home computers. The language was standardised as ANS Forth in 1994 and updated as Forth 2012. Its concatenative style influenced PostScript, Factor and Joy, and Moore went on to design Forth-based processors.
