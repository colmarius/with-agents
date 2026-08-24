---
title: "How to use Cloud Anomaly Detection - Getting Started with Cloud Security Command Center"
sourceUrl: "https://www.youtube.com/watch?v=n70BdI7apXI"
videoId: "n70BdI7apXI"
capturedAt: "2026-08-24T21:34:04.841Z"
channel: "Google Cloud Tech"
language: "en"
kind: "caption"
durationSeconds: 208
---

## Transcript

[00:00:00] [MUSIC PLAYING] SPEAKER: Cloud Anomaly Detection is a built-in Cloud Security Command Center service. It uses behavioral signals from outside your system, and displays granular information about security anomalies detected for your projects and virtual machine instances, like potential leaked credentials, unusual activity, and coin mining. To view findings in the Cloud SCC dashboard, you need to enable the Scanner from security sources. Cloud Anomaly Detection findings are then automatically available, and will be displayed in Cloud SCC. To enable a security source, you need to have the Organization Administrator Cloud IAM role. Then go to the GCP console, Security Command Center page. Click Settings at the top right, and then select the Security Sources tab.

[00:00:50] Under Enabled, click to enable a security source, such as Cloud Anomaly Detection. The security sources you select here will display as cards on the Cloud SCC dashboard, and these cards contain findings. If you return to the dashboard, you can see current findings as types of anomalous detections. Leaked service account credentials are GCP service account credentials that are accidentally leaked online or compromised. Possible data exfiltration is a sudden change in behavior, such as a significant data egress from a VM to a previously unseen IP address range. Resource used for outbound intrusion are intrusion attempts and port scans. One of the resources or GCP services in your organization is being used for intrusion activities, like an attempt to break in or compromise a target system. These include SSH brute force attacks, port scans, and FTP brute force attacks.

[00:01:42] Potential compromised machine is a potential compromise of a resource in your organization. Resource used for cryptomining means behavioral signals around a VM in your organization indicate that it might have been compromised and could be getting used for cryptomining. Drilling in, you can see unusual activity/connection, which is unusual activity from a resource in your organization, and resource used for phishing, meaning one of the resources or GCP services in your organization is being used for phishing. We can see there's a coin mining detection in here. Click on the detection to see more details. We see resource_involved_in_coin_mining was first discovered back in March 1 against this particular project, scc demo company it demo. Under Attributes, you can see details about the compromised instance.

[00:02:32] Under Source Properties, you can find information about the event time, March 1, and the source URL, stratum.aikapool.com. The resource was being abused through this publicly available IP. How can we figure out what's going on? First, we can go back in time to go to March 1. We know the project in question. So let's take a look for the details around that project. We can see there are audit logs that have been triggered, which we can explore further. Anomaly Detection found the resource that originally triggered the coin mining detection, which we can drill into, and remediate by removing the resource or public IP and adding new firewall rules. Congratulations. You've enabled Anomaly Detection and learned how to respond to a finding from it. [MUSIC PLAYING]
