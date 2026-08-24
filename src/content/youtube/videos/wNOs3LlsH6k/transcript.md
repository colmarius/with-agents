---
title: "Cloud Storage in a minute"
sourceUrl: "https://www.youtube.com/watch?v=wNOs3LlsH6k"
videoId: "wNOs3LlsH6k"
capturedAt: "2026-08-24T21:52:02.677Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 105
---

## Transcript

[00:00:00] [Applause] [Music] Give me a minute and I'll show you how Cloud Storage can help you store objects while optimizing the performance of your apps. Google Cloud Storage is a global, secure, and scalable object or blob store for immutable unstructured data such as images, videos, and documents. When you are building an app, you store objects in buckets which are associated with a project. You can then upload objects to the bucket and download objects from it using the console or gsutil commands. By default, data at rest is encrypted, and you have options to secure it with your own encryption keys. You can grant permission to specific members and teams or make the objects fully public for mobile and web applications. When creating buckets, you have options depending on budget, availability, and access frequency. Choose Standard regional or multi-regional buckets for high performance, frequent access, and highest availability; Nearline for once-a-month access; Coldline for less than once a quarter; and Archive for data that you want to put away for years. The objects are automatically versioned, and

[00:01:04] with object lifecycle management, you can automatically transition the data to lower-cost storage classes when it reaches a certain age or when you store a newer version of the file. Once you have stored the data, accessing it is easy with a single API call for all the storage classes. Cloud Storage is optimal to use for hosting static websites, streaming, and storing documents. It is widely used for backups and archives, and it is a great data lake choice for big data and ML. Next time you are thinking about storing data, take a minute and look at Cloud Storage. For more info, check out cloud.google.com/storage.
