---
title: "Using object versioning"
videoId: ExtyhPqE_Hs
sourceUrl: "https://www.youtube.com/watch?v=ExtyhPqE_Hs"
publishedAt: "2020-12-24T00:00:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates Cloud Storage Object Versioning with the legacy `gsutil` CLI, including enabling or disabling the feature, checking its state, listing versions, and addressing an older generation.

## Key Ideas

- With Object Versioning enabled, overwriting or deleting a live object creates or retains a noncurrent version rather than leaving only the latest state. [00:00:01]-[00:01:05]
- The `gsutil versioning` commands in the demonstration turn versioning on or off and report whether it is enabled for a bucket. [00:00:01]-[00:01:05]
- Older object versions are identified and accessed by generation number while the current version remains the default visible object. [00:01:05]

## Practical Implications

- Use current Cloud Storage documentation and the current gcloud CLI guidance; the video's 2020 `gsutil` commands are historical procedure.
- Object Versioning and current Cloud Storage soft delete are distinct data-protection features. Evaluate their separate retention, restore, lifecycle, and cost behavior rather than treating one as a synonym for the other.
- Add lifecycle rules and recovery tests so retained generations do not create unbounded storage cost or a false sense of recoverability.

## Questions and Tensions

- Keeping noncurrent generations improves recovery options but increases storage and lifecycle-management obligations.
- Turning Object Versioning off does not by itself explain what happens to already retained versions; current documentation should govern cleanup decisions.

## Source

- [Video](https://www.youtube.com/watch?v=ExtyhPqE_Hs)
- [transcript.md](./transcript.md)
