---
title: Operators
id: operators
slug: /operators
description: Operators
---
# Operators
Swirl supports all traditional operators as they are found in C, with additional operators
like exponentiation (`**`) and the following -  
- `alignof`: yields the alignment requirement of a type in bytes.  
- `sizeof`: yields the number of bytes that the type will occupy in memory.

Both the above operators can act on both, expressions and types. Types can be used in expression 
context by preceding them with the `type` keyword. E.g.
```swirl
let s = sizeof type i32;  // evaluates to 4
let t = sizeof 8888;      // evaluates to 4 since integer literals default to an i32 type
```
All the other operators are listed in the table below.

| Operator | Usage                                                            | Associativity | Precedence (Descending order) |
|----------|------------------------------------------------------------------|---------------|-------------------------------|
| `.`      | Member access                                                    | Left          | A                             |
| `[]`     | Indexing, can be used on pointers too.                           | Left          | B                             |
| `&x`     | Address taking                                                   | Left          | C                             |
| `+x`     | Unary plus                                                       | Left          | C                             |
| `-x`     | Unary minus                                                      | Left          | C                             |
| `*x`     | Dereference                                                      | Left          | C                             |
| `!x`     | Logical not                                                      | Left          | C                             | 
| `~x`     | Bitwise NOT                                                      | Left          | C                             |
| `as`     | Type casting, e.g. `34 as i64`                                   | Left          | D                             |
| `**`     | Exponentiation, base appears on the left, exponent on the right. | Right         | E                             |
| `*`      | Multiplication                                                   | Left          | F                             |
| `/`      | Division                                                         | Left          | F                             |
| `%`      | Modulus                                                          | Left          | F                             |
| `+`      | Addition                                                         | Left          | G                             |
| `-`      | Subtraction                                                      | Left          | G                             |
| `<<`     | Bitwise left shift                                               | Left          | H                             |
| `>>`     | Bitwise right shift                                              | Left          | H                             |
| `>`      | Greater than                                                     | Left          | I                             |
| `>=`     | Greater than or equal                                            | Left          | I                             |
| `<`      | Less than                                                        | Left          | I                             |
| `<=`     | Less than or equal                                               | Left          | I                             |
| `==`     | Equality                                                         | Left          | J                             |
| `!=`     | Inequality                                                       | Left          | J                             |
| `&`      | Bitwise AND                                                      | Left          | K                             |
| `^`      | Bitwise XOR                                                      | Left          | L                             |
| `\|`     | Bitwise OR                                                       | Left          | M                             |
| `&&`     | Logical AND                                                      | Left          | N                             |
| `\|\|`   | Logical OR                                                       | Left          | O                             |
| `=`      | Assignment                                                       | Right         | P                             |
| `+=`     | Add assignment                                                   | Right         | P                             |
| `-=`     | Subtract assignment                                              | Right         | P                             |
| `*=`     | Multiply assignment                                              | Right         | P                             |
| `/=`     | Divide assignment                                                | Right         | P                             |
| `%=`     | Modulus assignment                                               | Right         | P                             |
| `**=`    | Exponentiation assignment                                        | Right         | P                             |
| `\|=`    | Bitwise OR assignment                                            | Right         | P                             |
| `&=`     | Bitwise AND assignment                                           | Right         | P                             |
| `^=`     | Bitwise XOR assignment                                           | Right         | P                             |
| `<<=`    | Left shift assignment                                            | Right         | P                             |
| `>>=`    | Right shift assignment                                           | Right         | P                             |