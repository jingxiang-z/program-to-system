# Worker Pool

> **Status:** Planned  
> **Type:** Practice  
> **Language:** Go

## Goal

Build a bounded pool that processes independent jobs concurrently and shuts down
without leaking workers or blocking callers.

## Learning Outcomes

- Assign clear ownership to queues and shutdown signals.
- Use bounded buffering to make backpressure observable.
- Propagate cancellation while preserving useful per-job results.

## Requirements

- Accept a configurable positive worker count and bounded queue size.
- Process each accepted job at most once.
- Report completed, failed, and cancelled jobs separately.
- Stop accepting work after shutdown begins and wait for every worker.
- Support caller cancellation without leaving blocked sends or receives.

## Observe

Predict job completion order with one worker and with several workers. Record active
worker counts, queue saturation, cancellation behavior, and shutdown. Do not infer
correctness from output ordering alone.

## Tests

- Empty input, one worker, and fewer jobs than workers.
- Full queue and observable backpressure.
- Deterministic job failure and cancellation.
- Submission during shutdown and clean worker termination.

## Done When

- Every accepted job has exactly one terminal result.
- No goroutine remains blocked after success, failure, or cancellation.
- Race-enabled tests pass.
