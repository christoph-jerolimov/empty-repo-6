---
title: PowerShell
year: 2006
era: 2000s
designers: [Jeffrey Snover, Bruce Payette, James Truher]
paradigms: [scripting, imperative, object-oriented, pipeline]
typing: dynamic, strong, with optional type constraints
summary: The object-oriented shell and automation language of Windows, Azure and now Linux and macOS.
links:
  - label: PowerShell documentation (Microsoft Learn)
    url: https://learn.microsoft.com/en-us/powershell/
  - label: PowerShell on GitHub
    url: https://github.com/PowerShell/PowerShell
  - label: PowerShell Gallery
    url: https://www.powershellgallery.com/
  - label: Monad Manifesto (Jeffrey Snover, 2002)
    url: https://www.jsnover.com/Docs/MonadManifesto.pdf
---

## Hello, World!

```powershell
Write-Output "Hello, World!"
```

Or simply:

```powershell
"Hello, World!"
```

## About

Where Unix shells pass text between commands, PowerShell passes .NET objects, so `Get-Process | Where-Object CPU -gt 100 | Sort-Object CPU` filters and sorts on real properties without parsing columns. Commands follow a consistent `Verb-Noun` naming scheme, come with discoverable parameters and help, and can be written as cmdlets in C# or as functions in PowerShell itself. The language supports classes, modules, remoting, Desired State Configuration and direct access to WMI, COM, the registry and the .NET libraries, making it the standard for administering Windows, Active Directory, Exchange and Azure.

## History

Jeffrey Snover's 2002 "Monad Manifesto" argued that Windows needed a shell built on structured objects rather than text. The resulting Windows PowerShell 1.0 shipped in November 2006, and version 2.0 (2009) with remoting and the ISE became a standard component of Windows 7. PowerShell 5 (2016) added classes and the PowerShell Gallery. In August 2016 Microsoft open-sourced the project as PowerShell Core on .NET Core, running on Linux and macOS, and PowerShell 7 (2020) reunified the editions. It is now the default shell in Windows Terminal and the Azure Cloud Shell.
