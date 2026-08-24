---
title: "Designing a serverless app on Google Cloud"
resourceId: 59
date: "2021-06-03"
collection: "google-cloud-serverless-expeditions"
order: 2
videoId: "HbsHC8gq_NQ"
---

The presenters sketch an internal application for requesting, approving, scanning, and auditing open server ports. It is a design exercise, not a completed or validated implementation, but it illustrates how access, operational state, fan-out, notifications, and reporting can remain separate responsibilities.

### Key points

- **Access and data choices follow the proposed users and queries:** The design puts 2021-era Identity-Aware Proxy in front of App Engine for internal developer and administrator access, then chooses Firestore for hierarchical request state without substantial aggregation [00:01:03]-[00:04:15].
- **Fan-out narrows the retry scope:** Cloud Scheduler starts a nightly scan; an orchestration function reads targets and publishes work to Pub/Sub so a worker handles one server—or, later in the discussion, possibly one server-port pair [00:04:15]-[00:08:26]. The final unit remains unresolved, but the aim is to retry only failed work rather than the full scan.
- **One result stream can feed independent consumers:** The design publishes scan results once, sends mismatches through a filtered subscription for administrator email, and sends all results to BigQuery for audit reporting in Data Studio [00:07:24]-[00:12:38].

This June 2021 architecture preserves useful separation of concerns, but its products, console paths, IAM guidance, quotas, networking assumptions, and integrations are point-in-time. Verify current behavior and define duplicate delivery, idempotency, credentials, private-network reachability, and recovery before implementation.

Full video: <https://www.youtube.com/watch?v=HbsHC8gq_NQ>
