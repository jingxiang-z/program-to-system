# Replicated Register

> **Status:** Planned  
> **Type:** Core  
> **Language:** Go

## Goal

Replicate a versioned value from one fixed leader to two followers and explain what
different acknowledgment policies guarantee during delays and failures.

## Learning Outcomes

- Reason about distributed behavior from event order rather than wall-clock intuition.
- Compare leader-only, all-replica, and quorum acknowledgment policies.
- Explain how a recovering follower discovers and catches up on missing state.

## Requirements

- Model one fixed leader, two followers, versioned writes, and readable node state.
- Use an injectable in-process transport that can delay, drop, duplicate, and reorder
  selected messages deterministically.
- Support documented acknowledgment policies and per-operation timeouts.
- Stop and restart a follower, then bring it to the leader's committed state.
- Record an event history suitable for a sequence diagram.
- Keep leader election, sharding, and multi-key transactions out of scope.

## Observe

Before each scenario, predict whether the client receives an acknowledgment and which
nodes can contain the value. Record the fault schedule, event history, client result,
node states before recovery, and final state after catch-up.

## Tests

- Replication without faults under every acknowledgment policy.
- Delayed, lost, duplicated, and reordered messages.
- Timeout before and after the required acknowledgments arrive.
- Follower shutdown, missed writes, restart, and catch-up.
- Repeated delivery remains idempotent and older versions cannot overwrite newer ones.

## Done When

- Every test is deterministic and requires no arbitrary sleep.
- Client outcomes match the documented acknowledgment policy.
- All available replicas converge after faults are removed and catch-up completes.
- The event history supports an explanation of every observed state.
