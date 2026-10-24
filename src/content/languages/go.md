---
title: Go
year: 2009
era: 2000s
designers: [Robert Griesemer, Rob Pike, Ken Thompson]
paradigms: [imperative, concurrent, procedural, structural typing]
typing: static, strong, inferred
summary: Google's simple, fast-compiling systems language with goroutines and channels, the backbone of the cloud-native ecosystem.
links:
  - label: Go.dev
    url: https://go.dev/
  - label: The Go Programming Language Specification
    url: https://go.dev/ref/spec
  - label: Go documentation
    url: https://go.dev/doc/
  - label: Effective Go
    url: https://go.dev/doc/effective_go
---

## Hello, World!

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
```

Run with `go run hello.go`.

## About

Go deliberately keeps its feature set small: a C-like syntax without header files, garbage collection, structural interfaces instead of class hierarchies, multiple return values, explicit error handling and, since 1.18, generics. Its distinguishing feature is built-in concurrency through goroutines, lightweight threads multiplexed by the runtime, and channels for communicating between them. Fast compilation, a single statically linked binary, a standard code formatter and a rich standard library make Go a favourite for servers, command-line tools and infrastructure: Docker, Kubernetes, Terraform, Prometheus, etcd and CockroachDB are all written in it.

## History

Robert Griesemer, Rob Pike and Ken Thompson began sketching Go at Google in September 2007 out of frustration with the complexity and slow builds of C++ at Google's scale. The language was announced as open source in November 2009, and Go 1.0 in March 2012 came with a compatibility promise that still holds. The gopher mascot by Renée French became an icon of the cloud era as Docker (2013) and Kubernetes (2014) adopted the language. Modules arrived in Go 1.11 (2018), generics in Go 1.18 (2022), and the project continues with two releases per year.
