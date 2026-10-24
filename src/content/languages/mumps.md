---
title: MUMPS (M)
year: 1966
era: 1960s
designers: [Neil Pappalardo, Robert Greenes, Curt Marble]
paradigms: [imperative, procedural]
typing: dynamic, untyped strings
summary: The hospital-born language with a built-in hierarchical database that still runs much of healthcare and banking.
links:
  - label: ISO/IEC 11756:1999 (M standard)
    url: https://www.iso.org/standard/29268.html
  - label: YottaDB, an open-source M implementation
    url: https://yottadb.com/
  - label: GT.M (Greystone Technology M)
    url: https://sourceforge.net/projects/fis-gtm/
  - label: InterSystems ObjectScript (M-derived)
    url: https://docs.intersystems.com/
---

## Hello, World!

```text
HELLO ; Print a greeting
    WRITE "Hello, World!",!
    QUIT
```

Experienced M programmers abbreviate almost everything: `W "Hello, World!",! Q`.

## About

MUMPS ("Massachusetts General Hospital Utility Multi-Programming System"), later renamed M, fuses a language with a persistent, hierarchical key-value database. Variables prefixed with a caret (`^`) are "globals" that live on disk and are shared between processes, so there is no separate database layer to call. The syntax is terse to the point of being cryptic, with single-letter command abbreviations and no reserved words, but the model scaled remarkably well on the small machines of the era and still underpins very large systems today.

## History

The language was created in 1966 and 1967 in the Laboratory of Computer Science at Massachusetts General Hospital by Neil Pappalardo, Robert Greenes and Curt Marble. It was standardised by ANSI in 1977 and ISO in 1992. The US Department of Veterans Affairs built its VistA electronic health-record system in MUMPS, Epic Systems' widely deployed hospital software runs on InterSystems' M-derived platform, and many banks and brokerages run core ledgers on GT.M or YottaDB.
