---
title: PL/I
year: 1964
era: 1960s
designers: [IBM, SHARE user group]
paradigms: [imperative, procedural, structured]
typing: static, strong
summary: IBM's attempt at a single language for both scientific and business computing, and a pioneer of exceptions and multitasking.
links:
  - label: IBM Enterprise PL/I for z/OS
    url: https://www.ibm.com/products/pli-compiler-zos
  - label: Iron Spring PL/I compiler for Linux
    url: http://www.iron-spring.com/
  - label: PL/I language history at the Software Preservation Group
    url: https://www.softwarepreservation.org/projects/pl1/
---

## Hello, World!

```text
HELLO: PROCEDURE OPTIONS (MAIN);
   PUT LIST ('Hello, World!');
END HELLO;
```

## About

PL/I ("Programming Language One") combined the numeric strengths of Fortran, the record and file handling of COBOL and the block structure of ALGOL into one large language. It introduced features that were far ahead of their time: exception handling through `ON` conditions, built-in multitasking, pointers, bit strings, preprocessor macros and a philosophy that every program with a plausible meaning should compile. Its sheer size made compilers hard to write, but it remained important on IBM mainframes and influenced C, Ada and many later designs.

## History

IBM and the SHARE user group began the design in 1963 under the name NPL ("New Programming Language") for the forthcoming System/360, which was intended to unify IBM's scientific and commercial product lines. The first compiler shipped in 1966. PL/I was used to write the Multics operating system, large parts of IBM's own software and countless business applications. ANSI standardised it in 1976 and a subset in 1981. Although it never displaced Fortran or COBOL, IBM continues to ship and maintain Enterprise PL/I for z/OS today.
