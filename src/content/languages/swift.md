---
title: Swift
year: 2014
era: 2010s
designers: [Chris Lattner, Apple]
paradigms: [multi-paradigm, protocol-oriented, object-oriented, functional, imperative]
typing: static, strong, inferred
summary: Apple's modern, safe and fast successor to Objective-C for iOS, macOS and beyond, now also on Linux and Windows.
links:
  - label: Swift.org
    url: https://www.swift.org/
  - label: The Swift Programming Language (official book)
    url: https://docs.swift.org/swift-book/
  - label: Swift Evolution proposals
    url: https://www.swift.org/swift-evolution/
  - label: Swift Package Index
    url: https://swiftpackageindex.com/
---

## Hello, World!

```swift
print("Hello, World!")
```

Run with `swift hello.swift`, or compile with `swiftc hello.swift && ./hello`.

## About

Swift combines the safety of optionals and value types with the performance of ahead-of-time compilation through LLVM. It is protocol-oriented, with protocols, extensions and generics as the main tools for abstraction, and it offers closures, pattern matching, enums with associated values, automatic reference counting and, since Swift 5.5, structured concurrency with `async`/`await` and actors. Swift 6 added compile-time data-race safety. It is the primary language for Apple platforms with SwiftUI and UIKit, and is also used on the server (Vapor), in embedded systems and increasingly for cross-platform work.

## History

Chris Lattner, creator of LLVM and Clang, began Swift in secret at Apple in July 2010, and the language was announced at WWDC in June 2014 to widespread surprise. Swift 2 (2015) was released as open source with Linux support, and Swift 3 (2016) settled the API design guidelines. Source and ABI stability arrived with Swift 5 in 2019, allowing the runtime to ship with the operating system. Apple's SwiftUI (2019) and the concurrency model in Swift 5.5 (2021) reshaped how apps are written, and Swift 6 (2024) completed the strict concurrency checking that had been introduced incrementally.
