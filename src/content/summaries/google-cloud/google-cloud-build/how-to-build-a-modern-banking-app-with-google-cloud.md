---
title: "How to build a modern banking app with Google Cloud"
resourceId: 65
date: "2022-03-31"
collection: "google-cloud-build"
order: 2
videoId: "0EBCMNoYvfc"
---

Google Cloud developer advocate Priyanka Vergadia proposes a 2022 architecture for a modular digital bank. The goal is to let multiple apps and partners reuse banking capabilities—such as opening accounts or making payments—through APIs instead of building a separate connection to the core bank for each channel.

### Key Points Covered

- **Banking as a service exposes capabilities to partners**: Small services behind a shared API layer let retailers, for example, offer loans or buy-now-pay-later options at checkout. Vergadia argues that modularity speeds product delivery; the claimed reduction from months or years to days is a proposed benefit, not a measured result [01:04–03:11](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=64s).
- **Separate business responsibilities before choosing products**: Customer and partner channels handle interaction; integration connects systems; the data platform supports analysis; back-office applications handle finance and regulatory reporting; core banking stores and processes accounts, transactions, cards, and payments. Security and operations apply across all of them [03:11–06:23](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=191s).
- **The data pipeline serves analysis separately from transactions**: In the 2022 design, Apigee manages APIs, Cloud Storage receives batch data, Pub/Sub receives events, and Dataflow transforms data for BigQuery analysis and model development [06:23–08:30](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=383s).
- **Core services communicate through events**: Vergadia places them on Google Kubernetes Engine (GKE), with customer, product, and transaction data in Spanner and messages in Pub/Sub. Identity, data location, encryption, logging, and incident monitoring span the design rather than belonging to a single banking function [08:30–10:38](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=510s).

Full video: <https://www.youtube.com/watch?v=0EBCMNoYvfc>
