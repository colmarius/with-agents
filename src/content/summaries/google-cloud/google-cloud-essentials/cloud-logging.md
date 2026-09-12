---
title: "Cloud logging"
resourceId: 62
date: "2020-07-24"
collection: "google-cloud-essentials"
order: 7
videoId: "gyDp-Cl_MdA"
---

Cloud Logging collects records from applications and infrastructure in one place, so an investigation does not require searching each system separately. Google manages the log storage, while queries select the events relevant to a problem. [00:00–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=0s)

### Key Points Covered

- **Keep the event and its source together.** Each log entry contains a payload—the message as text or structured data—and identifies the resource that produced it. Examples include a VM starting, a file upload, and application output. Queries filter records by resource, severity, and time. [01:02–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=62s)
- **Control how much is stored.** The video shows alerts on monthly ingestion volume and exclusions that prevent selected logs from being stored. These address different needs: one warns about volume, while the other reduces it. [02:06–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=126s)
- **Route logs for other uses.** Exporting to Cloud Storage supports archiving; BigQuery supports further analysis; Pub/Sub can pass logs to other storage systems. [03:09–04:02](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=189s)

Full video: <https://www.youtube.com/watch?v=gyDp-Cl_MdA>
