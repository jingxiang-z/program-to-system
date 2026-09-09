# 03 Memory

## Core Question

How do the memory hierarchy and virtual memory shape the behavior and performance of a running program?

## Run It First

Start with the [memory example](https://github.com/jingxiang-z/program-to-system/tree/main/examples/03-memory). Observe the address space, page faults, and memory-access locality.

## Learning Objectives

- Distinguish physical addresses, virtual addresses, pages, frames, and address translation.
- Understand locality, paging, page faults, and page replacement.
- Analyze how memory-access patterns affect performance.

## Conceptual Path

- The memory hierarchy and locality
- Virtual address spaces and page tables
- Translation lookaside buffers, page faults, and replacement
- Allocation, mapping, and memory safety

## Experiment and Evidence

Record memory maps, page-fault or benchmark output, the environment, and complete commands. Content is under development.

## Connection to the Capstone

This chapter supports decisions about the in-memory KV store's data layout, capacity controls, cache behavior, and resource estimates.
