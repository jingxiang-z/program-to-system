# 06 Storage Examples

## Core Question

How does a system make data durable and recover to a well-defined state after an interrupted write?

## Examples

| Example | Type | Language | Focus |
| --- | --- | --- | --- |
| [Append-Only KV Log](01-append-only-kv-log/) | Core | Go | Record formats, durability boundaries, replay, truncation, and corruption |

One cohesive project connects the write path to recovery while keeping indexing,
compaction, and transactions available as later extensions.
