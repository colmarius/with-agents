---
title: "Receiving Messages using Push to Cloud Function - ep.8"
videoId: k8lBOV-nRXI
sourceUrl: "https://www.youtube.com/watch?v=k8lBOV-nRXI"
publishedAt: "2020-03-06T17:00:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

Priyanka Vergadia, whose affiliation is not stated in the transcript, demonstrates a Pub/Sub push subscription backed by Cloud Functions. She covers webhook acknowledgement, automatic delivery-rate adjustment, authenticated push, and a console-created function trigger.

## Key Ideas

- Push delivery needs a DNS-routable HTTPS endpoint but no Pub/Sub client library in the receiver, which makes web frameworks and serverless handlers a lightweight fit. [00:00:48]-[00:01:37]
- Pub/Sub treats selected HTTP success codes as acknowledgements and retries when the endpoint does not return success before the acknowledgement deadline. [00:01:37]-[00:02:27]
- A slow-start algorithm increases concurrent delivery after successes and backs off after failures so the endpoint controls effective capacity through its responses. [00:02:27]-[00:03:17]
- Authenticated push can include a signed OpenID Connect token for a service account, while a Cloud Functions trigger delegates request parsing and IAM integration to the platform. [00:03:17]-[00:05:02]

## Practical Implications

- Validate authenticated push requests and return success only after the processing boundary that should prevent redelivery.
- Treat the console-created Cloud Functions trigger, response-code list, maintenance-mode delivery switch, and subscription replacement advice as a 2020 walkthrough; recheck current function generations, trigger creation, retry behavior, backlog consequences, and IAM setup.

## Questions and Tensions

- Platform-managed parsing reduces boilerplate but can obscure acknowledgement timing and retry behavior unless handlers are tested under failure.
- Temporarily changing delivery mode or replacing subscriptions can affect backlog and delivery state, which the short maintenance example does not explore.

## Source

- [Video](https://www.youtube.com/watch?v=k8lBOV-nRXI)
- [transcript.md](./transcript.md)
