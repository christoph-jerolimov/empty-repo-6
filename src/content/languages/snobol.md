---
title: SNOBOL
year: 1962
era: 1960s
designers: [David J. Farber, Ralph E. Griswold, Ivan P. Polonsky]
paradigms: [imperative, pattern matching]
typing: dynamic
summary: The string-processing language whose pattern-matching ideas foreshadowed regular expressions in Perl and beyond.
links:
  - label: SNOBOL4.org, language resources and documentation
    url: https://www.snobol4.org/
  - label: CSNOBOL4, a portable SNOBOL4 implementation
    url: https://www.regressive.org/snobol4/csnobol4/
  - label: The SNOBOL4 Programming Language (Green Book, PDF)
    url: https://www.snobol4.org/history/
---

## Hello, World!

```text
        OUTPUT = "Hello, World!"
END
```

Assigning to the special variable `OUTPUT` writes a line; `END` marks the end of the program.

## About

SNOBOL ("StriNg Oriented and symBOlic Language") was built around pattern matching as a first-class language construct, long before regular expressions were common. Patterns are data values that can be composed, stored in variables and matched against strings with automatic backtracking, and every statement can branch on the success or failure of its match. SNOBOL4 added associative arrays (tables), user-defined data types and the ability to compile and run code at runtime, making it a favourite for text analysis in the humanities and for experimental compilers.

## History

The language was created at Bell Labs between 1962 and 1967 by David Farber, Ralph Griswold and Ivan Polonsky, with SNOBOL4 (1967) being the definitive version. Its portable implementation in the SIL macro language allowed it to run on a wide variety of 1970s machines. Griswold went on to design Icon (1977) and later Unicon as more structured successors, and the pattern-matching concepts were absorbed into AWK, Perl and modern regular-expression engines.
