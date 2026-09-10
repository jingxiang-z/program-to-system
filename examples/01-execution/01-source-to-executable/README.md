# Source to Executable

> **Status:** Planned  
> **Type:** Core  
> **Language:** C

## Goal

Follow a small multi-file program from source code to an executable and connect each
generated artifact to compilation, assembly, and linking.

## Learning Outcomes

- Distinguish source, preprocessed source, assembly, object, and executable files.
- Identify code, data, symbols, relocations, and dynamic dependencies.
- Explain which errors are detected during compilation and which appear during linking.

## Requirements

- Provide a program split across at least two source files and one header.
- Generate the intermediate compiler artifacts without replacing the normal build.
- Inspect symbols, sections, relocations, and shared-library dependencies.
- Compare debug and optimized builds and record at least one meaningful difference.

## Observe

Before building, predict which file will define and reference each external symbol.
Record compiler and inspection-tool versions, complete commands, relevant output, and
a diagram of the artifacts produced. Provide Linux and macOS command equivalents where
the binary formats or tools differ.

## Tests

- Build and run the debug and optimized executables.
- Introduce an undefined symbol and verify that the failure occurs while linking.
- Change one source file and identify which artifacts must be rebuilt.

## Done When

- The program builds and runs from documented commands.
- Every inspected symbol can be connected to its source definition or reference.
- The learner can explain the role of every generated artifact.
