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

- **Create a reusable connection.** The connection identifies the Cloud SQL instance and database, stores database credentials, and has a location compatible with the data being queried. Users receive permission to query through that connection. [02:06–04:12](https://www.youtube.com/watch?v=0cyTHbkARwY&t=126s)
- **Run part of the query where the data lives.** `EXTERNAL_QUERY` takes the connection ID and a query written in the external database's SQL dialect. In the example, it retrieves employee numbers and hire dates from Cloud SQL; BigQuery joins those results to its own salary table and calculates average salary by hire year. [03:09–05:13](https://www.youtube.com/watch?v=0cyTHbkARwY&t=189s)
- **Database credentials also set the access boundary.** The presenter warns that if those credentials can read other databases in the same instance, the connection can query those databases too. [02:06–03:09](https://www.youtube.com/watch?v=0cyTHbkARwY&t=126s)
- BigQuery cannot estimate how much external data will be processed before the federated query runs; the amount becomes known afterward. [04:12–05:13](https://www.youtube.com/watch?v=0cyTHbkARwY&t=252s)

Full video: <https://www.youtube.com/watch?v=0cyTHbkARwY>
