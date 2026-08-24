---
title: "GCP vs. Firebase - Projects & storage"
videoId: xbmYmgBEj4o
sourceUrl: "https://www.youtube.com/watch?v=xbmYmgBEj4o"
publishedAt: "2020-01-22T00:00:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter—the transcript states neither a name nor an affiliation—explains the shared project, billing, and Cloud Storage substrate behind Firebase and the then-named GCP. The 2020 console steps and platform branding are historical, but the distinction between shared resources and different developer-facing controls remains useful.

## Key Ideas

- Firebase is presented as a mobile and web development layer over Google Cloud services, with the same project grouping, identity, and billing foundation. [00:00:00]-[00:01:03]
- A project can be opened through either console, and deleting the Firebase project also deletes its underlying Google Cloud project and resources. [00:01:03]-[00:02:07]
- Cloud Storage, Cloud Functions, and Cloud Firestore are described as shared products exposed through Firebase-specific SDKs and tooling. [00:02:07]-[00:03:12]
- Data uploaded from Firebase clients can be processed by other Google Cloud services because both surfaces address the same storage resources. [00:03:12]-[00:04:13]
- Cloud IAM and Firebase Security Rules are separate access-control systems for service-side and Firebase-client access paths. [00:04:13]

## Practical Implications

- Treat Firebase and Google Cloud configuration as views over shared project resources, not as independent environments.
- Model authorization for each access path explicitly; shared storage does not imply shared access-control semantics.
- Verify current project-linking flows, default bucket behavior, SDK support, naming, billing, and Cloud Run functions or Cloud Functions integration before acting.

## Questions and Tensions

- The shared-project explanation does not cover organization policy, service accounts, environment separation, or safe deletion controls.
- Firebase/GCP naming, console UI, APIs, defaults, and serverless boundaries have evolved since 2020 and are current-doc-required.

## Source

- [Video](https://www.youtube.com/watch?v=xbmYmgBEj4o)
- [transcript.md](./transcript.md)
