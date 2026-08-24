---
title: "Getting Started with Security Health Analytics"
sourceUrl: "https://www.youtube.com/watch?v=L5nR0KPtn-Y"
videoId: "L5nR0KPtn-Y"
capturedAt: "2026-08-24T21:34:13.974Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 169
---

## Transcript

[00:00:04] security health analytics is a native scanner in cloud security command center it assesses the overall security state and activity of your virtual machines containers network storage and Identity and Access Management policies you can see a list of common vulnerabilities such as public storage buckets open firewall ports state encryption keys or deactivated security logging to enable security health analytics you must have the organization administrator cloud Identity and Access Management role or the security center I am role when you're finished adding roles click Save after heading to your cloud SCC dashboard go to settings in the upper right then the security sources tab and toggle on security health analytics then you can find the security health analytics card listing current findings currently in our environment there are three thousand-plus findings you can see examples of the types of findings by security health analytics like firewall rules that are configured to be open to public access cloud storage buckets that are publicly accessible instances

[00:01:09] configured with public IP addresses instances with SSL not being enforced or resources where the web UI isn't enabled you can find a full list of vulnerabilities in the documentation drilling in you can filter and view vulnerability findings in many different ways like filtering on a specific finding type source type or findings changed each finding provider might also provide additional filters you can also filter in the search bar for specifics like resource name security health analytics can automatically detect common vulnerabilities and miss configurations across a multitude of GCP products with more being added in the vulnerabilities dashboard you can see a summary of the findings the recommendation and severity level let's check out no root password findings drilling in you can see a short description of the issue including the asset affected and what it was detected by under attributes you can see when it was most recently seen when it was first found and the source URI the recommendation tells us to complete

[00:02:13] three simple to resolve this finding you can easily head to the link which actually takes you to the resource to fix the issue in a new tab at the resource all you need to do is follow the recommendations and click Save here I'm adding a password for the root user on this cloud sequel instance congratulations you have enabled security health analytics and learn how to respond to a finding from it [Music]
