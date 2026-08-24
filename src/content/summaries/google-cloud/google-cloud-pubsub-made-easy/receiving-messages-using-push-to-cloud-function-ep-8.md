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

- **The receiver is an HTTPS endpoint, not a Pub/Sub client**: Push sends an HTTP request to a DNS-routable service, allowing a web framework or serverless handler to receive messages without a subscriber client library ([00:00:48]-[00:01:37]).
- **A successful response is the acknowledgement**: Pub/Sub retries when the handler does not return an accepted success response before the acknowledgement deadline, so response timing defines the processing boundary ([00:01:37]-[00:02:27]).
- **Push rate responds to endpoint results**: The described slow-start behavior increases concurrency after successes and backs off after failures; it does not guarantee that an underprovisioned handler will keep up ([00:02:27]-[00:03:17]).
- **Authenticated push can carry an OIDC token**: The endpoint can validate a token issued for the subscription's service-account identity instead of accepting unauthenticated traffic ([00:03:17]-[00:04:10]).
- **The console demo delegates trigger plumbing to Cloud Functions**: The platform parses the request and integrates with IAM while the function handles message data and attributes ([00:04:10]-[00:05:02]).

**Historical walkthrough:** Recheck current Cloud Functions generations, trigger setup, accepted responses, retry behavior, and IAM. Return success only after durable processing, and do not treat changing or replacing a subscription during maintenance as state-preserving without reviewing backlog consequences ([00:05:02]-[00:05:55]).

Full video: <https://www.youtube.com/watch?v=k8lBOV-nRXI>
