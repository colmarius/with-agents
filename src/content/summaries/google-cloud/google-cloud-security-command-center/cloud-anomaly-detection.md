---
addedDate: '2026-08-24'
title: "How to use Cloud Anomaly Detection - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-18"
collection: "google-cloud-security-command-center"
order: 2
videoId: "n70BdI7apXI"
---

Cloud Anomaly Detection looked for signs that cloud resources were being abused. This 2019 walkthrough follows a possible cryptocurrency-mining alert from Security Command Center (SCC), an organization-wide findings dashboard, to the affected virtual machine and its audit logs.

### Key Points Covered

- **Findings flag unusual behavior that may indicate abuse**: One example is possible data exfiltration: a sudden increase in data leaving a virtual machine for a previously unseen IP address range. Other findings identify leaked credentials or resources apparently being used to attack other systems [00:00–01:42](https://www.youtube.com/watch?v=n70BdI7apXI&t=0s).
- **Findings appear after the source is enabled**: In the then-current UI, an Organization Administrator enabled Cloud Anomaly Detection as a security source in SCC settings. Its card on the SCC dashboard then displayed anomaly findings [00:00–00:50](https://www.youtube.com/watch?v=n70BdI7apXI&t=0s).
- **Follow the finding back to activity**: The presenter uses the coin-mining event's time, destination URL, public IP, and affected project to locate audit logs and the responsible instance. This connects the alert to evidence for investigation; a behavioral signal alone does not prove a breach [01:42–03:28](https://www.youtube.com/watch?v=n70BdI7apXI&t=102s).
- **Containment options follow the investigation**: To remediate, the presenter suggests removing the resource or its public IP and adding new firewall rules. These are response options to weigh against the evidence, not one action that fits every case [02:32](https://www.youtube.com/watch?v=n70BdI7apXI&t=152s).

Full video: <https://www.youtube.com/watch?v=n70BdI7apXI>
