# Function Call and Stack Frame

> **Status:** Planned  
> **Type:** Practice  
> **Language:** C

## Goal

Pause a program inside a function call and connect source-level arguments and local
variables to instructions, registers, and stack memory.

## Learning Outcomes

- Explain how a call transfers control and how a return restores it.
- Locate arguments, local variables, the return address, and saved registers.
- Recognize how compiler optimization changes a debugger-visible stack frame.

## Requirements

- Use a small call chain with arguments, local variables, and a return value.
- Provide debugger commands for breakpoints, stepping, registers, stack memory, and
  backtraces.
- Compare the call at no optimization and at one optimized level.

## Observe

Predict which values will remain in registers and which will appear on the stack.
Record the relevant disassembly, register values, backtrace, and stack locations. Note
that exact addresses vary between runs.

## Tests

- Verify that both builds return the same result.
- Stop at the intended function in the debug build.
- Explain any variable that the optimized debugger reports as unavailable.

## Done When

- The documented debugger session is reproducible.
- The call and return sequence is identified in the disassembly.
- The observed frame is explained using the platform calling convention.
