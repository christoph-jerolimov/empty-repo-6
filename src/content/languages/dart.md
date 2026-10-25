---
title: Dart
year: 2011
era: 2010s
designers: [Lars Bak, Kasper Lund, Google]
paradigms: [object-oriented, class-based, functional, imperative]
typing: static, strong, sound, inferred
summary: Google's client-optimised language for fast apps on any platform, best known as the language of Flutter.
links:
  - label: Dart.dev
    url: https://dart.dev/
  - label: Dart language specification
    url: https://dart.dev/guides/language/spec
  - label: ECMA-408 Dart Programming Language Specification
    url: https://ecma-international.org/publications-and-standards/standards/ecma-408/
  - label: Flutter
    url: https://flutter.dev/
---

## Hello, World!

```dart
void main() {
  print('Hello, World!');
}
```

Run with `dart run hello.dart`.

## About

Dart is a class-based, garbage-collected language with a familiar C-style syntax, a sound null-safe type system, `async`/`await` and isolates for concurrency without shared memory. It is unusual in offering both a just-in-time compiler with hot reload for fast development iteration and an ahead-of-time compiler that produces fast native ARM and x64 code or compact JavaScript and WebAssembly for the browser. Dart 3 added records, pattern matching and sealed classes. Almost all Dart code today is written for Flutter, Google's UI toolkit for building iOS, Android, web, desktop and embedded apps from a single codebase.

## History

Lars Bak and Kasper Lund, who had built the V8 JavaScript engine, unveiled Dart at the GOTO conference in October 2011 as a structured alternative to JavaScript for large web applications. Early plans to ship a Dart VM inside Chrome were dropped in 2015 in favour of compiling to JavaScript. The language found its purpose when Flutter, announced in 2015, adopted it, and Dart 2 (2018) reworked the type system to be sound and optimised for client development. Dart 2.12 (2021) introduced sound null safety, and Dart 3 (2023) made it mandatory while adding modern pattern-matching features.
