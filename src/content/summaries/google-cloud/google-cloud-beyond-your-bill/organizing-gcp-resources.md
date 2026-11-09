---
addedDate: '2026-08-24'
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
- **Keep billing ownership explicit.** Billing accounts collect charges for linked projects and have separate permissions. The presenter recommends multiple administrators or a group, and enabling billing export to BigQuery as soon as possible, because the export does not include usage from before it was turned on. The presenter also generally recommends one billing account per organization, but multiple currencies or legal requirements may justify more. [02:06–04:13](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=126s)
- **Use labels for groupings that cross folders.** A project has one direct folder parent but can have several labels. The examples use folders for departments and teams with labels for production or development, or reverse that arrangement with environment folders and team labels. Shared, recognizable names make those groupings useful in both the console and billing reports. [04:13–06:19](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=253s)

Full video: <https://www.youtube.com/watch?v=NOOhDq1JyIM>
