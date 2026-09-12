---
title: "How to run code on Google Cloud"
resourceId: 62
date: "2022-07-29"
collection: "google-cloud-essentials"
order: 2
videoId: "jtPtSVSTb9Y"
---

Choosing where to run code means deciding how much server management to hand to Google and how much control to keep. Ryan's 2022 overview moves from managed application services to configurable virtual machines, with examples of the workloads each serves. [00:00–01:01](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=0s)

### Key Points Covered

- **Client-heavy apps and event handlers need different services.** Firebase supplies features such as authentication and data storage for an app that does most processing on the client. The video's Cloud Functions example instead runs backend code when an event occurs, such as sending a welcome email after account creation. [01:01–02:53](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=61s)
- **An entire application need not be split into functions.** App Engine hosts web and backend applications and adjusts capacity with traffic; Ryan illustrates a retail site scaling up for holiday demand and down afterward. [02:53–03:46](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=173s)
- **Containers offer another choice of control.** In the comparison, Cloud Run manages stateless HTTP containers and scales with requests. Google Kubernetes Engine (GKE) exposes controls over which machines run containers, how they scale, and how clients reach them. [03:46–05:47](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=226s)
- Compute Engine offers direct virtual-machine control and easier less-modified migration, with greater operational responsibility. [05:47–06:50](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=347s)
- One application can combine these services: Ryan's game example uses Firebase for a database, GKE for a game server, and Cloud Functions for email integration. [06:50–07:40](https://www.youtube.com/watch?v=jtPtSVSTb9Y&t=410s)

Full video: <https://www.youtube.com/watch?v=jtPtSVSTb9Y>
