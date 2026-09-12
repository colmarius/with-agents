---
title: "How to store data on Google Cloud"
resourceId: 62
date: "2022-07-22"
collection: "google-cloud-essentials"
order: 3
videoId: "w2mL4sUOjVo"
---

Files, application records, and large analytical datasets have different storage needs. Ryan compares Google Cloud services by how they organize data and how an application reads or analyzes it. [00:00–06:18](https://www.youtube.com/watch?v=w2mL4sUOjVo&t=0s)

### Key Points Covered

- **Files become objects in buckets.** Cloud Storage can hold images, videos, or documents. In the example, a bucket groups profile photos, and each photo is an individual object. [00:00–01:02](https://www.youtube.com/watch?v=w2mL4sUOjVo&t=0s)
- **Relational records use tables with defined columns.** Cloud SQL supports MySQL, PostgreSQL, and SQL Server, while Google handles operations such as patching, backups, and replicas. The application keeps a familiar database model without managing all of its infrastructure. [01:02–03:07](https://www.youtube.com/watch?v=w2mL4sUOjVo&t=62s)
- **Documents allow records with different fields.** Firestore groups documents into collections: a `users` collection might contain one document per person, with different fields for different people. Its real-time updates synchronize changes across clients, supporting examples such as leaderboards and collaborative whiteboards. [02:04–04:11](https://www.youtube.com/watch?v=w2mL4sUOjVo&t=124s)
- **Analysis and high-volume application access are distinct needs.** BigQuery is a data warehouse for large-scale SQL analysis; Ryan queries a public dataset for popular baby names. The overview also introduces Spanner for strongly consistent relational data at scale and Bigtable for workloads needing many low-latency reads and writes. [04:11–06:18](https://www.youtube.com/watch?v=w2mL4sUOjVo&t=251s)

Full video: <https://www.youtube.com/watch?v=w2mL4sUOjVo>
