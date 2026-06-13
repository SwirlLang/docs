---
title: Introduction
id: intro
sidebar_position: 1
slug: /
description: Introduction to Swirl
---

## Overview
Swirl is a statically-typed, LLVM-based systems programming language.

## Kickstart
The `main` function is the entry-point of a Swirl program.

```swirl
fn main(): i32 {  // the return type can be omitted as the type inference system can infer it
    return 0;
}
```

## Variable Declarations
Variables can either be declared with `let` or `var`, the former doesn't allow reassignment and enforces
in-place initialization, the latter does allow it.

```swirl
let constant = 43;
let anothere_const: i8;  // error: initialization required
    
var my_var = 39;
my_var = 49;  // can be reassigned
```
**Initialization Semantics:** when a variable declaration is left uninitialized, it is automatically zero-initialized.
If you do not want that to happen, initialize it with the `undefined` keyword.
```swirl
var uninitialized: i16 = undefined;
```
## Conditions
```swirl
if a == b || c == d && e != f {
    ...
}

elif a == c {
    ...
}

else {
    ...
}
```

## While Loop
```swirl
while e != f {
    if e == g {
        break;
    } else {
        continue;
    }
}
```

## Operators
| Operator | Usage                     | Associativity | Precedence (Descending order) |
|----------|---------------------------|---------------|-------------------------------|
| `.`      | Member access             | Left          | A                             |
| `[]`     | Indexing                  | Left          | B                             |
| `&x`     | Address taking            | Left          | C                             |
| `+x`     | Unary plus                | Left          | C                             |
| `-x`     | Unary minus               | Left          | C                             |
| `*x`     | Dereference               | Left          | C                             |
| `!x`     | Logical not               | Left          | C                             | 
| `~x`     | Bitwise NOT               | Left          | C                             |
| `as`     | Cast                      | Left          | D                             |
| `**`     | Exponentiation            | Right         | E                             |
| `*`      | Multiplication            | Left          | F                             |
| `/`      | Division                  | Left          | F                             |
| `%`      | Modulus                   | Left          | F                             |
| `+`      | Addition                  | Left          | G                             |
| `-`      | Subtraction               | Left          | G                             |
| `<<`     | Bitwise left shift        | Left          | H                             |
| `>>`     | Bitwise right shift       | Left          | H                             |
| `>`      | Greater than              | Left          | I                             |
| `>=`     | Greater than or equal     | Left          | I                             |
| `<`      | Less than                 | Left          | I                             |
| `<=`     | Less than or equal        | Left          | I                             |
| `==`     | Equality                  | Left          | J                             |
| `!=`     | Inequality                | Left          | J                             |
| `&`      | Bitwise AND               | Left          | K                             |
| `^`      | Bitwise XOR               | Left          | L                             |
| `\|`     | Bitwise OR                | Left          | M                             |
| `&&`     | Logical AND               | Left          | N                             |
| `\|\|`   | Logical OR                | Left          | O                             |
| `=`      | Assignment                | Right         | P                             |
| `+=`     | Add assignment            | Right         | P                             |
| `-=`     | Subtract assignment       | Right         | P                             |
| `*=`     | Multiply assignment       | Right         | P                             |
| `/=`     | Divide assignment         | Right         | P                             |
| `%=`     | Modulus assignment        | Right         | P                             |
| `**=`    | Exponentiation assignment | Right         | P                             |
| `\|=`    | Bitwise OR assignment     | Right         | P                             |
| `&=`     | Bitwise AND assignment    | Right         | P                             |
| `^=`     | Bitwise XOR assignment    | Right         | P                             |
| `<<=`    | Left shift assignment     | Right         | P                             |
| `>>=`    | Right shift assignment    | Right         | P                             |

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)
