---
title: Rexx
year: 1979
era: 1970s
designers: [Mike Cowlishaw]
paradigms: [scripting, procedural, structured]
typing: dynamic, everything is a string
summary: IBM's readable scripting and macro language that became the glue of mainframes, OS/2 and the Amiga.
links:
  - label: Rexx Language Association
    url: https://www.rexxla.org/
  - label: Open Object Rexx (ooRexx)
    url: https://www.oorexx.org/
  - label: Regina Rexx interpreter
    url: https://regina-rexx.sourceforge.io/
  - label: ANSI X3.274-1996 Rexx standard (summary and errata by Cowlishaw)
    url: https://speleotrove.com/rexxhist/
---

## Hello, World!

```text
/* A Rexx program must begin with a comment on classic hosts */
say "Hello, World!"
```

## About

Rexx ("Restructured Extended Executor") was designed to be easy to read and write for people who were not full-time programmers. It has only one data type, the character string, with numbers handled as decimal strings of arbitrary precision; it offers powerful `parse` templates for pulling fields out of text, associative "stem" variables, and a trace facility for debugging. Its defining feature is that any string the interpreter does not recognise as Rexx is passed to the host environment as a command, which makes it ideal as a macro and automation language inside editors, terminals and operating systems.

## History

Mike Cowlishaw started Rexx at IBM UK in March 1979 as a replacement for the EXEC 2 language on VM/CMS and distributed it internally over IBM's network, incorporating feedback from thousands of users. It shipped in VM/SP in 1983 and spread to MVS/TSO, OS/2, PC DOS, the Amiga (as ARexx) and even Windows. ANSI standardised Rexx in 1996, and Cowlishaw's object-oriented Object Rexx was released as open source as ooRexx in 2005. Rexx remains the standard scripting language on IBM z/OS and influenced the design of NetRexx and the decimal arithmetic in Java's `BigDecimal`.
