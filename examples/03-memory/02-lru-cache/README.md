# LRU Cache

> **Status:** Planned  
> **Type:** Practice  
> **Language:** Go

## Goal

Build a fixed-capacity cache with deterministic least-recently-used eviction.

## Learning Outcomes

- Combine a map and a recency list while preserving their shared invariants.
- Explain how capacity bounds in-memory state.
- Reason about ownership, mutation, and average operation complexity.

## Requirements

- Implement `Get`, `Put`, `Delete`, `Len`, and `Capacity`.
- Promote entries on successful reads and updates.
- Evict exactly the least-recently-used entry when inserting at capacity.
- Reject non-positive capacity.
- Do not scan the recency list to find a key.

## Observe

Before implementing, draw the map and list state for a sequence containing insertion,
access, update, and eviction. Compare the predicted order with test-visible state.

## Tests

- Hit, miss, insertion, update, and deletion.
- Promotion after a read and update.
- Deterministic capacity eviction.
- Repeated operations on one key and invalid capacity.

## Done When

- Every public operation is O(1) on average.
- Map and list membership remain consistent after every tested sequence.
- Tests verify recency without relying on incidental implementation details.
