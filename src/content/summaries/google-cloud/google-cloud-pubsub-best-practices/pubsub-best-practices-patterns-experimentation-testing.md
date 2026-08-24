---
title: "Pub/Sub Best Practices: Patterns, Experimentation, and Testing"
resourceId: 61
date: "2023-03-11"
collection: "google-cloud-pubsub-best-practices"
order: 6
videoId: "pP6ipLkXnkk"
---

Chloe, whose affiliation is not established by the source, closes the series with operational advice on naming, fan-out, credentials, testing, billing, regions, and retention.

### Key points

- **Stable unique names avoid stale-cache delays**: The episode warns against deleting and recreating a resource under the same name and cites a 10,000-subscription limit when discouraging high fan-out ([00:00:00]-[00:01:04]).
- **Granular subscriber identities improve attribution and access control**: Separate credentials matter when independently managed consumers read from a subscription ([00:00:00]-[00:01:04]).
- **Heartbeat messages are a point-in-time latency tactic**: For low-throughput streams needing low latency, the episode suggests small messages to keep a topic warm; it separately recommends the Pub/Sub emulator for local development and testing ([00:01:04]-[00:02:10]).
- **Labels support the billing breakdown it describes**: The episode says resource labels reach billing data so charges can be filtered by label ([00:01:04]-[00:02:10]).
- **Region and retention affect the stated costs**: It recommends consuming near the publish region to reduce network egress and removing shorter subscription retention when longer topic retention already covers the need ([00:02:10]).

**Current-use note:** Verify current limits, emulator fidelity, low-throughput behavior, billing labels, regional egress pricing, and retention charges. Heartbeats add traffic, and cost tactics must be balanced against recovery, residency, and latency requirements.

Full video: <https://www.youtube.com/watch?v=pP6ipLkXnkk>
