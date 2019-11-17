# Service Gateway

Inspired by existing API gateways like Kong, but with strong integration with JSON-RPC APIs.

## Features

- Integrates with [DNS Service](../dns-service/readme.md) for SSL termination
- Integrates with [Auth Serivce](../auth-service/readme.md) for authenticating and authorizing connections.
- Integrates with [Log Service](../log-service/readme.md) for enhanced logging
- [Open Tracing](https://opentracing.io/) Support
- Versioning of all configs for quick-n-easy rollback
- Can route between multiple transports HTTP/Websocket/Queues
- Middleware/plugins for things like Rate Limiting, Cors
- Highly-available
- Automated documentation of your JSON-RPC APIs
