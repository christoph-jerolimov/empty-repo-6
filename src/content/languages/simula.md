---
title: Simula
year: 1967
era: 1960s
designers: [Ole-Johan Dahl, Kristen Nygaard]
paradigms: [object-oriented, imperative, simulation]
typing: static, strong
summary: The first object-oriented language, which introduced classes, objects, inheritance and virtual methods.
links:
  - label: Simula Standard and resources (Simula 67 portal)
    url: https://www.simula67.info/
  - label: GNU Cim, a Simula compiler
    url: https://www.gnu.org/software/cim/
  - label: Dahl and Nygaard's "The Development of the SIMULA Languages" (HOPL, 1978)
    url: https://dl.acm.org/doi/10.1145/800025.1198392
---

## Hello, World!

```text
Begin
   OutText ("Hello, World!");
   OutImage;
End;
```

## About

Simula 67 extended ALGOL 60 with the `class` concept, objects that outlive the procedure that created them, subclassing with virtual procedures, coroutines and garbage collection. It was created for discrete-event simulation, with a built-in `Simulation` class scheduling "processes" on a timeline, but its authors realised the same mechanisms worked for modelling any system. Every object-oriented language since, including Smalltalk, C++, Java and C#, descends from the ideas first implemented here.

## History

Ole-Johan Dahl and Kristen Nygaard developed Simula I at the Norwegian Computing Center in Oslo between 1962 and 1965 to describe and simulate complex systems. Simula 67, defined in 1967 and formalised in a 1968 Common Base Language report, generalised it into a full programming language. Compilers for UNIVAC, IBM and DEC machines spread it through European universities, where Bjarne Stroustrup encountered it and later combined its class model with C to create C++. Dahl and Nygaard received both the Turing Award and the IEEE John von Neumann Medal in 2001 and 2002 for their invention of object-oriented programming.
