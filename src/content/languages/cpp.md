---
title: C++
year: 1985
era: 1980s
designers: [Bjarne Stroustrup]
paradigms: [multi-paradigm, procedural, object-oriented, generic, functional]
typing: static, strong-ish, manifest with inference
summary: C with classes, templates and zero-overhead abstractions; the language of game engines, browsers, databases and trading systems.
links:
  - label: Standard C++ Foundation (isocpp.org)
    url: https://isocpp.org/
  - label: ISO/IEC JTC1/SC22/WG21, the C++ standards committee
    url: https://www.open-std.org/jtc1/sc22/wg21/
  - label: cppreference.com
    url: https://en.cppreference.com/w/cpp
  - label: C++ Core Guidelines
    url: https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines
---

## Hello, World!

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!\n";
}
```

With C++23 standard library modules and `std::println`:

```cpp
import std;

int main()
{
    std::println("Hello, World!");
}
```

## About

C++ extends C with classes, inheritance, templates, exceptions, operator overloading, namespaces and a large standard library, while retaining direct access to memory and the principle that you do not pay for what you do not use. Modern C++ (C++11 onwards) added move semantics, lambdas, smart pointers, type inference, `constexpr` compile-time evaluation, concepts, ranges, coroutines and modules, changing the idiomatic style considerably. It remains the choice wherever performance and control matter most: game engines, browsers, compilers, databases, finance, embedded systems and machine-learning frameworks.

## History

Bjarne Stroustrup began "C with Classes" at Bell Labs in 1979, inspired by Simula's classes and C's efficiency, and renamed it C++ in 1983. The first commercial release and his book *The C++ Programming Language* appeared in 1985, templates and exceptions came in 1989 and 1990, and the Standard Template Library by Alexander Stepanov was adopted in 1994. ISO standardised the language in 1998 (C++98), with a minor update in 2003. After a long gap, C++11 marked a renaissance, and the committee now ships a new standard every three years: C++14, C++17, C++20, C++23 and the forthcoming C++26.
