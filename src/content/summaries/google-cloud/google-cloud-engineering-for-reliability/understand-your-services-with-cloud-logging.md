---
title: "Understand your services with Cloud Logging"
resourceId: 63
date: "2021-08-25"
collection: "google-cloud-engineering-for-reliability"
order: 13
videoId: "IlUCyV8mcS0"
---

Once measurements show an elevated error rate or a slow service, logs help explain which events occurred. This introduction follows an event through Cloud Logging, from collection and storage to filtering the records needed for an investigation ([00:00–01:01](https://www.youtube.com/watch?v=IlUCyV8mcS0&t=0s)).

### Key Points Covered

- **An entry describes an event and its origin**: It contains a timestamp and a payload—the message, as text or structured data such as JSON—and may identify the resource, log name, and severity ([00:00–02:05](https://www.youtube.com/watch?v=IlUCyV8mcS0&t=0s)).
- **Routing decides where a log is kept**: A sink is a routing configuration whose filters select entries for a destination. Destinations include indexed Cloud Logging buckets, Cloud Storage for archives, BigQuery for analysis, and Pub/Sub for further processing. An exclusion prevents matching entries from reaching that sink's destination ([01:01–03:07](https://www.youtube.com/watch?v=IlUCyV8mcS0&t=61s)).
- **Shared storage need not mean shared access**: A log view limits which records a user can read within a bucket. The example centralizes several projects' logs while letting one user see only one project's records and another see all of them ([03:07–04:11](https://www.youtube.com/watch?v=IlUCyV8mcS0&t=187s)).
- **Filter before inspecting or streaming**: Logs Explorer narrows the example to one Kubernetes container's error logs, then exposes each entry's payload and metadata. A query can also select the logs to stream as new entries arrive during debugging ([04:11–06:16](https://www.youtube.com/watch?v=IlUCyV8mcS0&t=251s)).

Full video: <https://www.youtube.com/watch?v=IlUCyV8mcS0>
