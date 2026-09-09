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

- James reports GKE and Spanner deployment scale for the game's single shared realm. [01:14–03:21](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=74s)
- He explains the move from Datastore to Spanner for relational schemas, indexing, and globally consistent transactions. [03:21–05:29](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=201s)
- Catch and shared-location interactions use different stores and consistency models. [06:31–08:39](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=391s)
- Analytics, anti-cheat processing, map construction, pre-scaling, and monitoring use separate pipelines and tools. [07:36–11:47](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=456s)
- This 2021 customer story is not a reusable reference design; verify current documentation with production-shaped tests and current privacy, anti-abuse, data-governance, and security review.

Full video: <https://www.youtube.com/watch?v=YG7GXjZ8En4>
