---
title: "How to use Cloud Security Scanner - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-11"
collection: "google-cloud-security-command-center"
order: 1
videoId: "goJ_G2ygdSA"
---

This 2019 walkthrough shows how Web Security Scanner was configured and run, then how its output appeared in the then-current Security Command Center experience.

### Key Points Covered

- **Create a scan configuration before running it**: The presenter selects an application URL, saves a weekly schedule, and opens the configuration page, where scan history and run, edit, and delete controls were available [00:50](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=50s).
- **Execution can be slow and scope-dependent**: A configured scan enters a queue, then explores links and exercises inputs and event handlers; application complexity, links, JavaScript, actionable elements, and service load can extend runtime [00:50–01:49](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=50s).
- **Scanner results and SCC findings are distinct views**: After execution, the scanner shows its own results page. Separately, enabled scanner data appeared as Security Command Center findings on the scanner card and organization findings view [01:49–02:41](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=109s).
- **Finding detail supports investigation, not assurance**: The example opens a cross-site-scripting finding with information for locating and reproducing the issue; a scan with no detected vulnerabilities does not prove the application is vulnerability-free [01:49–02:41](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=109s).

This is a historical 2019 workflow. Current users should verify current Google Cloud documentation for product names, roles, APIs, UI, scanner coverage, setup, defaults, integrations, and remediation guidance.

Full video: <https://www.youtube.com/watch?v=goJ_G2ygdSA>
