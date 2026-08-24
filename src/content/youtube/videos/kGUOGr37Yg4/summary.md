---
title: "How Google Photos scales to store 4 trillion photos and videos"
videoId: kGUOGr37Yg4
sourceUrl: "https://www.youtube.com/watch?v=kGUOGr37Yg4"
publishedAt: "2023-07-31T19:00:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priyanka Vergadia interviews Dave, a Google senior software engineering manager who says he leads the Google Photos storage, serving, and ML infrastructure teams, and Tracy, a Google Photos senior site reliability manager who says she led the Photos SRE team for the preceding three years. In this Google-produced 2023 account, they describe Google Photos using encrypted blob storage for media, Spanner for encrypted metadata, and asynchronous processing for machine-learning features.

## Key Ideas

- Backup stores media bytes in an encrypted blob store and associated metadata in Spanner, then triggers asynchronous processing for search, memories, and organization features. [00:01:04]-[00:03:11]
- Tracy says Spanner replication, co-location, and sharding support worldwide latency and data-residency requirements, while read-only and write shards separate interactive traffic from ML and batch work; she also describes slow rollouts as a reliability control. [00:03:11]-[00:05:20]
- Offline inference labels and organizes media in the context of a user’s library; derived labels are stored, indexed, and combined with clustering outputs for search and other experiences. [00:05:20]-[00:07:26]
- Hundreds of binaries and microservices use one central database through access patterns ranging from small lookups to large scans, with different latency and reliability requirements. [00:08:28]-[00:10:33]
- Dave and Tracy attribute simpler development and reduced SRE toil to Spanner's managed replication, placement, sharding, scaling, consistency, index verification, and shard-draining behavior. [00:10:33]-[00:12:41]
- Dave reports more than one billion users, more than four trillion stored images, millions of queries across dozens of geographic zones, and tenfold growth; these are attributed point-in-time Google Photos case claims. [00:11:37]-[00:13:43]

## Practical Implications

- Separate media bytes from queryable metadata when the two have different storage, access, and processing needs.
- Isolate latency-sensitive interactive paths from batch and ML work, even when they share a logical database.
- Choose managed infrastructure for the operational properties it can demonstrably absorb, while validating workload-specific access patterns, limits, failure behavior, residency, and economics.
- Treat all scale figures, product and service behavior, data and ML handling, and security, privacy, and residency controls as a 2023 first-party case study. Confirm current documentation and conduct workload, security, privacy, regulatory, and domain review before reuse.

## Questions and Tensions

- The episode is a Google-produced account centered on Spanner and does not compare alternative architectures, cost, migration constraints, or failure incidents.
- A “single database” simplifies some responsibilities but still fronts hundreds of services and varied access patterns; organizational and application complexity has not disappeared.
- The speakers mention encryption at rest, tight access control, privacy, and data residency at a high level, without enough detail to evaluate authorization design, retention, deletion, abuse controls, or regulatory implementation.

## Source

- [Video](https://www.youtube.com/watch?v=kGUOGr37Yg4)
- [transcript.md](./transcript.md)
