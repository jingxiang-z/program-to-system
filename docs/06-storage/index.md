# 06 Storage

## Core Question

How does data move from volatile memory to persistent media, and how do systems recover from interrupted writes?

## Run It First

Start with the [storage example](https://github.com/jingxiang-z/program-to-system/tree/main/examples/06-storage). Observe append operations, durability boundaries, and recovery after a simulated crash.

## Learning Objectives

- Understand storage devices, caches, and the I/O path.
- Explain the basic roles of files, directories, indexes, logs, and transactions.
- Analyze trade-offs among throughput, latency, durability, and consistency.

## Conceptual Path

- Block devices and the I/O stack
- File-system layout and metadata
- Logging, copy-on-write, and crash recovery
- Database storage engines and transactions

## Experiment and Evidence

Record fault injection, log state, recovery results, complete commands, and the verification process. Content is under development.

## Connection to the Capstone

This chapter directly supports the KV store's WAL format, durability semantics, log replay, and crash recovery.
