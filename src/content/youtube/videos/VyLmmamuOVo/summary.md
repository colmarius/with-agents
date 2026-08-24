---
title: "Replaying and discarding messages - ep. 10"
videoId: VyLmmamuOVo
sourceUrl: "https://www.youtube.com/watch?v=VyLmmamuOVo"
publishedAt: "2020-03-27T16:00:13Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter whose affiliation is not stated explains Pub/Sub seek operations for recovering from subscriber bugs, repeating tests, and discarding obsolete backlog. The episode distinguishes seeking to a snapshot from seeking to a timestamp.

## Key Ideas

- Seek changes acknowledgement state in bulk so previously acknowledged messages can become eligible for redelivery after faulty subscriber code. [00:00:00]-[00:01:03]
- A snapshot captures a subscription's acknowledgement state and can be reused with subscriptions on the same topic, but its lifetime depends on retained-message age. [00:01:03]-[00:02:07]
- Time-based seek can replay messages after a prior timestamp when acknowledged-message retention is enabled, though the episode notes cost and clock-skew tradeoffs. [00:01:03]-[00:02:07]
- Snapshots support deployment recovery and repeatable testing against the same data. [00:02:07]-[00:03:10]
- The episode says seeking to a future time marks the current backlog acknowledged to discard it. [00:03:10]

## Practical Implications

- Consider recovery snapshots before risky subscriber changes and test the replay procedure before an incident, while verifying current seek semantics and limits.
- Treat purge-by-seek as a destructive operational decision requiring explicit backlog and downstream-impact review.

## Questions and Tensions

- Replay restores delivery opportunity, not idempotency; reprocessed messages can repeat external side effects.
- Snapshot lifetime, retention cost, seek consistency, and present-day limits need current-documentation verification.

## Source

- [Video](https://www.youtube.com/watch?v=VyLmmamuOVo)
- [transcript.md](./transcript.md)
