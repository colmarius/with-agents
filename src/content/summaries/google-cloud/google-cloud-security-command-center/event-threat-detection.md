---
title: "How to use Event Threat Detection - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-25"
collection: "google-cloud-security-command-center"
order: 3
videoId: "0f5Dh8cGbyQ"
---

Event Threat Detection examines system logs for signs of attacks or risky permission changes. This 2019 walkthrough investigates an external account receiving broad access, then describes sending selected events to Splunk for further analysis.

### Key Points Covered

- **Different threats leave different log patterns**: Repeated failed SSH sign-ins followed by success can indicate a password-guessing attack. Network logs showing connections to known malicious domains can indicate cryptocurrency mining or malware. Event Threat Detection turns these signals into findings in Security Command Center [00:04–01:08](https://www.youtube.com/watch?v=0f5Dh8cGbyQ&t=4s).
- **Investigate both sides of a risky permission change**: The example flags an external Gmail account receiving the editor role. The presenter then filters by the account that granted access to find its other actions and affected projects before proposing permission restrictions. The flag is a reason to investigate, not by itself proof of compromise [01:08–03:03](https://www.youtube.com/watch?v=0f5Dh8cGbyQ&t=68s).
- **Export selected events for further analysis**: The presenter says forwarding only high-value incidents can reduce the time and cost of analysis in Splunk, a security-log analysis system. The path described uses a connector for processed log output; it does not establish an automatic export of all Security Command Center findings [02:12–03:03](https://www.youtube.com/watch?v=0f5Dh8cGbyQ&t=132s).

Full video: <https://www.youtube.com/watch?v=0f5Dh8cGbyQ>
