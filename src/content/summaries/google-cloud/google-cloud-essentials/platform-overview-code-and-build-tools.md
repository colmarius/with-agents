---
title: "Platform overview - Code & build tools"
resourceId: 62
date: "2020-09-13"
collection: "google-cloud-essentials"
order: 6
videoId: "TH_OuqZ1ZKU"
---

Cloud Code helps developers test and debug from their editor; Cloud Build moves builds and deployment into repeatable automation. This overview explains why fast local feedback and a build process independent of any developer's machine serve different needs. [00:00–04:11](https://www.youtube.com/watch?v=TH_OuqZ1ZKU&t=0s)

### Key Points Covered

- Cloud Code brought container development, debugging, and deployment for GKE and Cloud Run into VS Code and IntelliJ. [00:00–01:02](https://www.youtube.com/watch?v=TH_OuqZ1ZKU&t=0s)
- The editor workflow supports starter templates, remote debugging, and continuous deployment to a local Kubernetes cluster. Developers can inspect resources and stream application logs without leaving the editor. [01:02–03:08](https://www.youtube.com/watch?v=TH_OuqZ1ZKU&t=62s)
- Cloud Build describes tasks in a configuration file and runs each step in a container. Those steps can fetch dependencies, run tests, create application packages or images, and deploy them, reducing dependence on differences between developer machines. [03:08–04:11](https://www.youtube.com/watch?v=TH_OuqZ1ZKU&t=188s)
- A **builder** is a container image supplying the tool for a build step. Builds can start from a command, an API call, or repository events such as a push or pull request; the same mechanism can also run infrastructure tools such as Terraform. [04:11–05:13](https://www.youtube.com/watch?v=TH_OuqZ1ZKU&t=251s)

Full video: <https://www.youtube.com/watch?v=TH_OuqZ1ZKU>
