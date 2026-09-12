---
title: "Service accounts & security"
resourceId: 57
date: "2021-05-13"
collection: "google-cloud-security-basics"
order: 8
videoId: "wEGZXSd4uS4"
---

This episode presents service accounts as dedicated identities for applications and scripts, separating workload access from a person's reusable credentials.

### Key Points Covered

- **Do not make a script depend on a person's credentials**: If automation stores those credentials, anyone who obtains them may use the person's access for something else. Sharing the script can also mean sharing the credentials it needs [01:02–02:04](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=62s).
- **Give applications dedicated identities with limited permissions**: A service account can call APIs without exposing a user's credentials. Administrators control both what it can access and who can use it; the episode recommends reviewing that access regularly [02:04–04:12](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=124s).
- **Attaching an identity avoids distributing a key file**: For Google Cloud workloads, the episode recommends attaching a service account to the resource so the platform handles authentication. Downloading a key instead creates a file whose storage and access must be protected, much like a password [03:08–05:15](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=188s).
- **If keys are unavoidable, handle them deliberately**: Its 2021 advice covers secure storage, avoiding source-control commits, and rotation; this is historical guidance, not a current endorsement of long-lived keys [04:12–05:15](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=252s).
- **Track the identity lifecycle**: Descriptive naming, usage logging, and disabling unused service accounts help reduce forgotten access [05:15–07:22](https://www.youtube.com/watch?v=wEGZXSd4uS4&t=315s).

Full video: <https://www.youtube.com/watch?v=wEGZXSd4uS4>
