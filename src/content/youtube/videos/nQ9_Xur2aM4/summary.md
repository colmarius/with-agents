---
title: "Cloud Pub/Sub Subscribers - ep. 5"
videoId: nQ9_Xur2aM4
sourceUrl: "https://www.youtube.com/watch?v=nQ9_Xur2aM4"
publishedAt: "2020-01-12T17:00:09Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka, whose affiliation is not stated in the transcript, introduces subscription delivery state, acknowledgement deadlines, duplicate and out-of-order delivery, and push versus pull mechanics. The episode emphasizes that subscriber correctness depends on acknowledgement and idempotent processing rather than on receiving every message exactly once.

## Key Ideas

- Each subscription belongs to one topic and receives published messages at least once, subject to configured retention; the episode warns that publishing to a topic with no subscription loses that delivery opportunity. [00:00:00]-[00:01:04]
- An unacknowledged message remains outstanding until its acknowledgement deadline and can then be redelivered; subscribers must tolerate duplicates and possible reordering. [00:01:04]-[00:02:09]
- Pull subscribers request messages and acknowledge by ID, while push subscribers acknowledge by returning a successful HTTP response. [00:02:09]-[00:03:14]
- Push delivery adjusts request rate based on endpoint success, and inactive subscriptions can expire under the then-current default policy. [00:03:14]-[00:04:19]

## Practical Implications

- Make message handling idempotent and acknowledge only after the intended processing boundary completes.
- Verify current retention, exactly-once, ordering, acknowledgement, and expiration features rather than relying on the episode's 2020 limits.

## Questions and Tensions

- The suggested Dataflow path compresses substantial exactly-once-processing constraints into a short recommendation.
- Retaining messages protects lagging consumers, but finite retention still requires backlog alerts and a recovery plan.

## Source

- [Video](https://www.youtube.com/watch?v=nQ9_Xur2aM4)
- [transcript.md](./transcript.md)
