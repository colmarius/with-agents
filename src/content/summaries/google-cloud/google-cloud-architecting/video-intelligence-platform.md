---
title: How to build a Video Intelligence Platform on Google Cloud
resourceId: 68
date: 2021-08-28
collection: google-cloud-architecting
order: 5
videoId: xg_Z0rVftPs
---

Arcules collects video from cameras at customer sites and makes it searchable through a cloud service. Cloud and security architect Ben describes its 2021 design: buffer and process data near the cameras, then store video, configuration, and analytical data according to their different needs.

### Key Points Covered

- **The edge appliance buffers data before upload.** At each customer site, it collects device data and runs processing components in Kubernetes containers on physical hardware or VMware. Ben describes this as a way to place computation where needed instead of requiring all processing to happen in the cloud. [01:05–04:12](https://www.youtube.com/watch?v=xg_Z0rVftPs&t=65s)
- **Different records need different databases.** Cloud SQL holds device configuration, a graph database represents permissions, SingleStore handles high-rate ingestion, and BigQuery retains metadata for analysis. In the 2021 design, some metadata reached Pub/Sub through IoT Core. [04:12–06:18](https://www.youtube.com/watch?v=xg_Z0rVftPs&t=252s)
- **Tiny video chunks made write requests costly.** H.264 video was divided around keyframes, producing many small objects per camera. Ben says Arcules introduced aggregation to reduce the number of object-storage writes, with Pub/Sub messages carrying related information into databases for access. [06:18–07:21](https://www.youtube.com/watch?v=xg_Z0rVftPs&t=378s)
- **Monitoring and security testing were already in use; other work remained planned.** Ben describes multiple monitoring tools, external penetration tests, API scanning, and Security Command Center checks. Distributed tracing across services and letting customers retrain models on their own data were future enhancements. [07:21–10:30](https://www.youtube.com/watch?v=xg_Z0rVftPs&t=441s)

Full video: <https://www.youtube.com/watch?v=xg_Z0rVftPs>
