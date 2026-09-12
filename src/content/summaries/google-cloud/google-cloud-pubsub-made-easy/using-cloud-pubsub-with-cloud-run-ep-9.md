---
title: "Using Cloud Pub/Sub with Cloud Run - ep. 9"
resourceId: 60
date: "2020-03-13"
collection: "google-cloud-pubsub-made-easy"
order: 9
videoId: "ZI9ndn2obDk"
---

A Pub/Sub subscriber can run as a containerized HTTP service on Cloud Run. This walkthrough deploys a packaging-service example that rejects unauthenticated requests, then gives a Pub/Sub subscription permission to call it.

### Key points

- **Cloud Run provides container-level control**: The episode contrasts deploying a function with packaging a stateless HTTP service when the application needs more control over language or execution environment ([00:00–01:04](https://www.youtube.com/watch?v=ZI9ndn2obDk&t=0s)).
- **The HTTP response tells Pub/Sub whether to retry**: The sample logs a greeting and returns HTTP 204 to acknowledge processing. An HTTP error such as 400 or 500 causes the message to be retried ([01:04–03:10](https://www.youtube.com/watch?v=ZI9ndn2obDk&t=64s)).
- **The historical deployment builds and pushes a container image**: It uses `gcloud`, the older Container Registry path, and then-current Cloud Run deployment choices ([02:07–03:10](https://www.youtube.com/watch?v=ZI9ndn2obDk&t=127s)).
- **The receiving service remains private**: A service-account identity receives permission to invoke Cloud Run, and the push subscription combines that identity with the service URL and topic ([03:10–05:19](https://www.youtube.com/watch?v=ZI9ndn2obDk&t=190s)).

Full video: <https://www.youtube.com/watch?v=ZI9ndn2obDk>
