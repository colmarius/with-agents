---
title: "How Twitter maximizes performance with BigQuery"
videoId: Pym8Evbf7Ak
sourceUrl: "https://www.youtube.com/watch?v=Pym8Evbf7Ak"
publishedAt: "2022-10-08T15:00:27Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priyanka narrates a Google Cloud-produced walkthrough featuring unnamed speakers presented as Twitter engineers. They describe Twitter's 2022 hybrid analytics platform: batch and streaming replication into BigQuery, separate projects for compute and data storage, and infrastructure-as-code reconciliation for a large self-service data estate.

## Key Ideas

- The speakers say Twitter copied event data from HDFS and Kafka through separate batch and streaming paths, including Cloud Storage staging and a Kafka-to-Pub/Sub-to-BigQuery service. [00:01:03]-[00:04:16]
- They describe teams using the resulting data for timeline analytics and abuse investigations, including analysis and validation of Twitter's own abuse-detection models with BigQuery ML. [00:04:16]-[00:06:23]
- They say compute and storage projects were separated so users and teams could have isolated workspaces and quotas while storage projects applied stricter privacy, security, and protection controls. [00:05:20]-[00:07:26]
- In their account, storage projects were organized by owning identity, related event-log categories were grouped, and a view project preserved a consistent discovery interface. [00:07:26]-[00:10:37]
- They describe a scheduled GKE service that generated Terraform from source-controlled configuration, reconciled existing resources, applied access and perimeter policies, and enabled required APIs; separate internal metadata services classified data and assigned retention. [00:10:37]-[00:12:46]
- The speakers say project, perimeter, dataset, load-job, and slot limits became architecture constraints at Twitter's scale, requiring limit increases coordinated with Google Cloud teams. [00:12:46]-[00:14:53]

## Practical Implications

- Design batch and streaming replication as separate correctness problems with explicit synchronization, sensitive-data scrubbing, and failure recovery.
- Separate compute workspaces from governed data ownership when it clarifies quotas, billing, policy, and self-service access.
- Generate and continuously reconcile policy-bearing infrastructure from a reviewed source of truth rather than relying on one-time provisioning.
- Treat all exabyte, query, project-count, quota, BigQuery behavior, AI/ML behavior, and security-control claims as a 2022 snapshot; validate current documentation and conduct current privacy, abuse-safety, and security review.

## Questions and Tensions

- The unnamed-speaker format limits precise attribution, and the account does not detail replication lag, duplicate handling, deletion propagation, cost, incident history, or abuse-model effectiveness.
- Provider-raised quotas and custom support arrangements may not transfer to other organizations.
- The episode is jointly framed by Google Cloud and Twitter and offers no comparative warehouse evaluation.

## Source

- [Video](https://www.youtube.com/watch?v=Pym8Evbf7Ak)
- [transcript.md](./transcript.md)
