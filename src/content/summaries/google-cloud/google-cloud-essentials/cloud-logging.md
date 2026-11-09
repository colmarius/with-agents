---
addedDate: '2026-08-24'
title: "Cloud logging"
resourceId: 62
date: "2020-07-24"
collection: "google-cloud-essentials"
order: 7
videoId: "gyDp-Cl_MdA"
---

Cloud Logging collects records from applications and infrastructure in one place, so an investigation does not require searching each system separately. Google manages the log storage, while queries select the events relevant to a problem. [00:00–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=0s)

### Key Points Covered

- **Each entry records the event and the resource that produced it.** The message in a log entry is called the payload and can be a simple string or structured data. The entry also names the monitored resource it came from. Examples include a VM starting, a file upload, and application output. Queries filter records by resource, severity, and time. [01:02–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=62s)
- **Control how much is stored.** The video shows alerts on monthly ingestion volume and exclusions that prevent selected logs from being stored. These address different needs: one warns about volume, while the other reduces it. [02:06–03:09](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=126s)
- **Route logs for other uses.** Logs can be exported to Cloud Storage for archiving, to BigQuery for more advanced analysis, or to Pub/Sub, which can forward them to other log storage systems. [03:09–04:02](https://www.youtube.com/watch?v=gyDp-Cl_MdA&t=189s)

Full video: <https://www.youtube.com/watch?v=gyDp-Cl_MdA>
