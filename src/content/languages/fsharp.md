---
title: F#
year: 2005
era: 2000s
designers: [Don Syme, Microsoft Research]
paradigms: [functional-first, object-oriented, imperative]
typing: static, strong, inferred
summary: The functional-first .NET language with type providers, units of measure and a pioneering async model.
links:
  - label: F# Software Foundation (fsharp.org)
    url: https://fsharp.org/
  - label: F# Language Specification
    url: https://fsharp.org/specs/language-spec/
  - label: F# documentation (Microsoft Learn)
    url: https://learn.microsoft.com/en-us/dotnet/fsharp/
  - label: F# for Fun and Profit
    url: https://fsharpforfunandprofit.com/
---

## Hello, World!

```fsharp
printfn "Hello, World!"
```

Run as a script with `dotnet fsi hello.fsx`, or as a project with `dotnet run`.

## About

F# descends from OCaml but lives on .NET, so it combines concise, expression-oriented functional code with full access to the .NET ecosystem and interoperation with C#. It offers immutable records and discriminated unions, pattern matching, pipelines, computation expressions (the mechanism behind its `async` workflows, which predated C#'s `async`/`await`), units of measure for physical quantities checked at compile time, and type providers that generate types from external data sources such as databases, JSON or CSV at edit time. F# is used in finance, data science, and web development through frameworks such as Giraffe and the Fable compiler to JavaScript.

## History

Don Syme at Microsoft Research Cambridge started F# in 2002 after his work on adding generics to the .NET runtime, with the first public releases around 2005. Microsoft shipped F# as a fully supported language in Visual Studio 2010 and open-sourced the compiler under the Apache licence; the F# Software Foundation was formed in 2013 to foster an independent community. F# 4.0 (2015) and the move to cross-platform .NET Core opened it up to Linux and macOS, and recent versions have focused on performance, task-based asynchrony and interoperability as the language keeps pace with annual .NET releases.
