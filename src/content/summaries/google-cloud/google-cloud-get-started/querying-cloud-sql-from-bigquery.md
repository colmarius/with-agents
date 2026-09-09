---
title: "Querying Cloud SQL from BigQuery"
resourceId: 64
date: "2020-10-21"
collection: "google-cloud-get-started"
order: 8
videoId: "0cyTHbkARwY"
---

This example configures a BigQuery federated query to read MySQL or PostgreSQL data in Cloud SQL without first copying it into BigQuery. [00:01–01:03](https://www.youtube.com/watch?v=0cyTHbkARwY&t=1s)

### Key Points Covered

- Setup enables the BigQuery Connection API, configures Cloud SQL connectivity, creates a location-compatible connection with database credentials, and grants access to it. [01:03–04:12](https://www.youtube.com/watch?v=0cyTHbkARwY&t=63s)
- `EXTERNAL_QUERY` uses the external database's SQL dialect and can supply results to joins with native BigQuery tables. [03:09–05:13](https://www.youtube.com/watch?v=0cyTHbkARwY&t=189s)
- BigQuery cannot estimate the external data processed before the federated query runs. [03:09–04:12](https://www.youtube.com/watch?v=0cyTHbkARwY&t=189s)

Treat the public-IP setup and 2020 screens as historical teaching shortcuts, not modern defaults; use current live Google Cloud documentation for connectivity, credentials, IAM, and procedures.

Full video: <https://www.youtube.com/watch?v=0cyTHbkARwY>
