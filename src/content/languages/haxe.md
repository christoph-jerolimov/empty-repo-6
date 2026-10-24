---
title: Haxe
year: 2005
era: 2000s
designers: [Nicolas Cannasse]
paradigms: [multi-paradigm, object-oriented, functional, generic]
typing: static, strong, inferred
summary: One high-level language that compiles to JavaScript, C++, C#, Java, Python, Lua, PHP and its own virtual machine.
links:
  - label: Haxe.org
    url: https://haxe.org/
  - label: Haxe Manual
    url: https://haxe.org/manual/
  - label: Haxe API documentation
    url: https://api.haxe.org/
  - label: Haxe Foundation on GitHub
    url: https://github.com/HaxeFoundation/haxe
---

## Hello, World!

```haxe
class Main {
    static function main() {
        trace("Hello, World!");
    }
}
```

Run with `haxe --main Main --interp`, or target another platform, for example `haxe --main Main --js main.js`.

## About

Haxe is a strictly typed, ECMAScript-flavoured language whose compiler emits source code or bytecode for many targets, letting one codebase ship as a web app, a native desktop or mobile game, or a server. Its type system offers type inference, enums with pattern matching (algebraic data types), abstract types that add behaviour to existing types at zero cost, structural typing and a powerful macro system that runs Haxe code at compile time. The cross-platform standard library abstracts over the targets, and conditional compilation handles the differences. Haxe is especially popular for games, with frameworks such as OpenFL, HaxeFlixel and Heaps.

## History

Nicolas Cannasse created Haxe in 2005 at Motion-Twin, building on his earlier MTASC ActionScript compiler and Neko virtual machine, at a time when Flash dominated browser games and developers wanted to target it without being locked in. The decline of Flash made Haxe's multi-target design even more valuable, and the Haxe Foundation was established in 2012 to steward the language. Haxe 3 (2013) added abstracts and the modern macro API, and Haxe 4 (2019) brought a new syntax for functions, final fields and improved JavaScript output. Notable games built with Haxe include *Dead Cells*, *Papers, Please* and *Northgard*.
