---
title: "How to use Cloud DLP - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-10-02"
collection: "google-cloud-security-command-center"
order: 4
videoId: "ra_hnxqBzOc"
---

Cloud Data Loss Prevention (DLP) scans stored data for sensitive information such as credit-card numbers. This 2019 walkthrough sends those results to Security Command Center (SCC), where a finding links back to the storage resource for investigation.

### Key Points Covered

- **Choose what sensitive data to look for**: An information type, or “info type,” is a category such as a name, email address, or credit-card number. DLP uses these categories to define what a scan looks for [02:39–03:27](https://www.youtube.com/watch?v=ra_hnxqBzOc&t=159s).
- **The SCC integration required separate setup**: The demo enables the DLP API and named IAM roles for a repository project in the same organization, then enables DLP Data Discovery as an SCC security source [00:55–02:39](https://www.youtube.com/watch?v=ra_hnxqBzOc&t=55s).
- **Trace a match to the affected data**: Once the integration is enabled, DLP findings appear on the SCC dashboard. The presenter follows a credit-card finding to its bucket and source link, then proposes further BigQuery analysis or contacting the owner to remediate it. A match identifies potentially sensitive data, not by itself a policy violation [02:39–04:02](https://www.youtube.com/watch?v=ra_hnxqBzOc&t=159s).

Full video: <https://www.youtube.com/watch?v=ra_hnxqBzOc>
