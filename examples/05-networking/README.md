# 05 Networking Examples

## Core Question

How does a client request travel through the protocol stack to a server and back?

## Examples

| Example | Type | Language | Focus |
| --- | --- | --- | --- |
| [Framed TCP Client/Server](01-framed-tcp-client-server/) | Core | Go | TCP streams, message boundaries, connection lifecycle, and timeouts |
| [Concurrent URL Fetcher](02-concurrent-url-fetcher/) | Practice | Go | HTTP clients, bounded concurrency, cancellation, and partial failure |

The core example exposes transport behavior. The practice example applies networking
through a higher-level protocol and client API.
