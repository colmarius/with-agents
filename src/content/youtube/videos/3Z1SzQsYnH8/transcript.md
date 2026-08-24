---
title: "Setting up cost controls for BigQuery"
sourceUrl: "https://www.youtube.com/watch?v=3Z1SzQsYnH8"
videoId: "3Z1SzQsYnH8"
capturedAt: "2026-08-24T21:54:34.512Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 138
---

## Transcript

[00:00:01] [Music] BigQuery can process enormous amounts of data adding cost controls can protect you from runaway queries whether you have multiple BigQuery projects and users or it's just you you can manage costs by setting a custom quota that specifies a limit on the amount of query data processed per day this video will take you through the process of establishing your own custom quotas you may set quotas to control costs at the project level or at the user level project level custom quotas limit the aggregate usage of all users in that project while user level custom quotas are separately applied to each user or service account within a project you may use either of these quota options or both in tandem used in tandem usage will count against both quotas and adhere to the stricter of the two limits an example scenario can be found at the documentation linked below start by navigating to the quotas menu in the IAM and Admin console make sure you have the right project selected

[00:01:06] filter the quotas for the BigQuery API service check the box for query usage per day and or query usage per day per user and click edit quotas set your email and phone number these contact details may be used when processing certain quota requests enter your daily quotas in tebibytes notice that the quotas are in tebibytes so be sure to make any necessary conversions click done and then click submit request review the changes and click confirm quota changes should take effect within a few minutes once the quotas are set if project level or user level custom quotas are exceeded BigQuery returns an error daily quotas reset at midnight Pacific time for more information on custom quotas please visit the documentation and FAQs linked below happy analyzing [Music]
