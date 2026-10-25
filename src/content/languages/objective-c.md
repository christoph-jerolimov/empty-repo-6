---
title: Objective-C
year: 1984
era: 1980s
designers: [Brad Cox, Tom Love]
paradigms: [object-oriented, reflective, imperative]
typing: static for C parts, dynamic for messaging
summary: Smalltalk-style messaging grafted onto C, and the language of NeXTSTEP, macOS and iOS before Swift.
links:
  - label: Programming with Objective-C (Apple Developer Archive)
    url: https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html
  - label: Objective-C Runtime Reference (Apple)
    url: https://developer.apple.com/documentation/objectivec
  - label: GNUstep, a free implementation of the Cocoa frameworks
    url: https://www.gnustep.org/
  - label: Clang Objective-C language features
    url: https://clang.llvm.org/docs/LanguageExtensions.html#objective-c-features
---

## Hello, World!

```objc
#import <Foundation/Foundation.h>

int main(void)
{
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}
```

On macOS compile with `clang -framework Foundation hello.m -o hello && ./hello`.

## About

Objective-C is a strict superset of C that adds a Smalltalk-inspired object layer: objects receive messages written in square brackets, `[object doSomething:arg]`, and method lookup happens at run time through a small, open runtime library. This dynamism supports categories (adding methods to existing classes), protocols, key-value observing and introspection, which the Cocoa frameworks lean on heavily. Later additions included properties, blocks (closures), automatic reference counting and lightweight generics, and the language interoperates closely with Swift.

## History

Brad Cox and Tom Love created Objective-C at their company Stepstone in the early 1980s, aiming to bring Smalltalk's reusable "software ICs" to C programmers. NeXT licensed it in 1988 for NeXTSTEP, extending the language and building the AppKit and Foundation frameworks around it. When Apple acquired NeXT in 1997, Objective-C became the foundation of Mac OS X and later iOS, driving a huge surge in popularity after the App Store launched in 2008. Apple introduced Swift as its successor in 2014, but Objective-C remains in extensive use across Apple's own frameworks and legacy codebases.
