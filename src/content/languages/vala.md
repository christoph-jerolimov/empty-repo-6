---
title: Vala
year: 2006
era: 2000s
designers: [Jürg Billeter, Raffaele Sandrini]
paradigms: [object-oriented, imperative]
typing: static, strong
summary: A C#-like language that compiles to plain C and GObject, bringing modern syntax to GNOME development without a runtime.
links:
  - label: Vala.dev
    url: https://vala.dev/
  - label: Vala documentation
    url: https://docs.vala.dev/
  - label: Vala API reference (Valadoc)
    url: https://valadoc.org/
  - label: Vala on GNOME GitLab
    url: https://gitlab.gnome.org/GNOME/vala
---

## Hello, World!

```vala
void main () {
    print ("Hello, World!\n");
}
```

Compile with `valac hello.vala && ./hello`.

## About

Vala provides classes, interfaces, properties, signals, lambdas, generics, exceptions, async methods and automatic reference counting in a syntax that will be instantly familiar to C# and Java programmers. Instead of a virtual machine, the compiler translates Vala to C code that uses the GLib and GObject libraries, so the result is a native binary with no additional dependencies that can be called from any language with GObject bindings. This makes it a comfortable way to write GTK applications and libraries for the GNOME desktop with C-level performance.

## History

Jürg Billeter and Raffaele Sandrini started Vala in 2006 to make GNOME programming less verbose than hand-written GObject C while keeping full compatibility with the platform. Vala became self-hosting in 2007 and was adopted for a number of GNOME and elementary OS applications. The project reached 1.0 feature stability in 2023 after many years of 0.x releases, and continues as part of the GNOME project with regular releases tracking new GLib and GTK versions.
