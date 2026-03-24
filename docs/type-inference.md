---
title: Type Inference
id: type-infer
slug: /type-inference
description: Type-inference system of the Swirl Compiler
---

# Type Inference
Swirl implements type-inference to allow avoiding explicit declaration of types where possible 
and reduce verbosity.

## Bound Type
The compiler's type-inference and correctness checks depend on this concept. The 'bound type' **of a context** is the
currently expected type that an expression which belongs to that context,
must be implicitly convertible to. For example:
```rust
let global: i32 = <expr_1>;

fn a_function(): i64 {
    return <expr_2>;
}
```
the first context is a variable which is explicitly declared to be an `i32`, hence that is its bound type. 
`<expr_1>` must therefore be a value whose type is compatible with `i32`. Similarly, `<expr_2>` is in the context of a
function's return, since the function's return type is explicitly declared, the bound type in that context is
`<i64>` (Note: the angular brackets `<>` are just placeholders to convey that the expression is arbitrary, 
they are not supposed to have any syntactical role here).

## Without Bound Types
In the absence of bound types, the type inference system kicks in again, the following "axioms" are used
to serve as the basis of inference:

| Value             | Assume as type              |
|-------------------|-----------------------------|
| String literal    | `str`                       |
| Integer literal   | `i32`                       |
| Float literal     | `f64`                       |
| Random identifier | the type of that identifier |

**How are discrepancies resolved among sub-expression types?** In that case the compiler chooses a type such
that there's no implicit data-loss, if this is not possible, the compiler will report an error and ask the
programmer to either do an explicit type conversion (via the `<expr> as <type>` operator), 
or reconsider their life choices.



## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)