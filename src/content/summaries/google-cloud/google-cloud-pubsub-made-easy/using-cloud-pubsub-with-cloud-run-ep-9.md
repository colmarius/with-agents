---
title: "Using Cloud Pub/Sub with Cloud Run - ep. 9"
resourceId: 60
date: "2020-03-13"
collection: "google-cloud-pubsub-made-easy"
order: 9
videoId: "ZI9ndn2obDk"
---

This walkthrough deploys a private Cloud Run container as the endpoint for an authenticated Pub/Sub push subscription.

### Key points

- **Cloud Run provides container-level control**: The episode contrasts deploying a function with packaging a stateless HTTP service when the application needs more control over language or execution environment ([00:00:00]-[00:01:04]).
- **The HTTP success response acknowledges processing**: The sample handler returns a success code after processing, while error responses request retry ([00:01:04]-[00:02:07]).
- **The historical deployment builds and pushes a container image**: It uses `gcloud`, the older Container Registry path, and then-current Cloud Run deployment choices ([00:02:07]-[00:03:10]).
- **The receiving service remains private**: A service-account identity receives permission to invoke Cloud Run, and the push subscription combines that identity with the service URL and topic ([00:03:10]-[00:05:19]).

**Historical walkthrough:** Use current Cloud Run build, registry, deployment, IAM, token-audience, and authenticated-push guidance rather than copying the 2020 commands. The demo proves receipt on its happy path, not safe retries or exactly-once side effects; success should follow the intended durable processing boundary.

Full video: <https://www.youtube.com/watch?v=ZI9ndn2obDk>
