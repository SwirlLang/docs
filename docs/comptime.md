---
title: Compile time evaluation
id: comptime
slug: /comptime
description: Introduction to compile time evaluation
---

# Overview
Swirl supports compile-time evaluation through the `comptime` keyword, to leverage it, the keyword must precede
the definition of the construct, e.g.:
```swirl
// only `let` vars are allowed to be `comptime`
comptime let a = 1 * 2;  // or any arbitrary expression, given the appearing identifiers are comptime
comptime let b = a * 9;

let c = 43;
let d = c * b;  // b is substituted with 18 * c
```
Note that comptime variables are never allocated memory for in the backend, they are entirely resolved by the frontend. 

For conditions:
```swirl
comptime if arch == target::x86 {
   ...
} elif { ... }
  else { ... } 
```

The scope of `comptime` will be extended in the future.

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)
