---
title: "Resource Access Control IAM Roles and Permissions"
sourceUrl: "https://www.youtube.com/watch?v=Sdt-i-Q7tyA"
videoId: "Sdt-i-Q7tyA"
capturedAt: "2026-08-24T21:54:28.154Z"
channel: "Google Cloud Tech"
language: "en"
kind: "caption"
durationSeconds: 70
---

## Transcript

[00:00:00] [MUSIC PLAYING] SPEAKER: Let's start with an existing GCP project, then open the IAM page on the GCP console from the top left navigation menu. Up at the top, click Add. Enter the email address for a new person, someone not already in the access list shown. Then you can choose what role to add them to. I'm picking Storage Admin. That will give this account control over Cloud Storage resources. Now, switch to the account you just added. At first, I have no permissions to see storage resources. Permissions are propagating. It just takes a few seconds. After a reload, I can see the photo I stored earlier, because I'm Storage Admin. I can modify or delete the file. If I remove that member from the IAM list, the account loses permissions.

[00:00:53] Reloading the storage browser page, I get a permissions error, because the account no longer is allowed to view storage resources. [MUSIC PLAYING]
