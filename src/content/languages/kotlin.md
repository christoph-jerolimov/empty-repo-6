---
title: Kotlin
year: 2011
era: 2010s
designers: [JetBrains, Andrey Breslav]
paradigms: [multi-paradigm, object-oriented, functional, concurrent]
typing: static, strong, inferred
summary: JetBrains' pragmatic JVM language with null safety and coroutines, and Google's preferred language for Android.
links:
  - label: Kotlinlang.org
    url: https://kotlinlang.org/
  - label: Kotlin language specification
    url: https://kotlinlang.org/spec/
  - label: Kotlin documentation
    url: https://kotlinlang.org/docs/home.html
  - label: Kotlin Foundation
    url: https://kotlinfoundation.org/
---

## Hello, World!

```kotlin
fun main() {
    println("Hello, World!")
}
```

Run as a script with `kotlinc -script hello.kts` or compile with `kotlinc hello.kt -include-runtime -d hello.jar && java -jar hello.jar`.

## About

Kotlin is a concise, statically typed language designed to be fully interoperable with Java while fixing its most common pain points. The type system distinguishes nullable from non-nullable types to eliminate most `NullPointerException`s, data classes and sealed hierarchies reduce boilerplate, extension functions add methods to existing types, and coroutines provide lightweight structured concurrency. Beyond the JVM, Kotlin compiles to JavaScript, WebAssembly and native code through Kotlin Multiplatform, and the Compose framework uses it for declarative UI on Android, desktop, web and iOS.

## History

JetBrains, makers of IntelliJ IDEA, unveiled Kotlin in July 2011, named after Kotlin Island near Saint Petersburg, because none of the existing JVM languages met their needs for their own products. Kotlin 1.0 was released in February 2016. Google announced first-class Android support in May 2017 and declared Kotlin the preferred language for Android development in 2019, driving massive adoption. The Kotlin Foundation was formed by JetBrains and Google in 2018, and Kotlin 2.0 (2024) shipped the new K2 compiler front end, with Kotlin Multiplatform reaching stable status for shared iOS and Android code.
