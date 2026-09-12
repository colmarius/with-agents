---
title: "Best practices for Cloud Operations in the enterprise"
resourceId: 63
date: "2021-11-03"
collection: "google-cloud-engineering-for-reliability"
order: 8
videoId: "rMOXWc5BUkc"
---

As services spread across teams and projects, shared operational data helps engineers understand dependencies and investigate incidents. This episode recommends centralizing monitoring and logs while separately deciding who can read them and how long they should be kept ([00:00–03:11](https://www.youtube.com/watch?v=rMOXWc5BUkc&t=0s)).

### Key Points Covered

- **Make dependency health visible across teams**: The presenter gives two reasons for shared data: a dependency's reliability history informs service design, and knowing whether it is currently having an incident helps with response ([01:04–03:11](https://www.youtube.com/watch?v=rMOXWc5BUkc&t=64s)).
- **Keep an accessible but controlled audit trail**: Audit logs should answer who did what, where, and when. The recommendation is to test configuration changes in a separate project before production and grant only the permissions each reader needs ([02:07–04:13](https://www.youtube.com/watch?v=rMOXWc5BUkc&t=127s)).
- **Choose retention and access for each use**: Compliance records, security investigations, and analytics can have different needs. Log views restrict which records readers see within a bucket; sinks route records to destinations such as BigQuery, Cloud Storage, or Pub/Sub, each with its own access and retention controls ([03:11–05:08](https://www.youtube.com/watch?v=rMOXWc5BUkc&t=191s)).

Full video: <https://www.youtube.com/watch?v=rMOXWc5BUkc>
