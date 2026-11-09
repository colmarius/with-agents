---
addedDate: '2026-08-24'
title: "How to use Cloud Security Scanner - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-11"
collection: "google-cloud-security-command-center"
order: 1
videoId: "goJ_G2ygdSA"
---

Web Security Scanner tests a running application for common vulnerabilities by following links and exercising inputs. This 2019 walkthrough shows how to schedule a scan and investigate its results in Security Command Center (SCC).

### Key Points Covered

- **Create a scan configuration before running it**: The presenter selects an application URL, saves a weekly schedule, and opens the configuration page, where scan history and run, edit, and delete controls were available [00:50](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=50s).
- **Scans can take minutes or many hours**: A configured scan waits in a queue, then follows links within the starting URLs' scope and exercises user inputs and event handlers. Runtime depends on system load and on the site's complexity, actionable elements per page, number of links, and amount of JavaScript [00:50–01:49](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=50s).
- **Scanner results and SCC findings are distinct views**: After execution, the scanner shows its own results page. Separately, enabled scanner data appeared as Security Command Center findings on the scanner card and organization findings view [01:49–02:41](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=109s).
- **Use finding details to reproduce the problem**: The example opens a cross-site-scripting finding with information for locating and reproducing the issue. The scanner also shows a result page for an application with no detected vulnerabilities; that is not proof the application is vulnerability-free [01:49–03:21](https://www.youtube.com/watch?v=goJ_G2ygdSA&t=109s).

Full video: <https://www.youtube.com/watch?v=goJ_G2ygdSA>
