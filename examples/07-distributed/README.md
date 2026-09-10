# 07 Distributed Systems Examples

## Core Question

How do replicas coordinate when nodes, networks, and clocks are unreliable?

## Examples

| Example | Type | Language | Focus |
| --- | --- | --- | --- |
| [Replicated Register](01-replicated-register/) | Core | Go | Event order, replication acknowledgments, network faults, and replica catch-up |

The example uses a deterministic in-process transport so failures are repeatable. It
does not require leader election or a complete consensus implementation.
