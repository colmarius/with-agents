---
title: "How Google Photos scales to store 4 trillion photos and videos"
videoId: kGUOGr37Yg4
sourceUrl: "https://www.youtube.com/watch?v=kGUOGr37Yg4"
publishedAt: "2023-07-31T19:00:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka Vergadia interviews Dave, a senior software engineering manager leading Google Photos storage, serving, and ML infrastructure teams, and Tracy, a senior site reliability manager who led the Photos SRE team. They describe a 2023 Google Photos architecture centered on encrypted blob storage for media, Spanner for metadata, and asynchronous processing for machine-learning features.

## Key Ideas

- Backup stores media bytes in an encrypted blob store and associated metadata in Spanner, then triggers asynchronous processing for search, memories, and organization features. [00:01:04]-[00:03:11]
- Spanner replication and data placement support global latency and data-residency needs, while separate access patterns protect interactive reads and writes from batch and ML workloads. [00:03:11]-[00:05:20]
- Offline inference labels and organizes media in the context of a user’s library; derived labels are stored, indexed, and combined with clustering outputs for search and other experiences. [00:05:20]-[00:07:26]
- Hundreds of binaries and microservices use one central database through access patterns ranging from small lookups to large scans, with different latency and reliability requirements. [00:08:28]-[00:10:33]
- Dave and Tracy attribute reduced development and SRE toil to managed replication, sharding, scaling, consistency, index verification, and recovery behavior. [00:10:33]-[00:12:41]
- The speakers report more than one billion users, more than four trillion stored images, millions of queries, and tenfold growth, presenting these as point-in-time evidence from the Google Photos system. [00:11:37]-[00:13:43]

## Practical Implications

- Separate immutable media bytes from queryable metadata when the two have different storage, access, and processing needs.
- Isolate latency-sensitive interactive paths from batch and ML work, even when they share a logical database.
- Choose managed infrastructure for the operational properties it can demonstrably absorb, while validating workload-specific access patterns, limits, failure behavior, residency, and economics.
- Treat all scale numbers, internal architecture details, and Spanner capabilities as a 2023 first-party case study, not current guarantees or a universal reference design.

## Questions and Tensions

- The episode is a Google-produced account centered on Spanner and does not compare alternative architectures, cost, migration constraints, or failure incidents.
- A “single database” simplifies some responsibilities but still fronts hundreds of services and varied access patterns; organizational and application complexity has not disappeared.
- Security and privacy are asserted at a high level, without enough detail to evaluate authorization design, retention, deletion, abuse controls, or regulatory implementation.

## Source

- [Video](https://www.youtube.com/watch?v=kGUOGr37Yg4)
- [transcript.md](./transcript.md)
