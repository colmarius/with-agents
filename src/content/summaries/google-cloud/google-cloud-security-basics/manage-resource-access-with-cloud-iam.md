---
title: "Manage resource access with Cloud IAM"
resourceId: 57
date: "2021-05-07"
collection: "google-cloud-security-basics"
order: 7
videoId: "LznrFv7iRNI"
---

Google Cloud Identity and Access Management (IAM) controls which people and applications can perform which actions on cloud resources. The episode explains how roles, policies, and groups make access manageable as an organization grows.

### Key Points Covered

- **Access must balance least privilege and timely work**: Manual approval may work at very small scale but becomes unwieldy as organizations and remote teams grow [01:02–02:05](https://www.youtube.com/watch?v=LznrFv7iRNI&t=62s).
- **A role bundles permissions; a policy grants it on a resource**: Permissions define allowed operations. A role collects those permissions, and a policy attached to a resource connects an identity to a role. Resources include VMs, storage buckets, and the projects and folders that organize them [02:05–05:15](https://www.youtube.com/watch?v=LznrFv7iRNI&t=125s).
- **Groups scale assignment**: Granting roles to groups lets membership changes control inherited access instead of repeatedly changing individual grants [04:13–05:15](https://www.youtube.com/watch?v=LznrFv7iRNI&t=253s).
- **Keep group membership in one place**: For organizations with an existing directory such as Active Directory, the episode describes synchronizing group membership rather than maintaining two independent copies. Descriptive group names also help administrators avoid assigning access to the wrong group [05:15–06:18](https://www.youtube.com/watch?v=LznrFv7iRNI&t=315s).

Full video: <https://www.youtube.com/watch?v=LznrFv7iRNI>
