# 04 Concurrency Examples

## Core Question

How can a program preserve correctness and reason about synchronization costs when multiple execution flows share state?

## Examples

| Example | Type | Language | Focus |
| --- | --- | --- | --- |
| [Race to Correctness](01-race-to-correctness/) | Core | Go | Data races, invariants, mutexes, atomics, and synchronization cost |
| [Worker Pool](02-worker-pool/) | Practice | Go | Bounded queues, backpressure, cancellation, errors, and shutdown |

The core example focuses on shared-state correctness. The practice example adds
coordination and lifecycle management.
