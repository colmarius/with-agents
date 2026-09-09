---
title: "Receiving Messages using Push to Cloud Function - ep.8"
resourceId: 60
date: "2020-03-06"
collection: "google-cloud-pubsub-made-easy"
order: 8
videoId: "k8lBOV-nRXI"
---

Priyanka Vergadia, whose affiliation is not established by the source, demonstrates a Pub/Sub push subscription backed by Cloud Functions.

### Key points

- **The receiver is an HTTPS endpoint, not a Pub/Sub client**: Push sends an HTTP request to a DNS-routable service, allowing a web framework or serverless handler to receive messages without a subscriber client library ([00:48–01:37](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=48s)).
- **A successful response is the acknowledgement**: Pub/Sub retries when the handler does not return an accepted success response before the acknowledgement deadline, so response timing defines the processing boundary ([01:37–02:27](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=97s)).
- **Push rate responds to endpoint results**: The described slow-start behavior increases concurrency after successes and backs off after failures; it does not guarantee that an underprovisioned handler will keep up ([02:27–03:17](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=147s)).
- **Authenticated push can carry an OIDC token**: The endpoint can validate a token issued for the subscription's service-account identity instead of accepting unauthenticated traffic ([03:17–04:10](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=197s)).
- **The console demo delegates trigger plumbing to Cloud Functions**: The platform parses the request and integrates with IAM while the function handles message data and attributes ([04:10–05:02](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=250s)).

**Historical walkthrough:** Recheck current Cloud Functions generations, trigger setup, accepted responses, retry behavior, and IAM. Return success only after durable processing, and do not treat changing or replacing a subscription during maintenance as state-preserving without reviewing backlog consequences ([05:02–05:55](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=302s)).

Full video: <https://www.youtube.com/watch?v=k8lBOV-nRXI>
