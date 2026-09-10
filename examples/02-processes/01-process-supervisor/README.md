# Process Supervisor

> **Status:** Planned  
> **Type:** Core  
> **Language:** C

## Goal

Build a small supervisor that starts a child program, observes its lifecycle,
communicates with it, and reliably reclaims it.

## Learning Outcomes

- Explain the roles of process creation, program replacement, waiting, and exit status.
- Use pipes and signals across a process boundary.
- Recognize descriptor leaks, orphaned children, and zombie processes.

## Requirements

- Start a supplied child program and capture its standard output through a pipe.
- Report normal exit, nonzero exit, and signal termination distinctly.
- Forward a termination request and escalate after a configurable timeout.
- Close unused file descriptors and reap every child on every path.
- Trace the important system calls made during one run.

## Observe

Before running, predict which process owns each pipe endpoint after creation. Record
the process tree, state changes, system-call trace, exit status, and the behavior of a
cooperative and an uncooperative child.

## Tests

- Successful child execution and captured output.
- Child exits with a nonzero status.
- Child terminates because of a signal.
- Timeout followed by graceful termination and forced termination.
- No child or open pipe remains after the supervisor exits.

## Done When

- All child outcomes are reported correctly.
- The supervisor cannot leave a zombie during the documented scenarios.
- The learner can identify the user-kernel transitions in the trace.
