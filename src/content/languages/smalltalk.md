---
title: Smalltalk
year: 1972
era: 1970s
designers: [Alan Kay, Dan Ingalls, Adele Goldberg]
paradigms: [object-oriented, reflective]
typing: dynamic, strong
summary: The purely object-oriented language and live environment that gave us the GUI, the IDE and "everything is an object".
links:
  - label: Pharo, a modern Smalltalk
    url: https://pharo.org/
  - label: Squeak Smalltalk
    url: https://squeak.org/
  - label: Smalltalk-80, The Language and its Implementation (the Blue Book, PDF)
    url: http://stephane.ducasse.free.fr/FreeBooks/BlueBook/Bluebook.pdf
  - label: ANSI Smalltalk standard draft (NCITS J20)
    url: https://wiki.squeak.org/squeak/uploads/172/standard_v1_9-indexed.pdf
---

## Hello, World!

```smalltalk
Transcript show: 'Hello, World!'; cr.
```

Everything is a message send: `show:` and `cr` are sent to the `Transcript` object, with `;` cascading the second message to the same receiver.

## About

In Smalltalk every value, including numbers, classes and blocks of code, is an object, and the only way to do anything is to send a message. The language itself is tiny; all control flow, from `ifTrue:` to `whileTrue:`, is implemented as ordinary messages to booleans and blocks. Programs live in an image, a snapshot of all objects, that is edited and debugged while running through a graphical browser and inspector. This live, reflective environment pioneered the integrated development environment, refactoring tools, unit testing (SUnit) and the model-view-controller pattern.

## History

Alan Kay conceived Smalltalk at Xerox PARC as part of his Dynabook vision of a personal computer for children, with Dan Ingalls implementing Smalltalk-72 in 1972 and Adele Goldberg leading documentation and education. Successive versions culminated in Smalltalk-80, which was licensed to Apple, HP, Tektronix and DEC and described in the "Blue Book". Steve Jobs' 1979 visit to PARC, where he saw the Smalltalk GUI, famously shaped the Lisa and Macintosh. Commercial dialects such as VisualWorks and IBM VisualAge thrived in the 1990s, Squeak (1996) and Pharo (2008) carried it into open source, and its ideas pervade Objective-C, Ruby, Python and the agile movement.
