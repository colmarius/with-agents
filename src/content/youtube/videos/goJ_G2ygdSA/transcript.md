---
title: "How to use Cloud Security Scanner - Getting Started with Cloud Security Command Center"
sourceUrl: "https://www.youtube.com/watch?v=goJ_G2ygdSA"
videoId: "goJ_G2ygdSA"
capturedAt: "2026-08-24T21:22:57.846Z"
channel: "Google Cloud Tech"
language: "en"
kind: "caption"
durationSeconds: 201
---

## Transcript

[00:00:00] [MUSIC PLAYING] SPEAKER: Cloud App Security Scanner is a free security tool that's built into the Cloud Security Command Center. It can automatically scan and detect key vulnerabilities in App Engine, Compute Engine, and Google Kubernetes engine applications before deploying them to production. Before you begin, have an app running. And make sure the account you're logged into is an owner or developer of the application to be scanned. In the Google Cloud Platform console, visit the Cloud Security Command Center page, select an organization, and click Next. Select the Cloud Security Web Scanner from the menu on the left. Select a project in the pop-up that appears. If you haven't enabled the Web Security Scanner API before, you will be prompted to do so before continuing. You are now in the Cloud Security Web Scanner page.

[00:00:50] This page allows you to create, save, and run a scan. Click Create Scan to display the new scan form. For now, add in the URL of the application you would like to test and schedule the scan to run weekly. Click Save to create the scan. Click the scan name to go to the scan's config page, where you will find more information about the scan. its history, and some controls for running, editing, or deleting the scan. Click Run to schedule the scan. The scan is placed in a queue and there might be a delay before it runs. It can take several minutes, or many hours, to run, depending on the system load and features like site complexity, number of actionable elements per page, number of links, and the amount of JavaScript, including navigation. Cloud Security Scanner will automatically [INAUDIBLE] your application following all the links within the scope of the starting URLs and attempt to exercise as many user inputs and event handlers as possible.

[00:01:49] The scanner tends to identify many common web vulnerabilities on this page, including cross-site scripting, flash injection, mixed content, and outdated or insecure libraries. After the scan runs to completion, the scan will display a results page when it completes, such as the following, if no vulnerabilities were detected. You can also find vulnerabilities by navigating to the Cloud Security Scanner card on the Cloud Security Command Center Overview dashboard, like in this example from another application. Cloud Security Command Center is where you will find an overview of your organization's security posture. Cloud Security Scanner will show up here, once you turn it on, under the security sources. The Cloud Security scanner card will show an overview of the current number of findings. Click View All Findings to see the full list of vulnerabilities it found.

[00:02:41] You can also click on a finding to bring up more information about it. If you click on this, cross-site scripting callback error, for instance, a bubble will display information about the finding, including information to track it down and, in this case, to even reproduce the error. You just completed a scan using Cloud Security Scanner. You can now set up and run on demand, immediate, or scheduled security scans for your own application from the Google Cloud Platform Console. [MUSIC PLAYING]
