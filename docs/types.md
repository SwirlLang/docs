---
title: Types
id: types
slug: /types
description: Swirl types
---

## Overview
Swirl is statically and strongly-typed. Its first-class types are:


## Integral Types 
| ID     | Size (in bytes) | Description              |
|--------|-----------------|--------------------------|
| `i8`   | 1               | 8-bit signed integer     |
| `u8`   | 1               | 8-bit unsigned integer   |
| `i16`  | 2               | 16-bit signed integer    |
| `u16`  | 2               | 16-bit unsigned integer  |
| `i32`  | 4               | 32-bit signed integer    |
| `u32`  | 4               | 32-bit unsigned integer  |
| `i64`  | 8               | 64-bit signed integer    |
| `u64`  | 8               | 64-bit unsigned integer  |
| `i128` | 16              | 128-bit signed integer   |
| `u128` | 16              | 128-bit unsigned integer |
| `bool` | 1               | either `true` or `false` |

## Floating Point (FP) Types
| ID    | Size (in bytes) | Description     |
|-------|-----------------|-----------------|
| `f32` | 4               | 32-bit FP type. |
| `f64` | 8               | 64-bit FP type. |

## Array Type
Swirl provides the following syntax to create an in-place array for a type: 
```swirl
// `T` is the type and `N` is the number of elements.
let arr: [T | N] = [x, y, z, ...];
```
You do not need to declare the type explicitly if you provide an initializer, the compiler can [infer](type-inference.md) the array-type:
 ```swirl
let arr = [1, 2, 3, 4];  // automatically inferred to [i32 | 4]
 ```

## Slice Type
Slices provide a "view" for a sequence of elements, internally, a slice is akin to a struct containing a pointer (to the first element) and a `size`. They are syntactically represented as: `&[T]` (for immutable slices) or `&mut [T]` (for mutable slices).

## Reference Type
A reference-object redirects operations performed on it to the object it's bound to. A reference cannot be reassigned once it has been created. A reference type is syntactically represented as `&T` (for immutable references) or `&mut T` (for mutable references).

## Pointers
A pointer type is syntactically written as `*T`, lvalues of such type are dereferenced by the unary `*ptr` operator.
LValue pointers are fetched via the unary `&` operator (e.g. `&stuff`).

## Struct Types
The following example demonstrates how struct types are defined:
```swirl
struct MyStruct {
    let a: i32;
    let b: i64;
    
    fn get_a(&self) { return self.a; }
    fn get_b(&self) { return self.b; }
    
    // static methods simply do not have `&self` (or `&mut self`) as the first parameter
    fn construct(v1: i32, v2: i64) {
        var tmp: MyStruct;
        tmp.a = v1;
        tmp.b = v2;
        return tmp;
    }
}


fn main() {
    let instance = MyStruct::construct(8, 8);
    
    var member = instance.a;
    member = instance.get_a();  // a reference to `instance` is passed implicitly
}
```
## Enum Types
Enums are scoped types used to group a series of named integral constants. 
```swirl
enum MyEnum {
    ONE,
    TWO,
    THREE,
    FOUR
}

fn main() {
    var one: MyEnum = MyEnum::ONE;
}
```
The default underlying type is `i32`, one can change it (to another _integral_ type) by doing:
```swirl
enum MyEnum : i8 { 
    ... 
}
```
## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)