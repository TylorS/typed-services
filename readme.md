# @typed/services

> (WIP) Home for [JSON-RPC](https://www.jsonrpc.org/specification)-powered services for cloud-scale applications.

When used in conjunction it is possible to develop highly secure, traceable, and dynamic real-time applications that
are relentlessly designed to reach cloud-scale by distributing loads across queues. JSON-RPC is used to provide 
a language/transport-agnostic protocol for maximum flexibility with simplified event sourcing.

## Services

For more information on the individual services please see their respective documentation linked below.

| Service | Purpose | Dashboard |
| ------- | ------- | --------- |
| [Service Gateway](./applications/service-gateway-service/readme.md) | Manage multi-transport JSON-RPC Services in the cloud | [Serivce Gateway](./applications/service-gateway-dashboard/readme.md) |
| [DNS](./applications/dns-service/readme.md) | Create DNS Records & Manage SSL Certificates | [DNS](./applications/dns-dashboard/readme.md) |
| [Auth](./applications/auth-service/readme.md) | Authentication/Authorization | [Auth](./applications/auth-dashboard/readme.md) |
| [Communications](./applications/communications-service/readme.md) | SMS/Email/Slack/Webhook triggers | [Communications](./applications/communications-dashboard/readme.md) |
| [Feature Flags](./applications/feature-flag-service/readme.md) | Move quickly, soften failures, A/B testing | [Feature Flags](./applications/communications-dashboard/readme.md) |
| [Logging](./applications/log-service/readme.md) | Keep track of what your applications are doing | [Logging](./applications/log-dashboard/readme.md) |
| [Frontend Gateway](./applications/frontend-gateway-service/readme.md) | SOA for the frontend | [Frontend Gateway](./applications/frontend-gateway-dashboard/readme.md)
