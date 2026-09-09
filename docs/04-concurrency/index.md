# 04 Concurrency

## Core Question

How can multiple execution flows share state while preserving correctness and acceptable performance?

## Run It First

Start with the [concurrency example](https://github.com/jingxiang-z/program-to-system/tree/main/examples/04-concurrency). Reproduce a race condition, then fix and verify it with a synchronization mechanism.

## Learning Objectives

- Distinguish concurrency from parallelism and identify data races and race conditions.
- Use locks, atomic operations, condition variables, or message passing to build correct programs.
- Recognize deadlock, livelock, starvation, and memory-visibility problems.

## Conceptual Path

- Concurrent execution models
- Mutual exclusion, condition synchronization, and semaphores
- Atomicity, visibility, and memory models
- Deadlock analysis and concurrency performance

## Experiment and Evidence

Record how the race was reproduced, how it was fixed, the test commands, and any performance difference. Content is under development.

## Connection to the Capstone

This chapter helps keep the in-memory KV store and TCP server correct under concurrent clients and explains the cost of synchronization.
