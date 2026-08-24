---
title: "Cloud Run in a minute"
resourceId: 66
date: "2022-12-21"
collection: "google-cloud-bytes"
order: 3
videoId: "AL2rAmWFZjM"
---

The source names neither its presenter nor an affiliation. This 2022 primer presents Cloud Run as managed compute for containerized services and jobs.

### Key Points Covered

- **Services and jobs share a managed container runtime**: The primer says Cloud Run scales instances up and down from zero and ties billing to when code runs [00:00:00].
- **The endpoint claim has a specific boundary**: Services are said to receive an endpoint with TLS termination on custom domains; jobs support parallel batch processing, and buildpacks offer a source-deployment path [00:00:00]-[00:01:01].
- **Portability is narrower than application portability**: The presenter links portability to an API compatible with Kubernetes, which does not establish that every application, configuration, or operating model moves unchanged [00:01:01].

Use this as historical service-family orientation, not implementation or cost guidance. Verify current endpoint and domain behavior, billing units, minimum instances, concurrency, networking, limits, jobs, and deployment paths in current documentation.

Full video: <https://www.youtube.com/watch?v=AL2rAmWFZjM>
