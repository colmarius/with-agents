---
title: "Cloud Run in a minute"
videoId: AL2rAmWFZjM
sourceUrl: "https://www.youtube.com/watch?v=AL2rAmWFZjM"
publishedAt: "2022-12-21T00:00:02Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The source does not name its presenter or provide a speaker affiliation. This 2022 primer presents Cloud Run as fully managed compute for containerized services and jobs, emphasizing infrastructure abstraction, scale-to-zero behavior, and deployment from a container or source.

## Key Ideas

- Cloud Run is described as managed container compute that scales instances up and down from zero, with billing tied to when code runs. [00:00:00]
- Services receive endpoints with TLS termination on custom domains, while jobs support parallel batch processing; source deployment through buildpacks is presented alongside container deployment. [00:00:00]-[00:01:01]
- The primer associates portability with Cloud Run’s Kubernetes-compatible API. [00:01:01]

## Practical Implications

- The durable orientation is Cloud Run's service-and-job model for containerized workloads with more infrastructure hidden than in the VM or Kubernetes primers.
- Verify current billing units, minimum-instance behavior, concurrency, request and job limits, networking, runtime contracts, and deployment paths in current documentation.

## Questions and Tensions

- Scale-to-zero and pay-while-running are useful orientations, not a complete cost model for minimum instances, networking, storage, builds, or dependent services.
- An API-level portability claim does not prove that an application, operational model, or deployment configuration can move unchanged.

## Source

- [Video](https://www.youtube.com/watch?v=AL2rAmWFZjM)
- [transcript.md](./transcript.md)
