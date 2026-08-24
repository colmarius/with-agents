---
title: "How to build a social media photo sharing app on Google Cloud"
videoId: BX9BIHRfab0
sourceUrl: "https://www.youtube.com/watch?v=BX9BIHRfab0"
publishedAt: "2022-09-08T04:00:04Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priyanka and her guest Christopher walk through a 2022 reference architecture for a pet photo-sharing application. The captured source gives Christopher no surname and gives neither speaker an affiliation, so none is inferred. The transferable design separates stateless serving, identity, relational metadata, media objects, asynchronous notifications, caching, and optional machine-learning features; the named Google Cloud products are point-in-time choices.

## Key Ideas

- The application scope includes accounts, feeds, follows, and post creation and editing, with growth introducing concerns around servers, authentication, traffic, networking, and databases. [00:01:02]-[00:02:06]
- In the 2022 reference design, Christopher maps stateless application serving to Cloud Run, deployment automation to Cloud Build, and geographically distributed traffic to regional instances behind Cloud Load Balancing. [00:03:09]-[00:04:14]
- Christopher proposes Identity Platform for account flows and Cloud SQL for profile and caption data, with Database Migration Service as the migration path for existing MySQL or PostgreSQL data. [00:04:14]-[00:06:23]
- Christopher proposes Cloud Storage for media files and event-driven functions for upload transformation, then presents translation, recommendation, and custom-model services as optional enhancements. [00:06:23]-[00:08:33]
- Christopher assigns frequently accessed content to CDN caching and follow or comment notifications to Pub/Sub, then recaps the services as one end-to-end deployment. [00:08:33]-[00:10:40]

## Practical Implications

- Partition state by access pattern and consistency need: account and post metadata, media objects, feed materialization, caches, and notifications have different contracts.
- Keep request serving, media processing, and notification delivery independently scalable, and define idempotency and retry behavior at asynchronous boundaries.
- Recheck service names, runtime constraints, regional availability, pricing, and deployment integrations against current documentation before adopting the 2022 mapping.

## Questions and Tensions

- The architecture does not address feed ranking and fan-out, moderation, privacy, abuse prevention, deletion, object lifecycle, observability, or cost under viral growth.
- Caching highly interactive or personalized posts through a CDN needs cache-key, authorization, freshness, and invalidation rules that the recording does not describe.
- The transcript identifies only Priyanka and Christopher by first name and provides no affiliation for either speaker; more specific attribution would require source metadata not present in the capture.

## Source

- [Video](https://www.youtube.com/watch?v=BX9BIHRfab0)
- [transcript.md](./transcript.md)
