# Framed TCP Client/Server

> **Status:** Planned  
> **Type:** Core  
> **Language:** Go

## Goal

Design a small framed protocol that remains correct when TCP divides or combines bytes
differently from the sender's write calls.

## Learning Outcomes

- Explain why TCP provides a byte stream rather than application message boundaries.
- Implement framing, validation, deadlines, and connection shutdown.
- Relate application reads and writes to an observed TCP exchange.

## Requirements

- Define a documented request and response frame with explicit size limits.
- Implement a client and concurrent server using exact-read or buffered parsing logic.
- Handle fragmented frames, multiple frames in one read, malformed lengths, EOF, and
  timeouts.
- Shut down without abandoning active connections indefinitely.

## Observe

Predict how a frame will be parsed when sent one byte at a time. Record client/server
logs and a local packet capture for one connection. Treat packet boundaries as
observations, never as protocol guarantees.

## Tests

- Complete frame, byte-at-a-time frame, and several coalesced frames.
- Oversized or malformed frame.
- Client disconnects midway through a frame.
- Read deadline and concurrent clients.

## Done When

- Parsing is independent of individual `Read` and `Write` boundaries.
- Invalid clients cannot cause unbounded allocation or a permanent blocked connection.
- Automated tests use local in-process connections and pass under the race detector.
