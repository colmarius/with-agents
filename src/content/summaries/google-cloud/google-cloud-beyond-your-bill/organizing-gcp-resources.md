---
title: "Organizing your GCP resources"
resourceId: 67
date: 2019-08-27
collection: google-cloud-beyond-your-bill
order: 1
videoId: "NOOhDq1JyIM"
---

Resource organization determines who can manage cloud workloads and how teams find their costs. This 2019 walkthrough explains the different jobs of organizations, folders, projects, billing accounts, and labels, rather than prescribing one folder structure for every company.

### Key Points Covered

- **Use the hierarchy for ownership and inherited access.** Projects group resources, folders group projects, and the organization sits above them. Permissions and policies flow down the hierarchy. Organization-owned projects remain under company control when the person who created them leaves. [01:02–03:09](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=62s), [04:13–05:16](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=253s)
- **Keep billing ownership explicit.** Billing accounts collect charges for linked projects and have separate permissions. The presenter recommends multiple administrators or a group, and early BigQuery export because the export shown did not recover past detailed usage. Multiple currencies or legal requirements may justify multiple billing accounts despite the preference for a simpler setup. [02:06–04:13](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=126s)
- **Use labels for groupings that cross folders.** A project has one direct folder parent but can have several labels. The examples use folders for departments and teams with labels for production or development, or reverse that arrangement with environment folders and team labels. Shared, recognizable names make those groupings useful in both the console and billing reports. [04:13–06:19](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=253s)

Full video: <https://www.youtube.com/watch?v=NOOhDq1JyIM>
