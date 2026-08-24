---
title: "Querying Cloud SQL from BigQuery"
videoId: 0cyTHbkARwY
sourceUrl: "https://www.youtube.com/watch?v=0cyTHbkARwY"
publishedAt: "2020-10-21T23:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter demonstrates a 2020 BigQuery federated-query setup for reading MySQL or PostgreSQL data in Cloud SQL through a connection resource and the `EXTERNAL_QUERY` function.

## Key Ideas

- Cloud SQL federation lets BigQuery analyze relational data without first copying it into BigQuery, after a one-time connection setup. [00:00:01]-[00:01:03]
- The setup enables the BigQuery Connection API, configures Cloud SQL connectivity, creates a location-compatible connection with database credentials, and grants users permission on that connection. [00:01:03]-[00:04:12]
- `EXTERNAL_QUERY` sends a query in the external database's SQL dialect and can feed its result into joins with native BigQuery tables. [00:03:09]-[00:05:13]
- The demonstration warns that BigQuery cannot estimate external data processed before the federated query runs. [00:03:09]-[00:04:12]

## Practical Implications

- Use current BigQuery federation and Cloud SQL documentation to choose connectivity, locations, roles, credentials, and pricing; the 2020 console and flat-rate terminology are dated.
- Reassess the video's public-IP setup against current private-connectivity and least-exposure guidance rather than copying it by default.
- Limit connection users and database credentials to the data actually required, then monitor both BigQuery and Cloud SQL workload effects.

## Questions and Tensions

- Avoiding a copy reduces data-movement work, but federated queries introduce dependency, latency, source-load, credential, and cost considerations.
- A reusable connection can reach additional databases when credentials permit, making database-side scope as important as the BigQuery IAM binding.

## Source

- [Video](https://www.youtube.com/watch?v=0cyTHbkARwY)
- [transcript.md](./transcript.md)
