# Concurrent URL Fetcher

> **Status:** Planned  
> **Type:** Practice  
> **Language:** Go

## Goal

Fetch a collection of URLs with bounded concurrency, cancellation, timeouts, and
independent error reporting.

## Learning Outcomes

- Manage HTTP request lifecycles and response resources.
- Bound concurrent network work and propagate cancellation.
- Preserve useful results when only part of a workload fails.

## Requirements

- Accept a list of URLs, a positive concurrency limit, and a per-request timeout.
- Return one result per input with URL, status when available, body size, and error.
- Preserve input ordering in the final result collection.
- Continue after ordinary request failures and stop promptly on caller cancellation.
- Close response bodies and terminate all background work on every path.

## Observe

Use only a local test server. Predict which requests can overlap, then record active
request counts, completion order, timeout behavior, and the separately ordered result
collection.

## Tests

- Concurrency limit, timeout, and cancellation.
- Non-success responses, malformed URLs, and partial failure.
- Response-body cleanup and preserved result ordering.

## Done When

- Active requests never exceed the configured limit.
- Every input receives an independently useful result unless the caller cancels.
- No request or worker remains running after return.
