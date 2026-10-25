---
title: Gleam
year: 2016
era: 2010s
designers: [Louis Pilfold]
paradigms: [functional, concurrent]
typing: static, strong, inferred
summary: A friendly, type-safe functional language for the Erlang VM and JavaScript, with a famously approachable compiler.
links:
  - label: Gleam.run
    url: https://gleam.run/
  - label: Gleam language tour
    url: https://tour.gleam.run/
  - label: Gleam documentation
    url: https://gleam.run/documentation/
  - label: Gleam packages (Hex)
    url: https://packages.gleam.run/
---

## Hello, World!

```gleam
import gleam/io

pub fn main() {
  io.println("Hello, World!")
}
```

Create a project with `gleam new hello`, then `gleam run`.

## About

Gleam brings ML-style static typing to the BEAM. It has a small, consistent syntax with no exceptions, no null and no implicit conversions, relying on custom types, `Result` values, exhaustive pattern matching and full type inference to make illegal states unrepresentable. Programs compile to Erlang, gaining OTP's lightweight processes and fault tolerance and interoperating with Erlang and Elixir libraries, or to JavaScript for browsers and Node.js. The `gleam` command-line tool handles building, formatting, testing, documentation and publishing to Hex, and the compiler's error messages are designed to be helpful rather than terse.

## History

Louis Pilfold began Gleam in 2016, initially as a Rust-inspired experiment, and released the first version in 2019 after rewriting the compiler in Rust. The language grew steadily within the Erlang and Elixir communities, adding JavaScript as a second target in 2021 and a language server for editors. Gleam 1.0 was released in March 2024 with a stability commitment, which brought a surge of interest and new web frameworks such as Lustre and Wisp. Development continues with monthly releases funded through GitHub sponsors.
