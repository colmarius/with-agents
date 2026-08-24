---
title: "Securing App Engine apps with IAP"
videoId: _tw3md6k8aw
sourceUrl: "https://www.youtube.com/watch?v=_tw3md6k8aw"
publishedAt: "2019-10-06T16:00:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter deploys a sample App Engine application and demonstrates a 2019 Identity-Aware Proxy setup that permits an authorized account while denying another account.

## Key Ideas

- The walkthrough selects a project, deploys a sample App Engine application with the gcloud CLI, and verifies that the unprotected app responds. [00:00:01]-[00:01:06]
- Identity-Aware Proxy is placed in front of the App Engine app, and a person or group receives the IAP-secured Web App User role. [00:00:01]-[00:01:06]
- After IAP is enabled, the authorized account retains access and another account receives an access-denied response. [00:01:06]

## Practical Implications

- Use current IAP and App Engine documentation to configure application access, OAuth or identity prerequisites, IAM bindings, and testing.
- Treat the 2019 console navigation and activation flow as dated rather than current procedure.
- Keep IAP as security cross-topic material in this collection; the quickstart does not replace broader identity, application, or network security design.

## Questions and Tensions

- One allowed and one denied browser session demonstrate the basic policy outcome but not group lifecycle, inherited permissions, audit logging, or non-browser access.
- Protecting the front door with IAP does not by itself establish least privilege for the application's service identity or downstream resources.

## Source

- [Video](https://www.youtube.com/watch?v=_tw3md6k8aw)
- [transcript.md](./transcript.md)
