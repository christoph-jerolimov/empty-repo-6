---
title: Rust
year: 2010
era: 2010s
designers: [Graydon Hoare, Mozilla Research, Rust Project]
paradigms: [multi-paradigm, imperative, functional, concurrent, generic]
typing: static, strong, inferred, affine
summary: Memory safety without garbage collection, enforced by the borrow checker; now in the Linux kernel, Windows and Android.
links:
  - label: Rust-lang.org
    url: https://www.rust-lang.org/
  - label: The Rust Reference
    url: https://doc.rust-lang.org/reference/
  - label: The Rust Programming Language (the Book)
    url: https://doc.rust-lang.org/book/
  - label: crates.io package registry
    url: https://crates.io/
---

## Hello, World!

```rust
fn main() {
    println!("Hello, World!");
}
```

Compile with `rustc hello.rs && ./hello`, or create a project with `cargo new hello && cargo run`.

## About

Rust's ownership system tracks who owns each value and who may borrow it, letting the compiler guarantee at build time that programs are free of data races, use-after-free, null dereferences and buffer overflows, with no garbage collector and no runtime overhead. On top of that it offers algebraic data types with exhaustive pattern matching, traits for generic programming, zero-cost iterators and closures, `async`/`await`, and excellent tooling through Cargo, rustfmt and Clippy. Rust is used for browsers (Servo, parts of Firefox), operating systems, embedded devices, WebAssembly, command-line tools and increasingly for performance-critical services at AWS, Cloudflare, Discord and Meta.

## History

Graydon Hoare started Rust as a personal project in 2006, and Mozilla began sponsoring it in 2009, announcing it publicly in 2010. The compiler became self-hosting in 2011, and after years of rapid change Rust 1.0 was released in May 2015 with a stability guarantee. Mozilla's layoffs in 2020 led to the creation of the independent Rust Foundation in 2021, backed by AWS, Google, Huawei, Microsoft and Mozilla. Rust support was merged into the Linux kernel in 2022, has been voted "most admired language" in the Stack Overflow survey every year since 2016, and new versions ship every six weeks with "editions" in 2015, 2018, 2021 and 2024.
