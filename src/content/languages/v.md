---
title: V
year: 2019
era: 2010s
designers: [Alexander Medvednikov]
paradigms: [imperative, procedural, functional, concurrent]
typing: static, strong, inferred
summary: A simple, fast-compiling language in the Go tradition that compiles to C, with a focus on safety and tiny binaries.
links:
  - label: Vlang.io
    url: https://vlang.io/
  - label: V documentation
    url: https://github.com/vlang/v/blob/master/doc/docs.md
  - label: V on GitHub
    url: https://github.com/vlang/v
  - label: V modules (vpm)
    url: https://vpm.vlang.io/
---

## Hello, World!

```v
fn main() {
	println('Hello, World!')
}
```

Run with `v run hello.v`.

## About

V is a statically typed language whose syntax is close to Go's, with immutable variables by default, option and result types instead of null and exceptions, generics, sum types, string interpolation and built-in concurrency with channels. The compiler is self-hosted, very fast and generates human-readable C by default (with native and JavaScript back ends in progress), and the toolchain bundles a formatter, package manager, test runner, documentation generator and hot code reloading. The project also ships a cross-platform UI library and an ORM, and the language prides itself on compiling into a single small executable with no dependencies.

## History

Alexander Medvednikov wrote V while building the Volt desktop messaging client and released the compiler publicly in June 2019 after a wave of early interest, and some scepticism, about its ambitious claims. The project has since been developed by a sizable open-source community, with frequent weekly releases through the 0.x series and a gradual tightening of its memory-management story, moving from a garbage collector by default toward automatic free insertion and arena allocation. V remains pre-1.0 but is used for command-line tools, games and the Vinix operating-system kernel written in V.
