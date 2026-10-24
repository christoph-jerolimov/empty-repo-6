---
title: Lua
year: 1993
era: 1990s
designers: [Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes]
paradigms: [multi-paradigm, scripting, procedural, functional, prototype-based]
typing: dynamic, strong
summary: The small, fast, embeddable scripting language inside World of Warcraft, Roblox, Neovim, Redis and nginx.
links:
  - label: Lua.org
    url: https://www.lua.org/
  - label: Lua 5.4 Reference Manual
    url: https://www.lua.org/manual/5.4/
  - label: Programming in Lua (book)
    url: https://www.lua.org/pil/
  - label: LuaJIT
    url: https://luajit.org/
---

## Hello, World!

```lua
print("Hello, World!")
```

## About

Lua ("moon" in Portuguese) is designed to be embedded in host applications: its interpreter is about 30,000 lines of portable C, has no dependencies and exposes a clean stack-based C API. The language has one data-structuring mechanism, the table, which serves as array, dictionary, object and module, plus first-class functions, closures, proper tail calls, coroutines and metatables for operator overloading and prototype-based inheritance. Its simplicity and speed, especially with LuaJIT, have made it the dominant scripting language in games and a popular configuration and extension language.

## History

Lua was created in 1993 at the Pontifical Catholic University of Rio de Janeiro by Roberto Ierusalimschy, Luiz Henrique de Figueiredo and Waldemar Celes, growing out of earlier data-description languages built for Petrobras, the Brazilian oil company, at a time when trade barriers made importing software difficult. Lua 5.0 (2003) introduced the register-based virtual machine and coroutines; 5.1 (2006) is still the basis of LuaJIT and many embedded uses; 5.4 (2020) added generational garbage collection. Lua was the scripting language of Adobe Lightroom, Angry Birds and World of Warcraft, and powers Roblox's Luau dialect.
