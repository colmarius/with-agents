---
title: "Cloud Run Principle of Least Privilege"
resourceId: 59
date: "2024-05-23"
collection: "google-cloud-serverless-expeditions"
order: 9
videoId: "bIL8Gb3D8Yg"
---

Restricting who can call a Cloud Run service does not restrict what the service itself can do. Martin and JK demonstrate least privilege for that second boundary: giving the running application its own service account, with only the database permissions it needs.

### Key points

- **Permissions limit the damage code can cause:** JK warns that the default account in the May 2024 setup had broad permissions. A malicious dependency, a developer mistake, or a compromised service could therefore delete data or create expensive resources unrelated to the application's job [01:04–02:07](https://www.youtube.com/watch?v=bIL8Gb3D8Yg&t=64s).
- **Separate the identity from its permissions:** The presenters first assign a new service account with no privileges; the Firestore request then fails. They create a role allowing reads and writes but not deletes, grant it to that account, and show the service reading records successfully [02:07–07:23](https://www.youtube.com/watch?v=bIL8Gb3D8Yg&t=127s).
- **Custom roles are not automatically preferable:** The presenter recommends a predefined role when one fits and uses a custom role only because the example needs a narrower operation set [03:09–04:12](https://www.youtube.com/watch?v=bIL8Gb3D8Yg&t=189s).
- **Reuse the setup across teams:** JK proposes Terraform modules—reusable infrastructure definitions—for creating services, accounts, and roles. Platform teams can encode organizational requirements once rather than repeating the console steps for every service [07:23–09:29](https://www.youtube.com/watch?v=bIL8Gb3D8Yg&t=443s).

Full video: <https://www.youtube.com/watch?v=bIL8Gb3D8Yg>
