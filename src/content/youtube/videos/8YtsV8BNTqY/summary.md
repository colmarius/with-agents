---
title: "Cloud Run scalability"
videoId: 8YtsV8BNTqY
sourceUrl: "https://www.youtube.com/watch?v=8YtsV8BNTqY"
publishedAt: "2023-12-01T05:00:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin and V, the name used in the transcript, run a synthetic Cloud Run scaling demonstration. The service combines a one-second wait with CPU work, while a custom load generator and dashboard visualize clients, container instances, request count, and success rate.

## Key Ideas

- The synthetic handler approximates a service that waits on a backend and then performs CPU work, but deliberately excludes database scaling. [00:00:00]-[00:02:08]
- The dashboard receives lifecycle signals and may show startup delay before a new container instance appears. [00:02:08]-[00:03:14]
- In the demonstration, traffic rises from 10 to 2,000 load-generating loops; requests queue temporarily while Cloud Run adds instances, increasing observed latency. [00:03:14]-[00:04:16]
- The experiment then raises the load generators to 30,000 and reports a 100% success rate, while warning that a real database must independently sustain the traffic. [00:04:16]-[00:05:21]
- The presenters frame scalability as workload-specific and note that more active instances cost money. [00:05:21]-[00:06:26]

## Practical Implications

- Treat this as one December 2023 synthetic demonstration, not a general capacity guarantee; reproduce tests with representative dependencies, concurrency, latency targets, quotas, and failure conditions.
- End-to-end scaling is constrained by downstream systems even when the request-serving tier scales successfully.

## Questions and Tensions

- The transcript gives no request rate, latency distribution, instance count, configuration, region, concurrency setting, or test duration needed to reproduce the result.
- A displayed success rate does not establish whether latency stayed within an application's service objective.

## Source

https://www.youtube.com/watch?v=8YtsV8BNTqY

[transcript.md](./transcript.md)
