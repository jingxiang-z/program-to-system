# 03 WAL and Crash Recovery

## Core Question

How can a write-ahead log (WAL) recover acknowledged data after an unexpected process exit?

## Planned Deliverables

- A WAL record format and append path
- Log replay during startup
- A policy for truncated, corrupted, or incomplete records
- Crash-injection and recovery tests

## Verification

Document the complete commands for writing data, terminating the process, restarting it, and checking the recovered state. Implementation remains to be added.
