---
title: How does Pokémon Go scale to millions of requests?
resourceId: 68
date: 2021-10-16
collection: google-cloud-architecting
order: 3
videoId: YG7GXjZ8En4
---

James, identified only as a technical manager at Niantic Labs, describes Pokémon GO's 2021 separation of transactional player state from location-based shared-world state.

### Key Points Covered

- James reports GKE and Spanner deployment scale for the game's single shared realm. [00:01:14]-[00:03:21]
- He explains the move from Datastore to Spanner for relational schemas, indexing, and globally consistent transactions. [00:03:21]-[00:05:29]
- Catch and shared-location interactions use different stores and consistency models. [00:06:31]-[00:08:39]
- Analytics, anti-cheat processing, map construction, pre-scaling, and monitoring use separate pipelines and tools. [00:07:36]-[00:11:47]
- This 2021 customer story is not a reusable reference design; verify current documentation with production-shaped tests and current privacy, anti-abuse, data-governance, and security review.

Full video: <https://www.youtube.com/watch?v=YG7GXjZ8En4>
