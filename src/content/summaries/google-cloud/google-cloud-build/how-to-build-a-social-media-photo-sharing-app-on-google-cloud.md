---
title: "How to build a social media photo sharing app on Google Cloud"
resourceId: 65
date: "2022-09-08"
collection: "google-cloud-build"
order: 5
videoId: "BX9BIHRfab0"
---

Priyanka and Christopher walk through a 2022 reference architecture for a pet photo-sharing application. The captured source supplies only their first names and no affiliations, so none are inferred.

### Key Points Covered

- **Growth exposes separate architecture concerns**: The application begins with accounts, feeds, follows, and post creation, then adds questions about serving, authentication, traffic, networking, and databases [00:01:02]-[00:02:06].
- **The serving and identity layers are proposals**: Christopher maps stateless serving to regional Cloud Run deployments behind Cloud Load Balancing, deployment automation to Cloud Build, account flows to Identity Platform, and relational metadata to Cloud SQL [00:03:09]-[00:06:23].
- **Media and metadata use different paths**: Christopher proposes Cloud Storage and event-driven functions for uploaded media, while translation, recommendations, and custom models remain optional enhancements [00:06:23]-[00:08:33].
- **Caching and notifications need contracts beyond the diagram**: The reference design assigns popular content to CDN caching and follow or comment notifications to Pub/Sub without defining authorization, invalidation, retries, or idempotency [00:08:33]-[00:10:40].

Treat the service mapping as a historical 2022 proposal, not current production guidance. Recheck product names, runtime constraints, regional availability, pricing, privacy and abuse controls, cache behavior, and asynchronous failure handling in current documentation and workload tests.

Full video: <https://www.youtube.com/watch?v=BX9BIHRfab0>
