---
title: ALGOL
year: 1958
era: 1950s
designers: [Friedrich L. Bauer, John Backus, Peter Naur, Alan Perlis, and others]
paradigms: [imperative, procedural, structured]
typing: static, strong
summary: The influential academic language that gave us block structure, lexical scope, BNF grammars and the look of nearly every language since.
links:
  - label: Revised Report on the Algorithmic Language ALGOL 60
    url: https://www.masswerk.at/algol60/report.htm
  - label: ALGOL history at the Software Preservation Group
    url: https://www.softwarepreservation.org/projects/ALGOL/
  - label: Revised Report on ALGOL 68 (PDF)
    url: https://www.softwarepreservation.org/projects/ALGOL/report/Algol68_revised_report-AB.pdf
  - label: MARST, a free ALGOL 60 to C translator
    url: https://www.gnu.org/software/marst/
---

## Hello, World!

The ALGOL 60 report deliberately left input and output to implementations. This is the form accepted by most later compilers:

```text
begin
  outstring(1, "Hello, World!")
end
```

In ALGOL 68, which did standardise I/O:

```text
BEGIN
  print(("Hello, World!", newline))
END
```

## About

ALGOL ("Algorithmic Language") was designed by an international committee as a machine-independent notation for publishing algorithms. ALGOL 60 introduced nested block structure, lexical scoping, recursive procedures, call-by-name parameters and the `begin`/`end` compound statement, and it was the first language whose syntax was formally defined with Backus–Naur Form. It never achieved large commercial success outside Europe, but almost every imperative language that followed, including Pascal, C, Simula, Ada, Java and JavaScript, is described as "ALGOL-like".

## History

ALGOL 58 was drafted at a 1958 meeting in Zurich between the ACM and the German GAMM society. The much more influential ALGOL 60 was finalised in Paris in January 1960 and published in a report edited by Peter Naur; it was the lingua franca of computer-science papers for decades and the standard publication language of the ACM's *Communications*. ALGOL W (Wirth and Hoare, 1966) and the ambitious ALGOL 68 (van Wijngaarden and others) followed, but disagreements over the latter's complexity prompted Niklaus Wirth to leave the committee and create Pascal instead.
