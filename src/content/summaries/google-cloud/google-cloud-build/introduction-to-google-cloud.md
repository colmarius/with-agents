---
title: "Introduction to Google Cloud"
resourceId: 65
date: "2022-02-17"
collection: "google-cloud-build"
order: 1
videoId: "IeMYQ-qJeK4"
---

Google Cloud developer advocate Priyanka Vergadia builds one possible architecture for a fictional web application. Her 2022 walkthrough starts with what the application must do, adds components as requirements grow, and only then maps those jobs to Google Cloud products.

### Key Points Covered

- **More traffic creates new jobs for the architecture**: DNS resolves the site's name to an address. When one web server is no longer enough, horizontal scaling adds servers and a load balancer distributes requests among them. A database cache reuses frequently read results instead of querying the database for every request [00:00–05:17](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=0s).
- **Media processing need not happen in the web server**: Files live in object storage, with metadata in the database. Uploads trigger functions to resize images or transcode video; a content delivery network caches popular files closer to users. Notification work can instead be queued for a separate service to deliver [05:17–06:20](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=317s), [11:39–13:45](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=699s).
- **More control brings more operational responsibility**: Vergadia suggests serverless products such as Cloud Run for teams that want to focus on code, Google Kubernetes Engine for more container and node configuration, and Compute Engine virtual machines when full machine control is necessary. The last choice also brings responsibility for scaling, patching, and maintenance [08:26–11:39](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=506s).
- **Analytics has a separate flow from serving requests**: Batch files and live events are ingested, transformed, and stored for analysis. The example maps that work to Cloud Storage, Pub/Sub, Dataflow, and BigQuery, with dashboards and model training consuming the resulting data. Database selection similarly follows the data's use, such as relational records, documents, or temporary cached results [12:41–18:01](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=761s).
- **Deployment includes checks and promotion**: The delivery example builds and tests code, scans for vulnerabilities, checks trusted images, and deploys to staging before review and promotion to production. This sits alongside shared security responsibilities for data, user access, applications, and infrastructure [18:01–22:23](https://www.youtube.com/watch?v=IeMYQ-qJeK4&t=1081s).

Full video: <https://www.youtube.com/watch?v=IeMYQ-qJeK4>
