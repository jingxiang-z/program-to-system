# Examples

This directory contains focused, runnable exercises that reveal system behavior. Each
chapter has one core example and may add practice examples when a separate mechanism
needs its own treatment. A chapter must not contain more than three examples.

## Organization

Examples are grouped by chapter:

```text
examples/
├── _template/
├── 01-execution/
├── 02-processes/
├── 03-memory/
├── 04-concurrency/
├── 05-networking/
├── 06-storage/
└── 07-distributed/
```

Each example directory contains a `README.md` that defines its goal, requirements,
observations, tests, and completion criteria. Use [`_template/`](_template/) when
adding an example. Continuous implementations that span chapters belong in
[`capstone/`](../capstone/).

## Example Plan

| Chapter | Example | Type | Language |
| --- | --- | --- | --- |
| 01 Execution | [Source to Executable](01-execution/01-source-to-executable/) | Core | C |
| 01 Execution | [Function Call and Stack Frame](01-execution/02-function-call-stack-frame/) | Practice | C |
| 02 Processes | [Process Supervisor](02-processes/01-process-supervisor/) | Core | C |
| 03 Memory | [Memory Access Profiler](03-memory/01-memory-access-profiler/) | Core | C |
| 03 Memory | [LRU Cache](03-memory/02-lru-cache/) | Practice | Go |
| 04 Concurrency | [Race to Correctness](04-concurrency/01-race-to-correctness/) | Core | Go |
| 04 Concurrency | [Worker Pool](04-concurrency/02-worker-pool/) | Practice | Go |
| 05 Networking | [Framed TCP Client/Server](05-networking/01-framed-tcp-client-server/) | Core | Go |
| 05 Networking | [Concurrent URL Fetcher](05-networking/02-concurrent-url-fetcher/) | Practice | Go |
| 06 Storage | [Append-Only KV Log](06-storage/01-append-only-kv-log/) | Core | Go |
| 07 Distributed Systems | [Replicated Register](07-distributed/01-replicated-register/) | Core | Go |
