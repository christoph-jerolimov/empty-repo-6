---
title: Zig
year: 2016
era: 2010s
designers: [Andrew Kelley]
paradigms: [imperative, procedural, generic, compile-time metaprogramming]
typing: static, strong, inferred
summary: A simple, explicit systems language and toolchain designed as a better C, with comptime instead of macros and no hidden control flow.
links:
  - label: Ziglang.org
    url: https://ziglang.org/
  - label: Zig Language Reference
    url: https://ziglang.org/documentation/master/
  - label: Zig standard library documentation
    url: https://ziglang.org/documentation/master/std/
  - label: Zig Software Foundation on GitHub
    url: https://github.com/ziglang/zig
---

## Hello, World!

```zig
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}
```

Run with `zig run hello.zig`. (`std.debug.print` writes to standard error and works unchanged across Zig versions; writing to standard output uses the buffered `std.Io` writer API, which is still evolving before 1.0.)

## About

Zig aims to be a replacement for C rather than C++: it has no hidden allocations, no hidden control flow, no preprocessor and no macros. Instead, `comptime` lets ordinary Zig code run at compile time to implement generics, reflection and code generation. Errors are values that must be handled, optionals replace null pointers, and allocators are passed explicitly. The Zig toolchain also doubles as a drop-in C and C++ cross-compiler (`zig cc`) that ships with libc for dozens of targets, which has made it popular for cross-compiling even in projects that write no Zig themselves.

## History

Andrew Kelley started Zig in 2015 and announced it publicly in February 2016, motivated by frustration with C's undefined behaviour and C++'s complexity in audio software. The Zig Software Foundation was founded as a non-profit in 2020 to fund full-time development through donations. Zig 0.10 (2022) shipped the self-hosted compiler, and the project is incrementally replacing LLVM with its own back ends for faster debug builds. Bun, the JavaScript runtime, and TigerBeetle, the financial database, are prominent projects written in Zig while it approaches a 1.0 release.
