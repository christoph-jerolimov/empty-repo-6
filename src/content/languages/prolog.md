---
title: Prolog
year: 1972
era: 1970s
designers: [Alain Colmerauer, Philippe Roussel, Robert Kowalski]
paradigms: [logic, declarative]
typing: dynamic
summary: The logic-programming language where you state facts and rules and let the engine search for answers.
links:
  - label: ISO/IEC 13211-1:1995 (Prolog standard, core)
    url: https://www.iso.org/standard/21413.html
  - label: SWI-Prolog
    url: https://www.swi-prolog.org/
  - label: GNU Prolog
    url: http://www.gprolog.org/
  - label: Scryer Prolog
    url: https://www.scryer.pl/
---

## Hello, World!

```prolog
:- initialization(main).

main :-
    write('Hello, World!'), nl,
    halt.
```

Run with `swipl hello.pl`.

## About

A Prolog program is a database of facts and rules written as Horn clauses. Instead of giving step-by-step instructions, the programmer asks a query and the system uses unification and depth-first backtracking search to find every binding of variables that makes the query true. This makes Prolog a natural fit for symbolic reasoning, natural-language parsing, expert systems, theorem proving, constraint solving and scheduling, and a single Prolog predicate often replaces pages of imperative code.

## History

Alain Colmerauer and Philippe Roussel created Prolog ("PROgrammation en LOGique") in Marseille in 1972, building on Robert Kowalski's work at Edinburgh on the procedural interpretation of logic. David H. D. Warren's efficient DEC-10 compiler and his later Warren Abstract Machine (1983) established the Edinburgh syntax and implementation model that most systems still follow. Prolog was chosen as the foundation of Japan's Fifth Generation Computer Systems project in the 1980s, was standardised by ISO in 1995, and remains influential through constraint logic programming, Datalog and the answer-set programming community.
