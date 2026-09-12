---
title: "Cloud Run in a minute"
resourceId: 66
date: "2022-12-21"
collection: "google-cloud-bytes"
order: 3
videoId: "AL2rAmWFZjM"
---

Cloud Run runs applications packaged as containers while managing the infrastructure underneath them. This 2022 primer distinguishes services that respond to requests or events from jobs that perform batch processing [00:00–01:33](https://www.youtube.com/watch?v=AL2rAmWFZjM&t=0s).

### Key Points Covered

- **Deploy a container or start from source**: The primer shows container deployment with `gcloud run deploy` and describes buildpacks as a way to deploy directly from source. It presents automatic scaling from zero as the way Cloud Run adjusts running instances to the workload [00:00–01:01](https://www.youtube.com/watch?v=AL2rAmWFZjM&t=0s).
- **Services expose an endpoint; jobs divide batch work**: Services are presented as receiving a secure endpoint, while job instances can process work in parallel [00:00–01:33](https://www.youtube.com/watch?v=AL2rAmWFZjM&t=0s).
- **Portability is narrower than application portability**: The presenter links portability to an API compatible with Kubernetes, which does not establish that every application, configuration, or operating model moves unchanged [01:01](https://www.youtube.com/watch?v=AL2rAmWFZjM&t=61s).

Full video: <https://www.youtube.com/watch?v=AL2rAmWFZjM>
