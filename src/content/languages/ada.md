---
title: Ada
year: 1980
era: 1980s
designers: [Jean Ichbiah, Tucker Taft, and teams at CII Honeywell Bull and Intermetrics]
paradigms: [imperative, object-oriented, concurrent, structured]
typing: static, strong, safe
summary: The safety-critical language of avionics, railways and defence, with built-in tasking and contracts.
links:
  - label: Ada-lang.org community homepage
    url: https://ada-lang.io/
  - label: Ada 2022 Reference Manual (ISO/IEC 8652:2023)
    url: http://www.ada-auth.org/standards/ada22.html
  - label: AdaCore (GNAT compiler and SPARK)
    url: https://www.adacore.com/
  - label: Learn Ada (interactive course)
    url: https://learn.adacore.com/
---

## Hello, World!

```ada
with Ada.Text_IO;

procedure Hello is
begin
   Ada.Text_IO.Put_Line ("Hello, World!");
end Hello;
```

Compile with `gnatmake hello.adb && ./hello`.

## About

Ada was built for very large, long-lived, high-integrity systems. Its type system lets programmers define numeric ranges, fixed-point types and array bounds that are checked at compile time or run time, and its packages, generics and separate compilation support programming in the large. Concurrency is part of the language through tasks, protected objects and rendezvous, and Ada 2012 added design-by-contract preconditions and postconditions. The SPARK subset goes further and allows mathematical proof that a program is free of runtime errors, which is why Ada is still chosen for aircraft, satellites, trains and medical devices.

## History

The US Department of Defense launched a competition in the 1970s to replace the hundreds of languages used in its embedded systems. The winning "Green" proposal from Jean Ichbiah's team at CII Honeywell Bull became Ada, named after Ada Lovelace, and was standardised as MIL-STD-1815 in 1980 and by ANSI in 1983. Ada 95, led by Tucker Taft, made it the first internationally standardised object-oriented language. Further revisions appeared in 2005, 2012 and 2022. The DoD mandate was dropped in 1997, but the GNAT compiler in GCC and the SPARK toolset have kept Ada relevant for safety and security-critical software.
