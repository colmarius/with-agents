---
title: "How to build a modern banking app with Google Cloud"
videoId: 0EBCMNoYvfc
sourceUrl: "https://www.youtube.com/watch?v=0EBCMNoYvfc"
publishedAt: "2022-03-31T04:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priyanka Vergadia, identified in the transcript as a Google Cloud developer advocate, presents a 2022 reference architecture for a modular digital bank. The durable design is a capability map spanning channels, integration, data, enterprise applications, core banking, and cross-cutting security and operations; the mapping to specific Google Cloud services is a point-in-time example, not a current compliance or product prescription.

## Key Ideas

- Vergadia's proposed banking-as-a-service model replaces one-to-one links between a core system and each front end with reusable microservices behind an API layer, through which partners could consume financial capabilities. [00:01:04]-[00:03:11]
- The proposed capability model separates customer and partner channels, integration, data platforms, back-office applications, core banking, and the infrastructure, security, and operations concerns shared across them. [00:03:11]-[00:06:23]
- Vergadia's 2022 service mapping puts Apigee at the integration boundary and routes batch and event data through then-current storage, messaging, transformation, warehousing, cataloging, analytics, and machine-learning services. [00:06:23]-[00:08:30]
- In that reference design, Vergadia shows core services as event-driven microservices on GKE using Spanner and Pub/Sub, with identity, data locality, encryption, tokenization, logging, incident monitoring, and SLAs treated as system-wide concerns. [00:08:30]-[00:10:38]

## Practical Implications

- Model banking capabilities, data classes, trust boundaries, and regulatory obligations before selecting runtimes or managed services.
- Put explicit contracts and governance around reusable APIs and events; modularity increases the number of consumers and failure paths as well as delivery flexibility.
- Revalidate every named service, integration, data-locality option, and security control against current regional, regulatory, and lifecycle documentation.

## Questions and Tensions

- The architecture does not show migration sequencing, failure isolation, disaster recovery, ledger reconciliation, consent, audit evidence, or how partner access is revoked.
- Claims that modular platforms can reduce product delivery from months or years to days are directional and unsupported by measurements in the recording.
- Product suitability depends on transaction semantics, residency, latency, scale, and regulatory scope that the service diagram does not specify.

## Source

- [Video](https://www.youtube.com/watch?v=0EBCMNoYvfc)
- [transcript.md](./transcript.md)
