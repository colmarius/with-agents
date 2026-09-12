---
title: "GCP vs. Firebase - Projects & storage"
resourceId: 62
date: "2020-01-22"
collection: "google-cloud-essentials"
order: 5
videoId: "xbmYmgBEj4o"
---

Firebase and Google Cloud are not separate environments for the same app: a Firebase project is also a Google Cloud project. They share resources and billing, while Firebase adds tools aimed at mobile and web development. [00:00–01:03](https://www.youtube.com/watch?v=xbmYmgBEj4o&t=0s)

### Key Points Covered

- The same project can appear in either console; deleting the Firebase project also deletes the underlying Google Cloud project and its resources. [01:03–02:07](https://www.youtube.com/watch?v=xbmYmgBEj4o&t=63s)
- Cloud Storage, Cloud Functions, and Cloud Firestore are shared products exposed through Firebase-specific SDKs and tooling. [02:07–03:12](https://www.youtube.com/watch?v=xbmYmgBEj4o&t=127s)
- Shared storage allows shared processing. In the presenter's example, a mobile app uploads pictures through Firebase, then a scheduled Google Cloud task resizes or crops those same pictures. [03:12–04:13](https://www.youtube.com/watch?v=xbmYmgBEj4o&t=192s)
- The access path still matters: Cloud Identity and Access Management (IAM) controls access to buckets and objects from Google Cloud services, while Firebase Security Rules control access through the Firebase client libraries. Sharing the data does not make these two permission systems interchangeable. [04:13–05:21](https://www.youtube.com/watch?v=xbmYmgBEj4o&t=253s)

Full video: <https://www.youtube.com/watch?v=xbmYmgBEj4o>
