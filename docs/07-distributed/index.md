# 07 Distributed Systems

## Core Question

How can independent nodes coordinate despite latency, failures, and incomplete information?

## Run It First

Start with the [distributed-systems example](https://github.com/jingxiang-z/program-to-system/tree/main/examples/07-distributed). Inject latency, message loss, and node failures, then observe replica state.

## Learning Objectives

- Identify uncertainty caused by clocks, failures, and networks in distributed systems.
- Understand the core problems behind replication, consistency, partition tolerance, and consensus.
- Use sequence diagrams to reason about distributed-system behavior.

## Conceptual Path

- Failure models and timing models
- Replication, sharding, and consistency
- Consistent hashing, leader election, and consensus
- Distributed transactions, observability, and fault tolerance

## Experiment and Evidence

Record the failure model, event order, node states, complete commands, and final verification. Content is under development.

## Connection to the Capstone

This chapter supports the replication rules, node-failure handling, and state synchronization of one replication group. Sharding, cross-region replication, and multi-key transactions remain out of scope.
