---
title: "How to run code on Google Cloud"
videoId: jtPtSVSTb9Y
sourceUrl: "https://www.youtube.com/watch?v=jtPtSVSTb9Y"
publishedAt: "2022-07-29T16:00:29Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Ryan, whose affiliation is not stated in the transcript, organizes Google Cloud compute services along a spectrum from managed platforms to customizable infrastructure. The 2022 service map is useful for identifying the operational control a workload needs, but its product boundaries and pricing descriptions require current documentation.

## Key Ideas

- The opening decision frame is how much server and infrastructure responsibility a team wants Google to abstract. [00:00:00]-[00:01:01]
- Firebase and Cloud Functions are presented for client-heavy applications and event-driven functions, while App Engine manages complete web or backend applications. [00:01:01]-[00:03:46]
- Cloud Run offers managed stateless containers, whereas GKE exposes Kubernetes controls over placement, scaling, networking, and lifecycle. [00:03:46]-[00:05:47]
- Compute Engine provides the most direct virtual-machine control and can ease less-modified application migration at the cost of more operational responsibility. [00:05:47]-[00:06:50]
- The closing example combines several compute models, treating service choice as an architectural composition rather than a winner-take-all decision. [00:06:50]

## Practical Implications

- Classify workload shape, runtime constraints, state, team operating capacity, and portability needs before selecting a compute product.
- Prefer the highest useful abstraction, but account explicitly for the control or compatibility it removes.
- Re-check current Cloud Run, Cloud Run functions, App Engine, GKE, Firebase, and Compute Engine boundaries, quotas, pricing, and migration guidance before implementation.

## Questions and Tensions

- The spectrum compresses costs, networking, security boundaries, state, cold starts, and platform coupling into a single control-versus-management axis.
- The 2022 Cloud Functions and Cloud Run distinction predates later Cloud Run functions convergence; exact runtime recommendations are historical and current-doc-required.

## Source

- [Video](https://www.youtube.com/watch?v=jtPtSVSTb9Y)
- [transcript.md](./transcript.md)
