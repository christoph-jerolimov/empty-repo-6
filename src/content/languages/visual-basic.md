---
title: Visual Basic
year: 1991
era: 1990s
designers: [Microsoft, Alan Cooper (original concept)]
paradigms: [event-driven, object-oriented, imperative]
typing: static, strong (optionally late-bound)
summary: Microsoft's drag-and-drop GUI language that made Windows development accessible to millions, reborn as VB.NET.
links:
  - label: Visual Basic documentation (.NET)
    url: https://learn.microsoft.com/en-us/dotnet/visual-basic/
  - label: Visual Basic language specification
    url: https://learn.microsoft.com/en-us/dotnet/visual-basic/reference/language-specification/
  - label: Visual Basic for Applications (VBA) reference
    url: https://learn.microsoft.com/en-us/office/vba/api/overview/
  - label: twinBASIC, a modern VB6-compatible compiler
    url: https://twinbasic.com/
---

## Hello, World!

Visual Basic .NET:

```vb
Module Hello
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
```

Classic Visual Basic 6 or VBA, in a form's load event:

```vb
Private Sub Form_Load()
    MsgBox "Hello, World!"
End Sub
```

## About

Visual Basic paired a BASIC-derived language with a visual form designer: developers drew buttons and text boxes, then double-clicked a control to write the code for its events. This made it the fastest way to build business applications on Windows and the most popular language of the 1990s by number of users. VB.NET, its successor on the .NET platform, is a fully object-oriented language with the same runtime and libraries as C#, while VBA, the dialect embedded in Microsoft Office, still automates countless spreadsheets and documents.

## History

Microsoft built Visual Basic 1.0 (1991) from Alan Cooper's "Tripod" form-design prototype and its existing QuickBASIC compiler. Versions 3 through 6 (1993–1998) added database access, ActiveX components and native-code compilation, and VB6 became a fixture of corporate IT. In 2002 Microsoft replaced it with Visual Basic .NET, a redesign incompatible enough that many developers migrated to C# instead. Microsoft announced in 2020 that VB.NET would no longer evolve as a language but remains supported on .NET, while VBA continues to ship with Office and projects such as twinBASIC keep classic VB alive.
