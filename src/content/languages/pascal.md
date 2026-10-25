---
title: Pascal
year: 1970
era: 1970s
designers: [Niklaus Wirth]
paradigms: [imperative, procedural, structured]
typing: static, strong, manifest
summary: Wirth's small, disciplined teaching language that dominated computer-science education for two decades.
links:
  - label: Free Pascal compiler
    url: https://www.freepascal.org/
  - label: ISO 7185:1990 (Standard Pascal)
    url: https://www.iso.org/standard/13802.html
  - label: Niklaus Wirth's publications at ETH Zürich
    url: https://people.inf.ethz.ch/wirth/
  - label: Lazarus IDE
    url: https://www.lazarus-ide.org/
---

## Hello, World!

```pascal
program Hello;
begin
  writeln('Hello, World!');
end.
```

Compile with `fpc hello.pas && ./hello`.

## About

Pascal was designed to teach structured programming and data structuring in a language small enough to be fully understood. It offers strong static typing, nested procedures, records, sets, enumerations, subranges and pointers, with the compiler catching a large class of mistakes that earlier languages silently permitted. Programs are declared in a fixed order of constants, types, variables and routines, which made single-pass compilers fast and simple; UCSD Pascal's p-code was also one of the first widely used bytecode virtual machines.

## History

Niklaus Wirth created Pascal at ETH Zürich between 1968 and 1970, after leaving the ALGOL 68 committee, and named it after Blaise Pascal. The portable P4 compiler spread it to universities worldwide, and it became the language of the US Advanced Placement exam. Borland's Turbo Pascal (1983) turned it into a mainstream commercial tool on PCs, Apple used Object Pascal for the original Macintosh toolbox, and the lineage continued through Delphi. Wirth followed it with Modula-2 and Oberon, and its ideas are visible in Ada, Go and many teaching languages.
