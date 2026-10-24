---
title: AWK
year: 1977
era: 1970s
designers: [Alfred Aho, Peter Weinberger, Brian Kernighan]
paradigms: [scripting, data-driven, procedural]
typing: dynamic, weak
summary: The pattern-action text-processing language that is part of every Unix system and the ancestor of Perl.
links:
  - label: POSIX awk specification (The Open Group)
    url: https://pubs.opengroup.org/onlinepubs/9699919799/utilities/awk.html
  - label: GNU Awk (gawk) manual
    url: https://www.gnu.org/software/gawk/manual/
  - label: The One True AWK (Kernighan's implementation)
    url: https://github.com/onetrueawk/awk
  - label: The AWK Programming Language, 2nd edition
    url: https://awk.dev/
---

## Hello, World!

```awk
BEGIN { print "Hello, World!" }
```

Run with `awk 'BEGIN { print "Hello, World!" }'`.

## About

An AWK program is a list of `pattern { action }` rules. The interpreter reads its input one record (line) at a time, splits it into fields `$1`, `$2` and so on, and runs each action whose pattern matches. Associative arrays, regular expressions, printf-style formatting and implicit type conversion make one-liners for summarising logs, reformatting columns or computing totals almost trivial. AWK is specified by POSIX and installed everywhere, which keeps it a staple of shell scripting nearly fifty years on.

## History

AWK takes its name from the initials of its authors Alfred Aho, Peter Weinberger and Brian Kernighan, who created it at Bell Labs in 1977 and shipped it with Version 7 Unix in 1979. The 1985 "new awk" (nawk) added user-defined functions and was described in their 1988 book *The AWK Programming Language*. GNU awk (gawk), mawk and BusyBox awk are the common modern implementations, and Kernighan continues to maintain "The One True AWK", adding UTF-8 and CSV support in 2023 alongside a second edition of the book. Larry Wall cited AWK as a direct inspiration for Perl.
