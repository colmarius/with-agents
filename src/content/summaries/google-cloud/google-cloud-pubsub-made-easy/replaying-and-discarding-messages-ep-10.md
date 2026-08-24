---
title: "Replaying and discarding messages - ep. 10"
resourceId: 60
date: "2020-03-27"
collection: "google-cloud-pubsub-made-easy"
order: 10
videoId: "VyLmmamuOVo"
---

This episode explains how seek changes acknowledgement state in bulk for recovery, repeatable testing, or backlog removal.

### Key points

- **Seek can make acknowledged messages eligible again**: The recovery example uses either a snapshot or timestamp after faulty subscriber code acknowledged work too early ([00:00:00]-[00:01:03]).
- **Snapshots capture subscription acknowledgement state**: They can be used by subscriptions on the same topic, but the episode ties snapshot lifetime to retained-message age ([00:01:03]-[00:02:07]).
- **Time-based replay has prerequisites and tradeoffs**: It requires retaining acknowledged messages and is described as potentially more costly and sensitive to clock skew ([00:01:03]-[00:02:07]).
- **Snapshots can support deployment recovery and repeated tests**: Reusing input data makes the test repeatable, but replay itself does not make downstream side effects idempotent ([00:02:07]-[00:03:10]).
- **Seeking into the future discards backlog by marking it acknowledged**: That is a destructive purge operation, not a harmless reset ([00:03:10]).

**Current-use note:** Verify current seek, snapshot, consistency, retention, and pricing semantics. Rehearse recovery before an incident, make repeated processing safe, and require explicit impact review before purging backlog.

Full video: <https://www.youtube.com/watch?v=VyLmmamuOVo>
