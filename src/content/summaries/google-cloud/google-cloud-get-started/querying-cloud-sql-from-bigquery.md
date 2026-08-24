---
title: "Querying Cloud SQL from BigQuery"
resourceId: 64
date: "2020-10-21"
collection: "google-cloud-get-started"
order: 8
videoId: "0cyTHbkARwY"
---

This example configures a BigQuery federated query to read MySQL or PostgreSQL data in Cloud SQL without first copying it into BigQuery. [00:00:01]-[00:01:03]

### Key Points Covered

- Setup enables the BigQuery Connection API, configures Cloud SQL connectivity, creates a location-compatible connection with database credentials, and grants access to it. [00:01:03]-[00:04:12]
- `EXTERNAL_QUERY` uses the external database's SQL dialect and can supply results to joins with native BigQuery tables. [00:03:09]-[00:05:13]
- BigQuery cannot estimate the external data processed before the federated query runs. [00:03:09]-[00:04:12]

Treat the public-IP setup and 2020 screens as historical teaching shortcuts, not modern defaults; use current live Google Cloud documentation for connectivity, credentials, IAM, and procedures.

Full video: <https://www.youtube.com/watch?v=0cyTHbkARwY>
