---
title: Java
year: 1995
era: 1990s
designers: [James Gosling, Sun Microsystems]
paradigms: [object-oriented, class-based, concurrent, generic, functional]
typing: static, strong, manifest with local inference
summary: "\"Write once, run anywhere\" on the JVM; the enterprise, Android and big-data workhorse for three decades."
links:
  - label: Dev.java, the official Java developer portal
    url: https://dev.java/
  - label: Java Language and Virtual Machine Specifications
    url: https://docs.oracle.com/javase/specs/
  - label: OpenJDK
    url: https://openjdk.org/
  - label: JDK Enhancement Proposals (JEPs)
    url: https://openjdk.org/jeps/0
---

## Hello, World!

The classic form:

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Since Java 25, compact source files and instance main methods make it as short as:

```java
void main() {
    IO.println("Hello, World!");
}
```

Run with `java Hello.java`.

## About

Java compiles to bytecode that runs on the Java Virtual Machine, which provides garbage collection, just-in-time compilation, a strong security model and portability across operating systems. The language is class-based and statically typed, with interfaces, generics, checked exceptions, lambdas and streams, and more recently records, sealed classes, pattern matching and virtual threads. An immense ecosystem of libraries, frameworks (Spring, Jakarta EE), build tools and IDEs, together with the JVM's maturity, keeps Java at the heart of banking, e-commerce, Android apps, Hadoop and Kafka-style data platforms and Minecraft.

## History

James Gosling's team at Sun began the "Oak" project in 1991 for consumer electronics, then re-targeted it at the emerging web. Java 1.0 shipped in May 1995 with applets running inside Netscape, and the slogan "write once, run anywhere" caught on quickly in enterprise servers. Java 2 (1998) split into standard, enterprise and micro editions; Java 5 (2004) added generics and annotations; Java 8 (2014) added lambdas. Oracle acquired Sun in 2010, open-sourced the platform through OpenJDK and in 2017 moved to a six-month release cadence. Long-term-support releases such as Java 17, 21 and 25 continue to modernise the language while preserving backwards compatibility.
