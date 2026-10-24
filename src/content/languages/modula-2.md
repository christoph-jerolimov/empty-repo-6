---
title: Modula-2
year: 1978
era: 1970s
designers: [Niklaus Wirth]
paradigms: [imperative, procedural, modular, structured]
typing: static, strong
summary: Wirth's successor to Pascal that introduced modules with separate compilation, coroutines and low-level system access.
links:
  - label: GNU Modula-2 (part of GCC)
    url: https://gcc.gnu.org/onlinedocs/gm2/
  - label: ISO/IEC 10514-1:1996 (Modula-2 base language)
    url: https://www.iso.org/standard/18582.html
  - label: Programming in Modula-2 by Niklaus Wirth (ETH Zürich)
    url: https://people.inf.ethz.ch/wirth/ProgInModula2/
  - label: ADW Modula-2 (free compiler for Windows)
    url: https://www.modula2.org/adwm2/
---

## Hello, World!

ISO Modula-2 library:

```text
MODULE Hello;
FROM STextIO IMPORT WriteString, WriteLn;
BEGIN
  WriteString ("Hello, World!");
  WriteLn
END Hello.
```

Wirth's original "PIM" library uses `FROM InOut IMPORT WriteString, WriteLn;` instead.

## About

Modula-2 keeps Pascal's clean syntax and strong typing but adds the module as its central idea: every unit has a definition module (the public interface) and an implementation module, which can be compiled separately and hide their internals. It also provides coroutines for concurrency, a `SYSTEM` module for bit-level and address manipulation, and the case-sensitive, upper-case keywords that distinguish it visually. These features made it suitable for writing operating systems and embedded software, not only teaching, and directly inspired the package and module systems of Ada, Oberon, Python and Go.

## History

Wirth designed Modula-2 at ETH Zürich between 1977 and 1980 as the system language for the Lilith workstation, after a sabbatical at Xerox PARC exposed him to Mesa. His book *Programming in Modula-2* (1982) served as the de-facto definition until ISO completed a standard in 1996. It enjoyed popularity in the 1980s with compilers from Logitech, TopSpeed and others, and was used for embedded and avionics work, but was gradually displaced by C, C++ and Ada. GNU Modula-2 was merged into GCC 13 in 2023, giving the language a maintained modern compiler.
