---
title: "Cloud Pub/Sub in Action - ep. 3"
videoId: f5DOsB7Nlw0
sourceUrl: "https://www.youtube.com/watch?v=f5DOsB7Nlw0"
publishedAt: "2019-12-10T17:22:43Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter whose affiliation is not stated walks through a 2019 console-and-Python demonstration of one publisher and two pull subscriptions. The demo shows that each subscription retains its own delivery state, allowing a subscriber that starts later to receive an earlier message.

## Key Ideas

- The exercise narrows the Cat-Out system to an order topic with separate packaging and notification subscriptions. [00:00:00]-[00:02:09]
- It creates a service account with publisher and subscriber roles and downloads a JSON key for the sample applications. [00:02:09]-[00:03:14]
- Three Python processes represent one publisher and two independent subscribers, with the publisher unaware of which subscriptions exist. [00:03:14]-[00:05:20]
- A subscriber started after publication still receives its copy because Pub/Sub holds the message in that subscription's backlog until acknowledgement. [00:05:20]-[00:06:23]

## Practical Implications

- Use separate subscriptions when consumers need independent acknowledgement and recovery state.
- Treat the downloaded long-lived service-account key flow as a historical demo, not a current security recommendation; use current authentication guidance for real deployments.

## Questions and Tensions

- The walkthrough grants both publishing and subscribing roles to one identity, leaving least-privilege separation unexplored.
- The happy-path sample does not cover retries, duplicate delivery, idempotency, dead letters, or production credential management.

## Source

- [Video](https://www.youtube.com/watch?v=f5DOsB7Nlw0)
- [transcript.md](./transcript.md)
