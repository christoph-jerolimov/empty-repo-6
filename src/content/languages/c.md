---
title: C
year: 1972
era: 1970s
designers: [Dennis Ritchie]
paradigms: [imperative, procedural, structured]
typing: static, weak, manifest
summary: The portable systems language behind Unix, and the ancestor of most mainstream syntax today.
links:
  - label: ISO/IEC 9899 (C standard) working group
    url: https://www.open-std.org/jtc1/sc22/wg14/
  - label: C23 final draft (N3220)
    url: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf
  - label: cppreference C documentation
    url: https://en.cppreference.com/w/c
---

## Hello, World!

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```

Compile and run with `cc hello.c -o hello && ./hello`.

## About

C is a small, imperative language that maps closely onto the hardware while still being portable across machines. It offers manual memory management, pointers, a thin standard library and very few abstractions, which makes it the language of choice for operating systems, embedded firmware, compilers, interpreters and the runtimes of many higher-level languages. Its syntax of braces, semicolons and `for` loops has been inherited by C++, Java, JavaScript, C#, Go, Rust and countless others.

## History

Dennis Ritchie developed C at Bell Labs between 1969 and 1973 as a successor to Ken Thompson's B language, originally so that Unix could be rewritten in a high-level language instead of PDP-11 assembly. The 1978 book *The C Programming Language* by Kernighan and Ritchie ("K&R") made the language famous and also popularised the "hello, world" program itself. ANSI standardised C in 1989 (C89), followed by ISO revisions C99, C11, C17 and C23, each adding features while preserving backwards compatibility with decades of existing code.
