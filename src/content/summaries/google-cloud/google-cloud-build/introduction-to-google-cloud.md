---
title: "Introduction to Google Cloud"
resourceId: 65
date: "2022-02-17"
collection: "google-cloud-build"
order: 1
videoId: "IeMYQ-qJeK4"
---

Priyanka Vergadia, identified in the transcript as a Google Cloud developer advocate, builds one possible reference architecture for a fictional internet application. The useful method is to expand the design from requirements and operational responsibilities rather than start with product names.

### Key Points Covered

- **The architecture grows with the requirements**: Vergadia starts with DNS, web and application servers, and databases, then adds horizontal scaling, load balancing, caching, object storage, asynchronous messaging, analytics, monitoring, and access control as the scenario expands [00:00:00]-[00:08:26].
- **Compute is a control-versus-operations choice**: In her 2022 service map, serverless products hide more infrastructure work, GKE retains container flexibility, and Compute Engine exposes virtual-machine control with more scaling, patching, and maintenance responsibility [00:08:26]-[00:10:35].
- **Different data shapes receive different service mappings**: Vergadia separates relational, document, wide-column, cache, object, event, stream and batch, warehouse, and model-training workloads before naming the then-current products she would use [00:12:41]-[00:18:01].
- **Security and delivery span the system**: The presentation frames cloud security as shared responsibility, then maps encryption, identity, authorization, application protection, source, build, scanning, trusted images, and staged deployment to the 2022 portfolio [00:18:01]-[00:22:23].

This is historical architecture orientation, not a current implementation recommendation. Recheck every named service, limit, SLA, integration, security control, and lifecycle status in current documentation before using the design.

Full video: <https://www.youtube.com/watch?v=IeMYQ-qJeK4>
