---
title: "GCP vs. Firebase - Projects & storage"
resourceId: 62
date: "2020-01-22"
collection: "google-cloud-essentials"
order: 5
videoId: "xbmYmgBEj4o"
---

An unnamed presenter explains the shared project, billing, and Cloud Storage substrate behind Firebase and the then-named GCP. [00:00:00]-[00:01:03]

### Key Points Covered

- Firebase is presented as a mobile and web development layer over Google Cloud services with a shared project, identity, and billing foundation. [00:00:00]-[00:01:03]
- The same project can appear in either console; deleting the Firebase project also deletes the underlying Google Cloud project and its resources. [00:01:03]-[00:02:07]
- Cloud Storage, Cloud Functions, and Cloud Firestore are shared products exposed through Firebase-specific SDKs and tooling. [00:02:07]-[00:03:12]
- Cloud IAM governs service-side access, while Firebase Security Rules govern Firebase-client access paths to shared resources. [00:04:13]-[00:04:13]

The 2020 branding, console flows, defaults, and serverless boundaries are historical; use current Google Cloud and Firebase documentation before configuring access, storage, linking, or deletion.

Full video: <https://www.youtube.com/watch?v=xbmYmgBEj4o>
