---
addedDate: '2026-08-24'
title: "Resource Access Control IAM Roles and Permissions"
resourceId: 64
date: "2019-05-20"
collection: "google-cloud-get-started"
order: 4
videoId: "Sdt-i-Q7tyA"
---

Identity and Access Management (IAM) connects an identity to the actions it may perform through a role. This example grants one account access to Cloud Storage, tests that access, then removes it and checks that access is denied. [00:00–01:10](https://www.youtube.com/watch?v=Sdt-i-Q7tyA&t=0s)

### Key Points Covered

- The Storage Admin role gives the added account control over Cloud Storage resources, so it can view, modify, or delete the stored photo. [00:00–00:53](https://www.youtube.com/watch?v=Sdt-i-Q7tyA&t=0s)
- The first access attempt still fails because the permission change has not finished propagating. After a short wait and reload, the photo becomes visible. [00:00–00:53](https://www.youtube.com/watch?v=Sdt-i-Q7tyA&t=0s)
- After the account is removed from the IAM list, reloading the storage browser as that account returns a permissions error, because it is no longer allowed to view storage resources. [00:00–01:10](https://www.youtube.com/watch?v=Sdt-i-Q7tyA&t=0s)

Full video: <https://www.youtube.com/watch?v=Sdt-i-Q7tyA>
