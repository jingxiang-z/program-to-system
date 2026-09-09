# Capstone: Distributed Key-Value Store

The capstone connects the seven chapters through one continuous project. It begins as an in-memory store and gradually gains networking, persistence, replication, and failure recovery.

## Roadmap

| Stage | Deliverable | Status |
| --- | --- | --- |
| [01 In-Memory KV](https://github.com/jingxiang-z/program-to-system/tree/main/capstone/01-in-memory-kv) | Basic operations, a data model, and concurrent-access tests | 🚧 |
| [02 TCP KV Server](https://github.com/jingxiang-z/program-to-system/tree/main/capstone/02-tcp-kv-server) | A request protocol, remote client, and multi-connection handling | 🚧 |
| [03 WAL and Crash Recovery](https://github.com/jingxiang-z/program-to-system/tree/main/capstone/03-wal-recovery) | Log appends, replay, and fault-injection verification | 🚧 |
| [04 Replication and Recovery](https://github.com/jingxiang-z/program-to-system/tree/main/capstone/04-replication-recovery) | Replication within one group, node failures, and recovery | 🚧 |

## Scope

- Implement one replication group.
- Do not implement sharding.
- Do not implement cross-region replication.
- Do not implement multi-key transactions.
- Prioritize clear implementation, explicit failure models, and reproducible experiments.

Implementation notes and source code live in the repository's [`capstone/`](https://github.com/jingxiang-z/program-to-system/tree/main/capstone) directory.
