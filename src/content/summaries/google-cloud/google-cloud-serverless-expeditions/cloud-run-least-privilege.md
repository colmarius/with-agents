---
title: "Cloud Run Principle of Least Privilege"
resourceId: 59
date: "2024-05-23"
collection: "google-cloud-serverless-expeditions"
order: 9
videoId: "bIL8Gb3D8Yg"
---

The presenters separate who may invoke a Cloud Run service from what that service may do after it starts. Their worked example focuses on the second boundary: a dedicated runtime identity with only the Firestore operations the application needs.

### Key points

- **Runtime permissions limit blast radius:** One presenter warns that the then-default Compute Engine runtime account had broad permissions, increasing the impact of malicious dependencies, developer mistakes, or a compromised service [00:01:04]-[00:02:07]. This is a point-in-time statement about 2024 defaults.
- **The demo tests a narrow identity:** The presenters create a dedicated service account and a custom role that permits Firestore reads and writes but not deletes, first showing that the service fails before the permissions are granted [00:02:07]-[00:06:19].
- **Custom roles are not automatically preferable:** The presenter recommends a predefined role when one fits and uses a custom role only because the example needs a narrower operation set [00:03:09]-[00:04:12].
- **Consistency can be encoded, but still maintained:** The presenter suggests Terraform modules through which platform teams can provision Cloud Run services, accounts, and roles under organizational policy [00:07:23]-[00:08:28].

Verify current Cloud Run default identities, IAM permissions, console paths, and Terraform resources. Least privilege also requires role lifecycle, monitoring, organization policy, and tests that intended denied operations remain denied.

Full video: <https://www.youtube.com/watch?v=bIL8Gb3D8Yg>
