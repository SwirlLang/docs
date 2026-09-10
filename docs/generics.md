---
title: Generics
id: generics
slug: /generics
description: Introduction to Generics
---

# Generics
Swirl supports generics, which are monomorphized into concrete constructs by
the compiler.

## Genric functions
Example:
```swirl
fn generic<T>(a: T) {  
    ...
}

fn main() {
    generic!<i32>(43);
}
```

## Generic structs
Example:
```swirl
struct Generic<T> {
    var member: T;
}

fn main() {
    var member: Generic<i32>;
}
```
The `!<...>` arg list syntax is only required in expression
context to disambiguate generic arg lists from expressions (where they conflict
with the `<` and `>` operator), in type-context, the `!` can be omitted as shown above.

## Comptime values as generic args
Swirl allows you to pass `comptime` expressions as generic arguments, to do so,
simply precede the `comptime` expression with the `comptime` keyword as shown below.
```swirl
fn return_number<N>() { return N; }

fn main() {
   return return_number!<comptime 8>();
}
```
## Generic Constraints
Generics parameters can be constrained by one or multiple protocols:
```swirl
fn one_protocol_constraint<T: P>() {
    ...
}


fn multiple_protocol_constraints<T: [P, Q, R]> {
    ...
}
```
where `P`, `Q` and `R` are protocols. The compiler enforces the argument of `T` in
both cases to implement all the prescribed protocols.


## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)

