---
title: Types
id: types
sidebar_position: 1
slug: /types
description: Typesystem of Swirl
---

## Overview
Swirl is statically and strongly-typed. Its first-class types are:


## Integral Types 
| ID | Size (in bytes) | Description |
|---|----|----|
| `i8`   | 1  | 8-bit signed integer     |
| `u8`   | 1  | 8-bit unsigned integer   |
| `i16`  | 2  | 16-bit signed integer    |
| `u16`  | 2  | 16-bit unsigned integer  |
| `i32`  | 4  | 32-bit signed integer    |
| `u32`  | 4  | 32-bit unsigned integer  |
| `i64`  | 8  | 64-bit signed integer    |
| `u64`  | 8  | 64-bit unsigned integer  |
| `i128` | 16 | 128-bit signed integer   |
| `u128` | 16 | 128-bit unsigned integer |

## Floating Point (FP) Types
| ID | Size (in bytes) | Description |
|---|----|----|
| `f32` | 4 | 32-bit FP type. |
| `f64` | 8 | 64-bit FP type. |

## Array Type
Swirl provides the following syntax to create an in-place array for a type: 
```rust
// `T` is the type and `N` is the number of elements.
let arr: [T | N] = [x, y, z, ...];
```
You do not need to declare the type explicitly if you provide an initializer, the compiler can [infer]() the array-type:
 ```rust
let arr = [1, 2, 3, 4];  // automatically inferred to [i32 | 4]
 ```

## Slice Type
Slices provide a "view" for a sequence of elements, internally, a slice is akin to a struct containing a pointer (to the first element) and a `size`. They are syntactically represented as: `&[T]` (for immutable slices) or `&mut [T]` (for mutable slices).

## Reference Type
A reference-object redirects operations performed on it to the object it's bound to. A reference cannot be reassigned once it has been created. A reference type is syntactically represented as `&T` (for immutable references) or `&mut T` (for mutable references).

## Type Inference
The Swirl Compiler has a Type Deduction System, when no explicit-type declaration can be reached, inference is done based on the following axioms:

| Value | Assume as type |
| --- | --- |
| String literal   | `str`  |
| Integer literal  | `i32`  |
| Float literal    | `f64`  |


## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)