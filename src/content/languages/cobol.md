---
title: COBOL
year: 1959
era: 1950s
designers: [CODASYL committee, Grace Hopper (influence)]
paradigms: [imperative, procedural, object-oriented]
typing: static, weak
summary: The English-like business language that still processes a large share of the world's banking, insurance and government transactions.
links:
  - label: ISO/IEC 1989:2023 (COBOL standard)
    url: https://www.iso.org/standard/74527.html
  - label: GnuCOBOL, a free COBOL compiler
    url: https://gnucobol.sourceforge.io/
  - label: IBM Enterprise COBOL for z/OS
    url: https://www.ibm.com/products/cobol-compiler-zos
  - label: Open Mainframe Project COBOL Programming Course
    url: https://github.com/openmainframeproject/cobol-programming-course
---

## Hello, World!

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO-WORLD.

       PROCEDURE DIVISION.
           DISPLAY "Hello, World!".
           STOP RUN.
```

Compile with `cobc -x hello.cob && ./hello`.

## About

COBOL ("Common Business-Oriented Language") was designed so that programs could be read by managers and auditors, which explains its verbose, sentence-like syntax and its division of every program into Identification, Environment, Data and Procedure divisions. It excels at fixed-format record processing, decimal arithmetic without rounding errors and reports, exactly the needs of payroll, accounting and transaction systems. Estimates suggest hundreds of billions of lines of COBOL remain in production, much of it on IBM mainframes.

## History

The language was created in 1959 by the CODASYL committee convened by the US Department of Defense to produce a portable business language; Grace Hopper's FLOW-MATIC was its most important ancestor and she served as a technical adviser. COBOL-60 was followed by ANSI standards in 1968, 1974 and 1985, with COBOL 2002 adding object orientation and later revisions in 2014 and 2023. The Y2K remediation effort of the late 1990s and renewed demand during the COVID-19 pandemic for unemployment systems both reminded the public how much critical infrastructure still depends on it.
