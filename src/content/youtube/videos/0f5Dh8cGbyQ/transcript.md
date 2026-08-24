---
title: "How to use Event Threat Detection - Getting Started with Cloud Security Command Center"
sourceUrl: "https://www.youtube.com/watch?v=0f5Dh8cGbyQ"
videoId: "0f5Dh8cGbyQ"
capturedAt: "2026-08-24T21:34:07.985Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 183
---

## Transcript

[00:00:04] event threat detection ETD is a service within cloud security command center it uses log data from inside your systems and watches your organization's stackdriver logging stream for one or more projects and consumes logs as they become available when a threat is detected ETD writes of finding two cloud SCC and to a logging project will focus on the ETD findings that are available in cloud SCC once configured it will appear as a card on the dashboard ETD can quickly detect a number of high-risk and costly threats brute force ssh ETD detects the brute force of ssh by examining Linux off logs for repeated failures followed by success crypto mining ETD detects coin mining malware by examining VPC logs for connections to known bad domains for mining poles and other log data cloud I am abuse malicious grants ETD detects the addition of accounts from outside of your organization's domains that are given owner or editor permission at the organization or project level malware ETD detects malware in a similar fashion

[00:01:08] to crypto mining as it examines VPC logs for connections to known bad domains and other log data outgoing DDoS port scanning ETD detects DDoS attacks originating inside your organization by looking at the sizes types and numbers of VPC flow logs outgoing DDoS is a common use of compromised instances and project by attackers port scanning is a common indication of an attacker getting ready for lateral movement in a project in our environment we can see the top items in the high priority category that we should be addressing event threat detection has found many persistent IAM anomalous grants let's look at one of them we're able to see what the event was when it occurred and what source the data came from it flagged it as a high priority and the action taken was an ad of this gmail user with the editor I am role we also know the culprit next we can filter further by the person who granted this I am roll this uncovers other actions this account took with his access and the projects it was done in next we can continue to pivot on either

[00:02:12] the user or project to do further detections and restrict this users permissions to further investigate a threat detected by event threat detection I can send my logs to a seem like Splunk because event threat detection has already processed my logs I can save time and money by sending only high-value incidents to my seem to export these logs you can use a Splunk connector within Splunk you can see events in categories Splunk automatically sorts your key issues allowing you to investigate further and follow the steps that are prescribed congratulations you've enabled event threat detection and learn how to respond to a finding from it you
