---
title: Introduction
id: intro
sidebar_position: 1
slug: /
description: Introduction to Swirl
---

## Overview
Swirl is an LLVM-based systems programming language for learning and experimentation.

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

Note that the name of the parameter is not relevant, but the [type](types.md) is.

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)
