---
title: "Cloud Functions vs. Cloud Run"
resourceId: 59
date: "2020-10-15"
collection: "google-cloud-serverless-expeditions"
order: 1
videoId: "zRjOSxTpC3A"
---

This episode compares two serverless execution models through a fictional wildlife-camera system. The useful foundation is to choose from the workload's trigger, packaging, protocol, and rollout needs—not from the “serverless” label alone.

### Key points

- **An event handler fits the image pipeline shown:** A finalized Cloud Storage upload invokes a function, which calls the Vision API, filters detected labels, and writes selected sightings to Firestore [00:01:04]-[00:06:22]. The presenters favor a function because the 2020 platform connected that storage event with less setup.
- **A container fits the REST API requirements shown:** The second workload needs an HTTP server, container packaging, revision traffic splitting, and a custom domain, so the presenters choose Cloud Run and configure the Express server and port themselves [00:08:30]-[00:10:36].
- **The rollout is a demonstration, not a general result:** The presenters build and deploy a container with the then-current CLI and registry flow, allow unauthenticated access, and use the console to send 10% of traffic to a new revision [00:12:45]-[00:18:02].

This is an October 2020 product comparison. Cloud Functions has since converged into Cloud Run functions, and the runtimes, registry, commands, domain mapping, and service boundaries shown are historical rather than a current selection matrix. Verify today's documentation, and separately design authentication, idempotency, retries, and partial-failure handling.

Full video: <https://www.youtube.com/watch?v=zRjOSxTpC3A>
