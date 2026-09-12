---
title: "Receiving Messages using Push to Cloud Function - ep.8"
resourceId: 60
date: "2020-03-06"
collection: "google-cloud-pubsub-made-easy"
order: 8
videoId: "k8lBOV-nRXI"
---

Pub/Sub push delivery sends messages as HTTPS requests, so the receiver can be a web handler rather than an application that polls for messages. Priyanka Vergadia demonstrates a Cloud Function that receives order messages for a packaging service.

### Key points

- **The receiver is an HTTPS endpoint, not a Pub/Sub client**: Push sends an HTTP request to a DNS-routable service, allowing a web framework or serverless handler to receive messages without a subscriber client library ([00:48–01:37](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=48s)).
- **A successful response is the acknowledgement**: Pub/Sub retries when the handler does not return an accepted success response before the acknowledgement deadline, so response timing defines the processing boundary ([01:37–02:27](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=97s)).
- **Push rate responds to endpoint results**: The described slow-start behavior increases concurrency after successes and backs off after failures; it does not guarantee that an underprovisioned handler will keep up ([02:27–03:17](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=147s)).
- **A signed identity token lets the endpoint authorize the caller**: Authenticated push can include an OpenID Connect (OIDC) token for the subscription's service account. The endpoint validates that token to decide whether the request is allowed ([03:17–04:10](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=197s)).
- **The 2020 console demo lets Cloud Functions manage delivery details**: The platform parses and responds to Pub/Sub requests and uses Identity and Access Management (IAM) permissions. The function handles message data and attributes; its logs confirm receipt after a message is published ([04:10–05:02](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=250s)).

For maintenance, the episode suggests temporarily switching a subscription to pull and restoring its push endpoint afterward. Its separate suggestion to delete and replace a subscription does not explain the consequences for messages still awaiting delivery; it should not be read as a state-preserving migration ([05:02–05:55](https://www.youtube.com/watch?v=k8lBOV-nRXI&t=302s)).

Full video: <https://www.youtube.com/watch?v=k8lBOV-nRXI>
