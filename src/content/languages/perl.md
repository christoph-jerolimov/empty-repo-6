---
title: Perl
year: 1987
era: 1980s
designers: [Larry Wall]
paradigms: [multi-paradigm, scripting, procedural, object-oriented, functional]
typing: dynamic
summary: The "Swiss Army chainsaw" of text processing and system administration that powered the early web and CPAN.
links:
  - label: Perl.org
    url: https://www.perl.org/
  - label: Perl documentation (perldoc)
    url: https://perldoc.perl.org/
  - label: CPAN, the Comprehensive Perl Archive Network
    url: https://www.cpan.org/
  - label: MetaCPAN
    url: https://metacpan.org/
---

## Hello, World!

```perl
#!/usr/bin/env perl
use strict;
use warnings;

print "Hello, World!\n";
```

With the `say` feature (Perl 5.10 and later):

```perl
use v5.36;
say "Hello, World!";
```

## About

Perl combines features from C, shell, sed and AWK into a highly expressive language whose motto is "There's More Than One Way To Do It". It is best known for integrating regular expressions directly into the syntax, for its flexible scalars, arrays and hashes, and for context-sensitive behaviour that makes short scripts remarkably compact. CPAN, launched in 1995, was one of the first large language package archives and set the model for later ecosystems. Perl is still widely used for system administration, bioinformatics, log analysis and legacy web applications.

## History

Larry Wall, a linguist by training, released Perl 1.0 in December 1987 to make report processing easier at Unisys. Perl 4 (1991) accompanied the "Camel Book", *Programming Perl*, and Perl 5 (1994) added references, modules and objects, turning it into a general-purpose language. In the late 1990s Perl dominated CGI web programming and was called "the duct tape of the Internet". The long-running Perl 6 project, begun in 2000, eventually became a separate language renamed Raku in 2019, while Perl 5 continues with annual releases, reaching version 5.40 in 2024.
