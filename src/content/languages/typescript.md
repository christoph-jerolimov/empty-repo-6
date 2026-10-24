---
title: TypeScript
year: 2012
era: 2010s
designers: [Anders Hejlsberg, Microsoft]
paradigms: [multi-paradigm, object-oriented, functional, generic]
typing: static, structural, gradual, inferred
summary: JavaScript with a powerful optional type system, now the default way large web and Node.js codebases are written.
links:
  - label: TypeScriptLang.org
    url: https://www.typescriptlang.org/
  - label: The TypeScript Handbook
    url: https://www.typescriptlang.org/docs/handbook/intro.html
  - label: TypeScript on GitHub
    url: https://github.com/microsoft/TypeScript
  - label: TypeScript Playground
    url: https://www.typescriptlang.org/play
---

## Hello, World!

```typescript
const greeting: string = "Hello, World!";
console.log(greeting);
```

Run with `npx tsx hello.ts`, or compile with `tsc hello.ts && node hello.js`. Node.js 22 and later can also strip types and run `.ts` files directly.

## About

TypeScript is a superset of JavaScript that adds static types which are erased at compile time, so every JavaScript program is already a TypeScript program and the output runs anywhere JavaScript does. Its structural type system was designed to describe the dynamic patterns of real JavaScript, with union and intersection types, literal types, generics, conditional and mapped types, type narrowing through control flow, and declaration files that type existing libraries. The result is editor tooling with precise autocompletion and refactoring, which is why Angular, Vue 3, Deno, VS Code and most large front-end and Node.js projects adopted it.

## History

Anders Hejlsberg's team at Microsoft released TypeScript 0.8 in October 2012 after two years of internal development aimed at making JavaScript manageable for very large applications. Adoption accelerated when Google chose it for Angular 2 in 2015, and TypeScript 2.0 (2016) added strict null checking. The DefinitelyTyped repository of community type definitions grew to cover the entire npm ecosystem. By the early 2020s TypeScript was consistently among the top five languages on GitHub, and in 2025 Microsoft announced a port of the compiler from TypeScript to Go, promising roughly tenfold faster builds, for the forthcoming TypeScript 7.
