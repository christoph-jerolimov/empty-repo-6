---
title: C#
year: 2000
era: 2000s
designers: [Anders Hejlsberg, Microsoft]
paradigms: [multi-paradigm, object-oriented, functional, generic, component-oriented]
typing: static, strong, manifest with inference
summary: Microsoft's flagship .NET language, from Windows desktops and ASP.NET servers to Unity games and cross-platform apps.
links:
  - label: C# documentation (Microsoft Learn)
    url: https://learn.microsoft.com/en-us/dotnet/csharp/
  - label: C# language specification
    url: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/
  - label: ECMA-334 C# Language Specification
    url: https://ecma-international.org/publications-and-standards/standards/ecma-334/
  - label: .NET homepage
    url: https://dotnet.microsoft.com/
---

## Hello, World!

With top-level statements (C# 9 and later):

```csharp
Console.WriteLine("Hello, World!");
```

The classic form:

```csharp
using System;

class Hello
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## About

C# is a modern, type-safe, object-oriented language that runs on the .NET runtime with garbage collection and just-in-time or ahead-of-time compilation. It introduced properties, events, delegates and attributes as first-class concepts, and later LINQ for querying data with language-integrated expressions, `async`/`await` for asynchronous code (which many other languages copied), pattern matching, records, nullable reference types and source generators. With .NET now cross-platform and open source, C# is used for web APIs, cloud services, Unity games, Xamarin and MAUI mobile apps, Blazor web front ends and Windows desktop software.

## History

Anders Hejlsberg, who had created Turbo Pascal and Delphi, led the design of C# at Microsoft from 1999 under the codename "Cool", and it was announced with the .NET Framework in 2000 and released in 2002. ECMA and ISO standardised early versions. C# 2.0 added generics, 3.0 brought LINQ and lambdas, and 5.0 introduced `async`/`await`. In 2014 Microsoft open-sourced the Roslyn compiler and began the cross-platform .NET Core project, unifying everything as .NET 5 in 2020. New versions of C# now ship annually alongside .NET, with C# 14 accompanying .NET 10 in 2025.
