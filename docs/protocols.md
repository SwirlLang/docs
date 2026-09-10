---
title: Protocols
id: protocols
slug: /protocols
description: Introduction to Protocols
---

# Protocols
Protocols are constraints or common interfaces which can be implemented by types. All
method dispatches are static.

Example:
```swirl
protocol Writable {
    fn write(content: str): i32;
}
```

Implementation:
```swirl
impl Writable for T {
    fn write(content: str): i32 {
        return 0;
    }
}
```

Note that you are not just limited to structs, you can also implement protocols for
all builtin (`i32`, `str`, etc.) or compound types (pointers, arrays, etc.).

## Protocol Composition
You can compose protocols together to make a new one - 
```swirl
protocol WritablePlus : Writable, SomeOtherProtocol {
    ...
}
```

## Resolving Ambiguity
If a type implements two or more protocols which have a method with the same name as a
requirement and you attempt to call the method, the compiler will refuse to compile
the program until you explicitly select the desired protocol's scope with the `as`
operator. Example:
```swirl
protocol Writable_2 {
    fn write(content: str): i32;
}

struct T {}

impl Writable for T {
    fn write(content: str): i32 {
        return 0;
    }
}

impl Writable_2 for T {
    fn write(content: str): i32 {
        return 1;
    }
}



fn main() {
    var my_var: T;
    return (my_var as Writable).write("Hello world");  // returns 0
}
```

## Dynamic Dispatch
Coming soon™...

## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)
