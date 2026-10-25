---
title: Eiffel
year: 1986
era: 1980s
designers: [Bertrand Meyer]
paradigms: [object-oriented, class-based, design by contract]
typing: static, strong
summary: The language that introduced design by contract, with preconditions, postconditions and class invariants built in.
links:
  - label: Eiffel.org
    url: https://www.eiffel.org/
  - label: "ECMA-367 Eiffel: Analysis, Design and Programming Language"
    url: https://ecma-international.org/publications-and-standards/standards/ecma-367/
  - label: EiffelStudio documentation
    url: https://www.eiffel.org/doc/eiffelstudio/EiffelStudio
  - label: Object-Oriented Software Construction (book page)
    url: https://bertrandmeyer.com/OOSC2/
---

## Hello, World!

```text
class
    HELLO

create
    make

feature

    make
            -- Print a greeting.
        do
            print ("Hello, World!%N")
        end

end
```

## About

Eiffel is a pure object-oriented language built around the idea that a class's routines should state their contracts: `require` preconditions, `ensure` postconditions and class `invariant` clauses that are checked at run time and documented automatically. It also pioneered a careful approach to multiple inheritance with renaming and redefinition, generic classes with constrained genericity, automatic memory management, "once" routines and, more recently, void safety that eliminates null-pointer errors statically and the SCOOP model for concurrency. Its syntax is deliberately readable, with no semicolons or braces.

## History

Bertrand Meyer designed Eiffel in 1985 and his company Interactive Software Engineering (now Eiffel Software) released the first compiler in 1986. His 1988 book *Object-Oriented Software Construction* became one of the most influential texts on OO design and introduced "design by contract" as a term. The language was standardised by ECMA in 2005 and ISO in 2006. While never a mass-market language, Eiffel's contract ideas were adopted by Ada 2012, D, Kotlin's `require`/`check`, .NET Code Contracts and many testing frameworks, and EiffelStudio is open source under GPL.
