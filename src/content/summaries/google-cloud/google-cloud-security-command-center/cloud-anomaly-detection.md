---
title: "How to use Cloud Anomaly Detection - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-18"
collection: "google-cloud-security-command-center"
order: 2
videoId: "n70BdI7apXI"
---

Cloud Anomaly Detection looked for signs that cloud resources were being abused. This 2019 walkthrough follows a possible cryptocurrency-mining alert from Security Command Center (SCC), an organization-wide findings dashboard, to the affected virtual machine and its audit logs.

### Key Points Covered

- **Unusual behavior provides clues**: One example is possible data exfiltration: a sudden increase in data leaving a virtual machine for a previously unseen IP address range. Other findings identify leaked credentials or resources apparently being used to attack other systems [00:00–01:42](https://www.youtube.com/watch?v=n70BdI7apXI&t=0s).
- **Enablement exposed findings in the SCC dashboard**: In the then-current UI, an Organization Administrator enabled the security source and its cards then displayed anomaly findings [00:00–00:50](https://www.youtube.com/watch?v=n70BdI7apXI&t=0s).
- **Follow the finding back to activity**: The presenter uses the coin-mining event's time, destination URL, public IP, and affected project to locate audit logs and the responsible instance. This connects the alert to evidence for investigation; a behavioral signal alone does not prove a breach [01:42–03:28](https://www.youtube.com/watch?v=n70BdI7apXI&t=102s).
- **Containment follows investigation**: The presenter proposes removing the resource or its public IP and adding firewall rules, but these are response options to assess against the accumulated evidence rather than proof that one action is universally appropriate [02:32](https://www.youtube.com/watch?v=n70BdI7apXI&t=152s).

Full video: <https://www.youtube.com/watch?v=n70BdI7apXI>
