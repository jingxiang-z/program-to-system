# Append-Only KV Log

> **Status:** Planned  
> **Type:** Core  
> **Language:** Go

## Goal

Build a small append-only key-value log with an explicit durability contract and
well-defined recovery from an incomplete final record.

## Learning Outcomes

- Distinguish writing, flushing language buffers, and requesting durable storage.
- Design a versioned, bounded, and checksummed record format.
- Recover acknowledged state by replaying complete valid records.

## Requirements

- Encode `Set` and `Delete` records with lengths, a version, and a checksum.
- Rebuild in-memory state by replaying the log at startup.
- Define when a mutation is acknowledged and how synchronization affects that promise.
- Reject interior corruption and safely handle a truncated final record.
- Provide deterministic fault injection at documented points in the append path.

## Observe

Before injecting faults, predict which operations should survive each interruption.
Record the on-disk bytes, synchronization policy, file state at the fault point, replay
decision, and recovered key-value state.

## Tests

- Empty log and normal `Set`, overwrite, and `Delete` replay.
- Restart after multiple records.
- Truncation at every byte boundary of the final record.
- Bad checksum, invalid length, unsupported version, and interior corruption.
- Acknowledgment behavior under each supported synchronization policy.

## Done When

- Replay produces the documented state for every fault case.
- Malformed lengths cannot cause unbounded allocation.
- The durability contract says exactly what may be lost after a crash.
- Tests do not depend on real crashes or timing.
