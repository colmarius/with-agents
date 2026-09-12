---
title: How does Pokémon Go scale to millions of requests?
resourceId: 68
date: 2021-10-16
collection: google-cloud-architecting
order: 3
videoId: YG7GXjZ8En4
---

Pokémon GO needs nearby players to see the same world while keeping each player's catches and progress distinct. Niantic Labs technical manager James explains how its 2021 architecture separates player records from shared location data and prepares for large live events.

### Key Points Covered

- **The database choice changed as the game matured.** James says Datastore made it easy to start without managing storage infrastructure. The team later chose Spanner for relational data, more complex indexed schemas, and globally consistent transactions. [03:21–05:29](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=201s)
- **Catching a Pokémon and changing a shared location take different paths.** A catch updates the player's record in Spanner. Gym battles and PokéStop lures update a location-based backend whose changes become visible to nearby players through eventual consistency: the shared view converges as updates propagate. [05:29–07:36](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=329s)
- **Matching inputs produce a matching world view.** James describes deterministic server behavior: nearby players receive the same Pokémon even when different servers handle them because the relevant inputs match. Caching, precise timing, and synchronized settings help keep those views aligned. [07:36–09:42](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=456s)
- **Background processing builds and checks the world.** Dataflow combines map and player-submitted location sources to build gyms and PokéStops. Other jobs examine player logs for cheating—for example, appearing in Japan and then Australia a minute later. For live events, the team pre-scales parts of the system and monitors them with several tools. [08:39–11:47](https://www.youtube.com/watch?v=YG7GXjZ8En4&t=519s)

Full video: <https://www.youtube.com/watch?v=YG7GXjZ8En4>
