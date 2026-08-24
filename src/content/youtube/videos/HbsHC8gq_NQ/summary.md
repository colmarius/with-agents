---
title: "Designing a serverless app on Google Cloud"
videoId: HbsHC8gq_NQ
sourceUrl: "https://www.youtube.com/watch?v=HbsHC8gq_NQ"
publishedAt: "2021-06-03T23:00:04Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin and Dina design an internal application for requesting, approving, scanning, and auditing open server ports. The discussion is an architectural exercise rather than a completed implementation, and its product, console, and access-control guidance reflects Google Cloud as presented in June 2021.

## Key Ideas

- Put Identity-Aware Proxy in front of App Engine to restrict the internal application and distinguish developer and administrator access; treat this as 2021-era IAM and product guidance. [00:01:03]-[00:03:10]
- Store operational request state in Firestore because the proposed access pattern is hierarchical and does not require substantial aggregation. [00:03:10]-[00:04:15]
- Use Cloud Scheduler to start a nightly scan, then fan work out through Pub/Sub so each Cloud Function handles a small unit that can be retried independently. [00:04:15]-[00:07:24]
- Publish scan results once, route mismatches through a filtered subscription for administrator email, and send all results to BigQuery for audit reporting in Data Studio. [00:07:24]-[00:11:34]

## Practical Implications

- Separating orchestration, per-target work, notifications, and reporting can limit the retry scope and let each consumer evolve independently.
- Before implementing this 2021 design, verify current product names, IAM roles, console flows, quotas, and supported integrations.

## Questions and Tensions

- The design does not resolve how port scans reach private on-premises networks or how scan credentials are protected.
- The proposed fan-out unit shifts between a server and a server-port pair, so its final granularity remains undecided.

## Source

https://www.youtube.com/watch?v=HbsHC8gq_NQ

[transcript.md](./transcript.md)
