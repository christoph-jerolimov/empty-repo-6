---
title: Tcl
year: 1988
era: 1980s
designers: [John Ousterhout]
paradigms: [scripting, procedural, event-driven, functional]
typing: dynamic, everything is a string
summary: The embeddable "Tool Command Language" whose Tk toolkit made cross-platform GUIs easy long before the web.
links:
  - label: Tcl Developer Xchange
    url: https://www.tcl-lang.org/
  - label: Tcl/Tk documentation
    url: https://www.tcl-lang.org/doc/
  - label: Tcler's Wiki
    url: https://wiki.tcl-lang.org/
  - label: Tcl Core Team on GitHub
    url: https://github.com/tcltk
---

## Hello, World!

```tcl
puts "Hello, World!"
```

A Tk version with a button in a window:

```tcl
package require Tk
pack [button .b -text "Hello, World!" -command exit]
```

## About

Tcl's grammar fits in a dozen rules: a script is a sequence of commands, each command is a list of words, and words are substituted and then passed to the command, which decides what they mean. Because control structures such as `if` and `while` are ordinary commands, the language is extraordinarily malleable, and because every value has a string representation it is trivial to glue together C libraries, shell tools and network protocols. The Tk toolkit, bundled with Tcl, provided one of the first easy ways to build portable graphical applications and was adopted as the default GUI library of Python (Tkinter), Perl and Ruby.

## History

John Ousterhout began Tcl at Berkeley in 1988 as a reusable command language for the CAD tools his group was building, and added Tk in 1990. The combination took off in the early 1990s; Ousterhout moved to Sun Microsystems in 1994, where Tcl 8.0 gained a bytecode compiler and Unicode support, and later founded Scriptics. Tcl was used for the AOLserver web server and remains the scripting language of choice for electronic design automation tools, Cisco network equipment, SQLite's test suite and NBC's broadcast automation. Tcl 9.0, the first major release in 27 years, shipped in 2024.
