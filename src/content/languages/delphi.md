---
title: Delphi (Object Pascal)
year: 1995
era: 1990s
designers: [Anders Hejlsberg, Borland]
paradigms: [object-oriented, imperative, event-driven, structured]
typing: static, strong
summary: Borland's rapid-application-development environment that gave Pascal objects, components and native Windows speed.
links:
  - label: Embarcadero Delphi
    url: https://www.embarcadero.com/products/delphi
  - label: Delphi Language Guide (Embarcadero DocWiki)
    url: https://docwiki.embarcadero.com/RADStudio/en/Delphi_Language_Guide_Index
  - label: Free Pascal (Delphi-compatible open-source compiler)
    url: https://www.freepascal.org/
  - label: Lazarus IDE
    url: https://www.lazarus-ide.org/
---

## Hello, World!

```pascal
program Hello;

{$APPTYPE CONSOLE}

begin
  Writeln('Hello, World!');
end.
```

## About

Delphi's language, Object Pascal, extends Pascal with classes, properties, events, interfaces, exceptions, generics and anonymous methods, and compiles to fast native code for Windows, macOS, iOS, Android and Linux. Its defining strength is the Visual Component Library and the IDE's form designer, which together let developers build database-driven desktop applications by dropping components and writing event handlers, with published properties editable in an Object Inspector. The open-source Free Pascal compiler and Lazarus IDE implement the same dialect across many more platforms.

## History

Borland had turned Pascal into a commercial success with Turbo Pascal (1983), which added object extensions in 1989 under Anders Hejlsberg's technical leadership. Delphi 1 shipped in February 1995 as a Windows rapid-application-development tool competing with Visual Basic, with the advantage of a true compiler and a component model built on the language itself. Hejlsberg left for Microsoft in 1996, where he created C#, taking many Delphi ideas with him. Delphi passed from Borland to CodeGear and then Embarcadero in 2008, and continues with yearly releases and multi-platform support through the FireMonkey framework.
