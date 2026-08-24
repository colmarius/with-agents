---
title: "Using Cloud Pub/Sub with Cloud Run - ep. 9"
videoId: ZI9ndn2obDk
sourceUrl: "https://www.youtube.com/watch?v=ZI9ndn2obDk"
publishedAt: "2020-03-13T16:00:09Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter whose affiliation is not stated demonstrates an authenticated Pub/Sub push subscription targeting a Cloud Run container. The episode contrasts function deployment with container control, then wires a private service to Pub/Sub through service accounts and IAM.

## Key Ideas

- Cloud Functions is framed as a code-focused event handler, while Cloud Run packages a stateless container for services needing more execution-environment or language control. [00:00:00]-[00:01:04]
- The sample HTTP handler processes a Pub/Sub request and returns a success status as its acknowledgement before being built and deployed as a container. [00:01:04]-[00:03:10]
- The deployment rejects unauthenticated access, then grants a subscription identity permission to invoke the Cloud Run service. [00:03:10]-[00:04:14]
- A push subscription combines the topic, Cloud Run URL, and service-account identity; service logs confirm receipt after publication. [00:04:14]-[00:05:19]

## Practical Implications

- Keep the Cloud Run endpoint private and grant invocation only to the intended push identity.
- Treat the `gcloud` commands, Container Registry image path, IAM role-grant sequence, and console flow as a 2020 walkthrough; use current Cloud Run build/deployment and Pub/Sub authenticated-push documentation.

## Questions and Tensions

- The happy path does not cover token audience validation, handler retries, duplicate effects, deployment rollbacks, or dead-letter handling.
- Returning success from the web handler must align with durable processing, not merely request receipt.

## Source

- [Video](https://www.youtube.com/watch?v=ZI9ndn2obDk)
- [transcript.md](./transcript.md)
