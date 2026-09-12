---
title: "Infrastructure as code with Terraform and Cloud Run"
resourceId: 59
date: "2021-04-08"
collection: "google-cloud-serverless-expeditions"
order: 10
videoId: "Ce93fpQrKCk"
---

Long deployment checklists are easy to follow inconsistently. This April 2021 introduction explains infrastructure as code: describing the resources a deployment needs in a machine-readable Terraform configuration, so teams can repeat the setup without manually recreating every step.

### Key points

- **Describe the result instead of every command:** The comparison starts with a `gcloud` command that fails when repeated because the bucket already exists. Terraform instead declares the desired result—a bucket exists—and checks whether changes are needed. The example does not explain how Terraform tracks managed resources, so it should not be read as showing automatic adoption of any existing bucket [01:03–03:13](https://www.youtube.com/watch?v=Ce93fpQrKCk&t=63s).
- **One configuration can describe intentional differences:** HashiCorp Configuration Language (HCL) supports variables such as a project ID or a smaller database size for testing. Terraform also works out dependencies: a bucket needed by a service must exist first, while independent resources can be created in parallel [02:07–04:16](https://www.youtube.com/watch?v=Ce93fpQrKCk&t=127s).
- **Build the application before deploying its infrastructure:** In the workflow described, Terraform expects the container or compiled code to exist already. Teams can run it after their build process or include it as a step in Cloud Build, keeping the infrastructure configuration alongside application code in source control [03:13–05:22](https://www.youtube.com/watch?v=Ce93fpQrKCk&t=193s).

Full video: <https://www.youtube.com/watch?v=Ce93fpQrKCk>
