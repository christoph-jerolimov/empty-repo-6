---
title: Groovy
year: 2003
era: 2000s
designers: [James Strachan, Guillaume Laforge, Apache Software Foundation]
paradigms: [object-oriented, imperative, functional, scripting]
typing: dynamic with optional static typing
summary: The dynamic JVM language with Java-compatible syntax that drives Gradle builds and Jenkins pipelines.
links:
  - label: Groovy-lang.org
    url: https://groovy-lang.org/
  - label: Groovy documentation
    url: https://groovy-lang.org/documentation.html
  - label: Apache Groovy on GitHub
    url: https://github.com/apache/groovy
  - label: Gradle build tool
    url: https://gradle.org/
---

## Hello, World!

```groovy
println 'Hello, World!'
```

## About

Groovy runs on the Java Virtual Machine and was designed so that most Java code is also valid Groovy, while adding closures, optional typing, operator overloading, native syntax for lists, maps and regular expressions, string interpolation, the safe-navigation operator `?.` and builders for creating tree-like structures. Its flexible syntax makes it exceptional for internal domain-specific languages, which is why Gradle build scripts, Jenkins pipelines, Spock tests and Grails web applications all use it. `@CompileStatic` lets performance-critical code be compiled with static checks and Java-level speed.

## History

James Strachan announced Groovy in a blog post in August 2003, inspired by Python and Ruby but wanting them to feel at home on the JVM. The project was standardised through JSR 241 in 2004, released as 1.0 in January 2007, and led for many years by Guillaume Laforge. Groovy 2.0 (2012) added static type checking and compilation, and the project moved to the Apache Software Foundation in 2015 after Pivotal ended sponsorship. Groovy 4 (2022) and 5 (2025) continue to track new Java releases while retaining the scripting conveniences that keep it widely used in build and automation tooling.
