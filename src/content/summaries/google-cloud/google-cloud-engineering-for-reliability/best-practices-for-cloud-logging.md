---
title: "Best practices for Cloud Logging"
resourceId: 63
date: "2021-12-01"
collection: "google-cloud-engineering-for-reliability"
order: 6
videoId: "hh_z8qEwGfQ"
---

This episode outlines Cloud Logging practices for structured records, centralized storage, retention, access control, and export. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Structure makes records queryable**: JSON fields can be filtered directly instead of requiring regular expressions over text payloads ([00:00:00]-[00:02:04]).
- **Routing and storage need an organizational design**: User-defined buckets and sinks can centralize logs across projects, with retention and location chosen for the use case ([00:02:04]-[00:03:07]).
- **Access has multiple layers**: IAM governs broader permissions while log views can narrow access within a bucket ([00:03:07]-[00:04:09]).
- **Centralization creates trade-offs**: It can simplify governance and investigation while expanding blast radius, tenant-isolation demands, cost, privacy exposure, and access complexity.

This is a 2021 architecture and UI walkthrough. Confirm current bucket defaults, retention limits, IAM roles, agent parsers, export integrations, schemas, and console procedures before use.

Full video: <https://www.youtube.com/watch?v=hh_z8qEwGfQ>
