---
title: Introduction
id: intro
sidebar_position: 1
slug: /
description: Introduction to Swirl
---

## Overview
Swirl is an open-source, low-level, statically typed programming language.

## Kickstart
The `main` function is the entry-point of a Swirl program.
```rust
fn main(): i32 {
    let a: i32 = 43;  // declarations with `let` can't be reassigned
    
    var b: i32 = 54;
    b = 8; // declarations with `var` CAN be reassigned

    // You need not specify the type in the declaration at all, the compiler can infer it. See the page about Types to learn more.
    let c = 43;

    return a * b;
}
```
If command-line arguments are of relevance, one can add a parameter to `main` and utilize them:
```rust
fn main(args: &[str]) {
    ...
    return 0;
}
```
Note that the name of the parameter is not relevant, but the [type](types.md) is. 

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)