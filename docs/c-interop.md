---
title: C Interop
id: cinterop
slug: /c-interop
description: C Interoperability
---

## Overview
One can write foreign function interfaces (FFIs) for C by preceding the function declaration with `extern "C"`.
```swirl
extern "C" fn my_ffi(...): type;
```
This prevents name mangling and forces the C Calling Convention.

Types like `char` are directly compatible with the C counterpart. The following C types are provided for writing FFIs:

| Type          | C counterpart        |
|---------------|----------------------|
| `c_int`       | `int`                |
| `c_uint`      | `unsigned int`       |
| `c_ll`        | `long long`          |
| `c_ull`       | `unsigned long long` |
| `c_l`         | `long`               |
| `c_ul`        | `unsigned long`      |
| `c_size_t`    | `size_t`             |
| `c_ssize_t`   | `ssize_t`            |
| `c_schar`     | `signed char`        |
| `c_uchar`     | `unsigned char`      |
| `c_short`     | `short`              |
| `c_ushort`    | `unsigned short`     |
| `c_bool`      | `_Bool`              |
| `c_float`     | `float`              |
| `c_double`    | `double`             |
| `c_ldouble`   | `long double`        |
| `c_intptr_t`  | `intptr_t`           |
| `c_uintptr_t` | `uintptr_t`          |
| `c_ptrdiff_t` | `ptrdiff_t`          |
| `c_intmax_t`  | `intmax_t`           |
| `c_uintmax_t` | `uintmax_t`          |
| `c_wchar_t`   | `wchar_t`            |


## Stay informed

- [GitHub](https://github.com/SwirlLang)
- [Blog](/blog)
- [Twitter](https://twitter.com/swirllang)