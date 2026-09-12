---
title: "Exporting your billing data and creating custom dashboards"
resourceId: 67
date: 2019-09-14
collection: google-cloud-beyond-your-bill
order: 4
videoId: "ZyMO9XabUUM"
---

Billing export lets teams ask cost questions beyond the built-in reports. In this 2019 walkthrough, Mark Mirchandani sends billing records to BigQuery, queries them with SQL, and turns the results into dashboards that distinguish services and environments.

### Key Points Covered

- **Capture history before you need it.** Mirchandani recommends enabling export when the billing account is created because the feature shown did not recover detailed data from before enablement. He favors the BigQuery export over the less detailed file export. [00:00–01:36](https://www.youtube.com/watch?v=ZyMO9XabUUM&t=0s)
- **Give the records a destination.** The setup selects a project and BigQuery dataset, optionally dedicated to cost management. Records arrive as services update their costs, and storing this billing data can itself incur BigQuery charges. [01:36–02:26](https://www.youtube.com/watch?v=ZyMO9XabUUM&t=96s)
- **Query by the distinctions your team needs.** The first example totals each service's spending by month. Location, project, and label fields support other breakdowns; environment labels let a dashboard compare production with development costs. [02:26–04:06](https://www.youtube.com/watch?v=ZyMO9XabUUM&t=146s)
- **Dashboards reuse the exported data.** The demo connects BigQuery to Data Studio, either through a sample billing report or a custom report. Charts and filters then make the same cost records explorable without rewriting a SQL query for every view. [03:14–05:03](https://www.youtube.com/watch?v=ZyMO9XabUUM&t=194s)

Full video: <https://www.youtube.com/watch?v=ZyMO9XabUUM>
