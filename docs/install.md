---
title: Installing Swirl
id: installation
---

Best way to get Swirl currently is to build it from source as it is a constantly evolving project.

Though you can download pre-built binaries from the [website](https://swirl-lang.netlify.app/downloads) or [GitHub releases](https://github.com/SwirlLang/swirl/releases).

## Building from source
To build Swirl from source, you need the following prerequisites:
- Git
- C++ compiler (e.g., `g++`, `clang++`, or `msvc`)
- CMake (version 3.20 or higher)
- LLVM Development libraries (version 17 or higher)

### Installing prerequisites
#### On Ubuntu/Debian

Install the required packages:
```bash
sudo apt update && sudo apt upgrade -y && \
sudo apt install git cmake clang llvm-dev
```

#### On Fedora
Install the required packages:
```bash
sudo dnf update -y && \
sudo dnf install git cmake clang llvm-devel
```

### Building
Clone the repository:
```bash
git clone https://github.com/swirllang/swirl.git
```

Generate the build files:
```bash
cd swirl && \
cmake -B build -S .
```
Build the project:
```bash
cmake --build build --config Release
```
The Swirl binary will be located in the `build` directory.
### Running Swirl
To run Swirl, you can use the following command:
```bash
./build/swirl
```
