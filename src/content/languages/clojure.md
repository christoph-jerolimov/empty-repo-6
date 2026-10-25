---
title: Clojure
year: 2007
era: 2000s
designers: [Rich Hickey]
paradigms: [functional, concurrent, meta]
typing: dynamic, strong
summary: A modern Lisp on the JVM with immutable persistent data structures and a principled approach to state and concurrency.
links:
  - label: Clojure.org
    url: https://clojure.org/
  - label: Clojure Reference
    url: https://clojure.org/reference/reader
  - label: ClojureDocs community documentation
    url: https://clojuredocs.org/
  - label: ClojureScript
    url: https://clojurescript.org/
---

## Hello, World!

```clojure
(println "Hello, World!")
```

As a namespace with a main function:

```clojure
(ns hello.core)

(defn -main []
  (println "Hello, World!"))
```

## About

Clojure is a Lisp designed for the multicore era. All core data structures (lists, vectors, maps and sets) are immutable and persistent, sharing structure efficiently between versions, and state is managed through explicit reference types such as atoms, refs with software transactional memory, and agents. The language runs on the JVM with direct interop with Java libraries, and ClojureScript compiles the same language to JavaScript. Its emphasis on plain data, simplicity and REPL-driven development has made it popular for backend services, data processing and tools such as Datomic and Nubank's banking platform.

## History

Rich Hickey developed Clojure over roughly two and a half years of self-funded work and released it in October 2007, explaining his design in talks such as "Simple Made Easy" and "The Value of Values" that became widely influential beyond the Lisp world. Clojure 1.0 arrived in 2009, ClojureScript in 2011 and the core.async library for CSP-style concurrency in 2013. The spec library (2017) added runtime data specification. Nubank, the Brazilian fintech built on Clojure, acquired Cognitect, Hickey's company, in 2020 and now sponsors the language's development.
