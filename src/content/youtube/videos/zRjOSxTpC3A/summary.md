---
title: "Cloud Functions vs. Cloud Run"
videoId: zRjOSxTpC3A
sourceUrl: "https://www.youtube.com/watch?v=zRjOSxTpC3A"
publishedAt: "2020-10-15T23:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin and Grant compare two 2020-era serverless execution models through a fictional wildlife-camera system. An event-triggered image-processing function illustrates Cloud Functions, while a containerized REST API illustrates Cloud Run and its revision traffic splitting and custom-domain support.

## Key Ideas

- The image pipeline reacts to finalized Cloud Storage uploads, invokes the Vision API, filters detected labels, and writes matching animal sightings to Firestore without an application explicitly calling the function. [00:00:00]-[00:06:22]
- The presenters choose an event-triggered function for the first workload because the platform connects the storage event to the handler with less application and deployment setup. [00:01:04]-[00:04:14]
- They choose Cloud Run for a REST API because the team wants a container, an HTTP server, revision-level traffic splitting, and a custom domain, accepting responsibility for more application setup. [00:08:30]-[00:13:48]
- Revision traffic splitting is used to send a small percentage of requests to a new version before full promotion, separating deployment from exposure. [00:15:55]-[00:18:02]

## Practical Implications

- Select a runtime from the trigger, packaging, protocol, rollout, and operational requirements rather than from a general “serverless” label.
- Keep event handlers small and explicit about downstream API calls, filtering, and persistence; keep HTTP services explicit about ports, routes, errors, and revision rollout.
- Treat every command, runtime, registry, console path, and service boundary in this 2020 demonstration as historical. Cloud Functions has since converged into Cloud Run functions, and current documentation should define the present decision boundary.

## Questions and Tensions

- The comparison treats features available in 2020 as durable product boundaries, so it is useful as evolution context rather than a current selection matrix.
- The demonstration does not examine retries, duplicate events, idempotency, authentication, observability, or partial failure across Vision API and Firestore calls.

## Source

- [Video](https://www.youtube.com/watch?v=zRjOSxTpC3A)
- [transcript.md](./transcript.md)
