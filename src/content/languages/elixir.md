---
title: Elixir
year: 2012
era: 2010s
designers: [José Valim]
paradigms: [functional, concurrent, distributed, meta]
typing: dynamic, strong, with gradual set-theoretic types in progress
summary: Ruby-inspired syntax and Lisp-style macros on the battle-tested Erlang VM, with Phoenix for real-time web apps.
links:
  - label: Elixir-lang.org
    url: https://elixir-lang.org/
  - label: Elixir documentation (HexDocs)
    url: https://hexdocs.pm/elixir/
  - label: Hex package manager
    url: https://hex.pm/
  - label: Phoenix Framework
    url: https://www.phoenixframework.org/
---

## Hello, World!

```elixir
IO.puts("Hello, World!")
```

Run with `elixir hello.exs`.

## About

Elixir compiles to bytecode for the BEAM, the Erlang virtual machine, so it inherits Erlang's lightweight processes, fault-tolerant supervision trees, hot code upgrades and distribution for free, while offering a more approachable syntax, first-class documentation and tooling (Mix, Hex, ExUnit, IEx) and hygienic macros that let the language extend itself. The pipe operator `|>` and pervasive pattern matching give code a clear data-transformation style. Phoenix and its LiveView library make real-time, server-rendered web applications straightforward, and Nx, Livebook and Nerves extend Elixir into numerical computing, notebooks and embedded devices.

## History

José Valim, a member of the Ruby on Rails core team, started Elixir in 2011 after studying concurrency on the Erlang VM, and released the first version in 2012. Elixir 1.0 followed in September 2014, and Chris McCord's Phoenix framework (1.0 in 2015) made it a strong choice for web services; Discord, Pinterest and PepsiCo are among its users. Since 2023 the core team, with researcher Giuseppe Castagna, has been adding a set-theoretic gradual type system that is progressively landing in releases. Elixir remains closely integrated with the wider Erlang ecosystem and its foundation.
