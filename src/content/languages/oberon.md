---
title: Oberon
year: 1987
era: 1980s
designers: [Niklaus Wirth, Jürg Gutknecht]
paradigms: [imperative, modular, object-oriented]
typing: static, strong
summary: Wirth's deliberately minimal final language, co-designed with an operating system that fits in a few thousand lines.
links:
  - label: The Programming Language Oberon (Wirth, revised 2016, PDF)
    url: https://people.inf.ethz.ch/wirth/Oberon/Oberon07.Report.pdf
  - label: Project Oberon (Wirth and Gutknecht)
    url: https://people.inf.ethz.ch/wirth/ProjectOberon/index.html
  - label: Oberon community resources
    url: https://oberon.org/
  - label: OBNC, an Oberon-07 compiler
    url: https://miasap.se/obnc/
---

## Hello, World!

```text
MODULE Hello;
  IMPORT Out;
BEGIN
  Out.String("Hello, World!"); Out.Ln
END Hello.
```

## About

Oberon reduces Modula-2 to its essentials and then adds just one thing: type extension, a simple form of inheritance for records that gives it object-oriented power without classes, methods or virtual tables. The 2007 revision, Oberon-07, is so small that its complete definition fits on 17 pages. The same name belongs to the Oberon System, a single-user operating system with a text-based tiling interface in which every exported procedure is a clickable command. Together they demonstrate Wirth's conviction that software should be made simpler, not larger.

## History

Wirth and Jürg Gutknecht designed Oberon at ETH Zürich from 1986, after a sabbatical at Xerox PARC with the Cedar system, and had the language and OS running on their own Ceres workstation by 1987. Variants followed: Oberon-2 (1991) added type-bound procedures, Active Oberon added concurrency, and Component Pascal and Zonnon continued the line. In 2013 Wirth revised the whole system to run on a custom RISC processor implemented on an FPGA, publishing the complete source as *Project Oberon*. Oberon's module and type-extension ideas influenced Go, whose designers cite it directly.
