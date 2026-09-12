---
title: "Designing a serverless app on Google Cloud"
resourceId: 59
date: "2021-06-03"
collection: "google-cloud-serverless-expeditions"
order: 2
videoId: "HbsHC8gq_NQ"
---

Martin and Dina design an internal application for controlling which server ports may be open. Developers request access, administrators approve it, and nightly scans compare actual access with those approvals. This June 2021 design exercise separates the request system, scanning, alerts, and audit reports; it is not a completed implementation.

### Key points

- **Choose storage around the request data:** The proposed app uses Identity-Aware Proxy to restrict employee access. Firestore holds a document for each server, with its ports and permissions underneath. That structure fits the operational queries, which do not need large sums or averages across records [01:03–04:15](https://www.youtube.com/watch?v=HbsHC8gq_NQ&t=63s).
- **Split scans into independently retryable work:** Cloud Scheduler starts a function that reads target servers and publishes messages to Pub/Sub, a messaging service. Worker functions consume those messages rather than scanning every target in one long loop. If one worker fails, only its work needs retrying. The speakers leave the exact work unit open: one server or one server-port pair [04:15–08:26](https://www.youtube.com/watch?v=HbsHC8gq_NQ&t=255s).
- **One result stream can feed independent consumers:** The design publishes scan results once, sends mismatches through a filtered subscription for administrator email, and sends all results to BigQuery for audit reporting in Data Studio [07:24–12:38](https://www.youtube.com/watch?v=HbsHC8gq_NQ&t=444s).

Full video: <https://www.youtube.com/watch?v=HbsHC8gq_NQ>
