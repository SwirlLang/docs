---
title: Introduction
id: intro
sidebar_position: 1
slug: /
---

## Overview

A modern, beginner-friendly language that combines power, performance, and simplicity.

## Features

- 🛡️ statically typed 
- 🔢 low level language 
- 🚀 targeted for high performance applications
- 🤝 open source

## Syntax

### Functions

```rust
fn main(argc: type, argv: type): i32 {
  ...
}
```
### Variables

```swift
(var | const) <ident> [: <type>] = <expr>;

var a = 2323232323; // type deduction
const b = "232322211jfj"; // same

var c: i64 = 2323232121432323;  // explicit
```

### Conditionals

```swift
if <expr> {
    ... 
} else { ... }
```

### Loops

```swift
while <expr> {
   ...
}
```

### Import

```swift
// local file
import dir::mod::symbol; 

// global package
import package::module::symbol; 

import package::module::symbol as stuff;

import package::module::{ sym1, sym2 as other_stuff };
```

### Arrays

```swift
var a: [i32 | 5];  // explicit size mention is required when not initialized
var c = [43, 56, 622, 56];  // deduced to [i32 | 4]
var d = u32[3, 34, 52, 42];  // deduced to [u32 | 4]
```

Arrays are first-class primitives, this applies to their value-semantics as well:
```swift
fn function() {
    var b = [23, 34, 63];
    return b;  // this will be passed by value, it won't simply decay into a pointer
}
```

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)