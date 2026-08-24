---
title: "Organizing your GCP resources"
videoId: NOOhDq1JyIM
sourceUrl: "https://www.youtube.com/watch?v=NOOhDq1JyIM"
publishedAt: "2019-08-27T18:03:21Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter connects Google Cloud’s resource hierarchy to access control, billing ownership, and cost attribution. The 2019 episode recommends beginning with a simple structure, maintaining administrator redundancy, exporting billing data early, and using folders, projects, labels, and naming conventions deliberately.

## Key Ideas

- Organizations, folders, and projects form a hierarchy that groups related resources and allows permissions and policies to inherit through the structure. [00:00:00]-[00:02:06]
- Projects should belong to the organization rather than depend on the employee who created them, so organizational administrators can retain visibility and control through personnel changes. [00:02:06]-[00:03:09]
- Billing accounts have distinct roles and responsibilities; the episode recommends redundant administrators, constrained account creation, and early BigQuery billing export because export data is not retroactive. [00:02:06]-[00:04:13]
- Folders express one primary hierarchy while labels provide cross-cutting classification; clear shared naming makes console, billing, and ownership data easier to interpret. [00:04:13]-[00:06:19]
- The recommended hierarchy follows organizational governance needs rather than one universal folder template. [00:05:16]-[00:06:19]

## Practical Implications

- Design resource hierarchy, access ownership, billing ownership, and cost attribution together; changing only one leaves governance gaps.
- Keep administrative access redundant through groups or multiple accountable administrators, and document who owns billing support and payment operations.
- Treat the “GCP,” G Suite, console, IAM-role, payment-profile, and billing-account instructions as a 2019 snapshot. Validate current Cloud Identity, organization, billing-export, and role guidance before implementation.

## Questions and Tensions

- A hierarchy that mirrors today’s org chart can become costly to reorganize as products and teams change; labels and other governance mechanisms may need to carry more durable ownership semantics.
- The recommendation to use one billing account in most cases is contextual and may conflict with legal entities, currencies, risk isolation, invoicing, or enterprise operating models.

## Source

- [Video](https://www.youtube.com/watch?v=NOOhDq1JyIM)
- [transcript.md](./transcript.md)
