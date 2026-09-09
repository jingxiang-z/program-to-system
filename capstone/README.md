# Capstone: Distributed Key-Value Store

This project connects the seven chapters through one continuous implementation. It begins as an in-memory key-value store and gradually gains networking, persistence, replication, and failure recovery.

## Completion Criteria

After completing the four stages, you should be able to:

- Run a KV service that supports basic read and write operations.
- Access the service through a TCP client.
- Recover data from a WAL after a process crash and restart.
- Run one replication group and verify node failure and recovery.
- Explain key design choices and verify correctness and performance with reproducible experiments.

## Roadmap

| Stage | Goal | Related Topics |
| --- | --- | --- |
| [01 In-Memory KV](01-in-memory-kv/) | Implement the data model, command interface, and basic tests | execution, memory, concurrency |
| [02 TCP KV Server](02-tcp-kv-server/) | Define a protocol and support remote clients | processes, concurrency, networking |
| [03 WAL and Crash Recovery](03-wal-recovery/) | Implement a persistent log, replay, and recovery verification | storage |
| [04 Replication and Failure Recovery](04-replication-recovery/) | Replicate data within one group and recover failed nodes | distributed systems |

Each stage must run and be verifiable on its own. Every new stage adds one system capability while preserving the tests from earlier stages.

## Scope

The project focuses on one understandable, runnable, and verifiable replication group:

- No data sharding
- No cross-region replication
- No multi-key transactions
- No production-deployment or extreme-performance goals
- Clear implementation, explicit failure models, and reproducible experiments take priority

## Verification Principles

- Correctness: provide automated tests for reads, writes, concurrency, recovery, and replication.
- Failure recovery: document fault-injection commands, expected state, and post-recovery checks.
- Performance: include a profile, benchmark command, environment, and before-and-after data for every optimization.
- Explainability: document the mechanism, limitations, and connection to the next stage.
