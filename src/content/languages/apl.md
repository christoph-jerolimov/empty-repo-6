---
title: APL
year: 1966
era: 1960s
designers: [Kenneth E. Iverson]
paradigms: [array, functional]
typing: dynamic
summary: A terse array language written in its own mathematical symbols, where whole-matrix operations are single characters.
links:
  - label: APL Wiki
    url: https://aplwiki.com/
  - label: Dyalog APL
    url: https://www.dyalog.com/
  - label: GNU APL
    url: https://www.gnu.org/software/apl/
  - label: Iverson's Turing Award lecture "Notation as a Tool of Thought"
    url: https://www.jsoftware.com/papers/tot.htm
---

## Hello, World!

In an APL session the value of an expression is printed automatically:

```apl
'Hello, World!'
```

Explicitly, using the quad output primitive:

```apl
⎕←'Hello, World!'
```

## About

APL ("A Programming Language") treats multidimensional arrays as its fundamental data type and provides a rich set of single-symbol primitives such as `⍴` (reshape), `⍳` (index generator) and `+/` (sum reduction) that operate on entire arrays at once. Programs are extraordinarily concise, and skilled programmers reason about data transformations rather than loops. Its ideas live on directly in J, K, Q and BQN, and indirectly in NumPy, MATLAB, R and modern array frameworks.

## History

Kenneth Iverson developed the notation at Harvard in the late 1950s to teach applied mathematics and published *A Programming Language* in 1962. At IBM, he and Adin Falkoff turned it into an executable system; APL\360 became available in 1966 and ran on time-sharing terminals with a special typeball for the character set. It found a devoted following in finance, actuarial work and research, and Iverson received the Turing Award in 1979. An ISO standard was published in 1989 and extended in 2001, and Dyalog APL continues to evolve the language today.
