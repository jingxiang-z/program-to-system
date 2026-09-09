# From Program to System

> [!CAUTION]
> This repository is an early alpha. The learning path is incomplete and may contain errors. Please open an issue if you find a problem or have a suggestion.

A learning path from program execution to distributed systems. Build a mental model of computer systems through focused, reproducible experiments, then apply the concepts by implementing a distributed key-value store.

## Goals

- Build a structured understanding of computer systems.
- Cover execution, processes, memory, concurrency, networking, storage, and distributed systems.
- Organize each chapter around core questions and verify the underlying principles through reproducible experiments.
- Connect the seven chapters through one continuous capstone project.

## Prerequisites

- Proficiency in one programming language.
- Familiarity with basic data structures and algorithms.
- Basic command-line skills on Linux or macOS.

## Learning Path

Follow the chapters in order when possible. Each chapter can stand on its own, but later chapters build on abstractions introduced earlier.

| Chapter | Topics | Goal | Status |
| --- | --- | --- | --- |
| [01 Execution](docs/01-execution/) | Compilation, linking, loading, and instruction execution | Understand how source code becomes a running program | 🚧 |
| [02 Processes](docs/02-processes/) | Processes, threads, scheduling, and system calls | Understand how an operating system manages execution contexts | 🚧 |
| [03 Memory](docs/03-memory/) | Address spaces, virtual memory, and caches | Understand how data moves through the memory hierarchy | 🚧 |
| [04 Concurrency](docs/04-concurrency/) | Synchronization, communication, races, and deadlocks | Reason about the correctness and performance of concurrent programs | 🚧 |
| [05 Networking](docs/05-networking/) | Layers, protocols, connections, and services | Understand how data moves reliably between hosts | 🚧 |
| [06 Storage](docs/06-storage/) | File systems, persistence, and databases | Understand how systems store and retrieve data reliably | 🚧 |
| [07 Distributed Systems](docs/07-distributed/) | Consistency, replication, fault tolerance, and consensus | Build a framework for reasoning about multi-node systems | 🚧 |
| [Capstone](capstone/) | Distributed key-value store | Combine the seven chapters into a recoverable multi-node system | 🚧 |

## How to Learn

- Run a small program and observe its behavior before studying the mechanism behind it.
- Start with the smallest useful implementation and add complexity one step at a time.
- Keep the main learning material in `docs/` and `examples/`, and reader notes and troubleshooting records in `community/`.
- Record the environment, complete commands, expected output, and verification process for every experiment.
- When optimizing performance, document the test environment and method and include reproducible before-and-after measurements.

## Capstone: Distributed Key-Value Store

The capstone connects the seven topics through four incremental stages:

1. In-memory key-value store: implement the data model and basic read and write operations.
2. TCP service: define a protocol and make the store available to remote clients.
3. Persistence and crash recovery: use a write-ahead log (WAL) to preserve operations and restore state after a restart.
4. Replication and failure recovery: extend the service to multiple nodes and verify recovery from node failures.

The project focuses on one replication group. Sharding, cross-region replication, and multi-key transactions are out of scope. See [capstone/README.md](capstone/README.md) for the detailed roadmap.

## Local Development

```bash
npm install
npm run docs:dev
```

Open the local URL printed in the terminal. To build the static site, run:

```bash
npm run docs:build
```

## Repository Structure

```text
program-to-system/
├── README.md
├── LICENSE
├── docs/
│   ├── 01-execution/
│   ├── 02-processes/
│   ├── 03-memory/
│   ├── 04-concurrency/
│   ├── 05-networking/
│   ├── 06-storage/
│   └── 07-distributed/
├── examples/
├── capstone/
└── community/
```

## Contributing

Issues and pull requests are welcome for corrections, experiments, notes, and reproducibility reports.

## License

Documentation and notes are licensed under [CC BY 4.0](LICENSE). Source code is licensed under the [MIT License](LICENSE-CODE). Third-party material remains subject to its original license.
