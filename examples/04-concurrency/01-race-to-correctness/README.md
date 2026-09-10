# Race to Correctness

> **Status:** Planned  
> **Type:** Core  
> **Language:** Go

## Goal

Reproduce incorrect shared-state behavior, detect its cause, and compare correct
synchronization strategies.

## Learning Outcomes

- Distinguish a data race from a higher-level race condition.
- Protect an invariant with a mutex or an appropriate atomic operation.
- Measure synchronization cost without weakening correctness.

## Requirements

- Provide an intentionally unsafe shared counter or small state machine.
- Make the failure likely using coordinated start barriers rather than arbitrary sleeps.
- Implement mutex and atomic variants where the invariant permits both.
- Run Go's race detector and benchmark the variants.
- Include one documented deadlock scenario for diagnosis, not normal execution.

## Observe

Predict the correct final state and which operations must be indivisible. Record one
incorrect result, the race-detector report, results after each fix, and benchmark
conditions. Explain why an atomic counter cannot replace a lock around a multi-field
invariant.

## Tests

- Deterministic single-worker behavior.
- Coordinated concurrent updates with the correct final invariant.
- Race-enabled test run.
- Deadlock diagnosis with a bounded test timeout.

## Done When

- Correct variants preserve the invariant under repeated concurrent tests.
- The race detector reports no race in the corrected implementation.
- Performance claims include commands, environment, and measurements.
