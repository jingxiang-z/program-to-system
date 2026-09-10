# Memory Access Profiler

> **Status:** Planned  
> **Type:** Core  
> **Language:** C

## Goal

Measure how allocation, first access, and access order affect mappings, page faults,
resident memory, and execution time.

## Learning Outcomes

- Locate code, static data, heap, stack, and mapped regions in an address space.
- Explain why reserving virtual memory and making pages resident are different events.
- Relate sequential, strided, and random access to spatial locality.

## Requirements

- Allocate a configurable region without immediately touching every page.
- Support sequential, strided, and pseudorandom access modes.
- Report elapsed time and a checksum that prevents the work from being optimized away.
- Provide commands for inspecting mappings, resident memory, and page-fault counts.

## Observe

Predict when resident memory and minor page faults will increase. Record the page size,
region size, mapping, fault counts, resident memory, and repeated measurements for each
access pattern. Treat timing as environment-specific evidence rather than fixed output.

## Tests

- Reject invalid sizes and strides.
- Produce the expected checksum for every access mode.
- Use a fixed seed for repeatable pseudorandom access.
- Verify that measurements run without reading outside the allocated region.

## Done When

- The commands reproduce first-touch page faults.
- The results distinguish address-space size from resident memory.
- Differences among access patterns are explained using locality and the memory hierarchy.
