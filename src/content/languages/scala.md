---
title: Scala
year: 2004
era: 2000s
designers: [Martin Odersky]
paradigms: [functional, object-oriented, concurrent]
typing: static, strong, inferred
summary: The scalable fusion of object-oriented and functional programming on the JVM, behind Spark, Akka and Kafka.
links:
  - label: Scala-lang.org
    url: https://www.scala-lang.org/
  - label: Scala 3 Language Specification
    url: https://scala-lang.org/files/archive/spec/3.4/
  - label: Scala documentation
    url: https://docs.scala-lang.org/
  - label: Scala Center
    url: https://scala.epfl.ch/
---

## Hello, World!

Scala 3:

```scala
@main def hello(): Unit =
  println("Hello, World!")
```

Scala 2, or the explicit object form:

```scala
object Hello {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}
```

## About

Scala ("scalable language") unifies object-oriented and functional programming in a statically typed language that interoperates seamlessly with Java. Every value is an object and every function is a value; traits enable mixin composition, case classes and pattern matching make algebraic data types natural, and implicits (now `given` and `using` in Scala 3) support type classes and context passing. The type system is among the most expressive in mainstream use, with higher-kinded types, path-dependent types and, in Scala 3, union and intersection types, match types and macros. Scala powers Apache Spark, Akka, Kafka, Twitter's early services and many financial systems, and also compiles to JavaScript and native code.

## History

Martin Odersky, who had co-written the Generic Java compiler that became `javac`, designed Scala at EPFL in Lausanne from 2001 and released it publicly in 2004. Scala 2.0 followed in 2006, and the language gained wide attention when Twitter adopted it in 2009 and Typesafe (later Lightbend) was founded in 2011. The Dotty research compiler, started in 2013 to put the language on the sound foundation of the DOT calculus, became Scala 3 in May 2021, simplifying syntax with optional braces and reworking implicits. The Scala Center at EPFL and the Scala community continue development with LTS and "Next" release lines.
