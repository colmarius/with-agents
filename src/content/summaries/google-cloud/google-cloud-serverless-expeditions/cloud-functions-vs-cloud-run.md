---
title: "Cloud Functions vs. Cloud Run"
resourceId: 59
date: "2020-10-15"
collection: "google-cloud-serverless-expeditions"
order: 1
videoId: "zRjOSxTpC3A"
---

Martin and Grant compare two ways to run a fictional wildlife-camera system: a function that reacts to uploaded images, and a containerized API that serves animal sightings to web and mobile apps. Their October 2020 comparison explains the choices available then, rather than today's product boundary.

### Key points

- **An event handler fits the image pipeline shown:** A finalized Cloud Storage upload invokes a function, which calls the Vision API, filters detected labels, and writes selected sightings to Firestore [01:04–06:22](https://www.youtube.com/watch?v=zRjOSxTpC3A&t=64s). The presenters favor a function because the 2020 platform connected that storage event with less setup.
- **A container fits the API requirements shown:** The team wants container packaging, a custom domain, and the ability to send only some requests to a new version. The presenters choose Cloud Run and configure an Express HTTP server themselves. Its endpoint looks up an animal in Firestore and returns a sighting or a not-found response [08:30–11:39](https://www.youtube.com/watch?v=zRjOSxTpC3A&t=510s).
- **Traffic splitting limits exposure to a new version:** The presenters deploy the demo API with unauthenticated access, then send 10% of requests to its newest revision and the rest to the previous version. This illustrates a canary release: trying new code on a fraction of traffic before exposing everyone to it [12:45–18:02](https://www.youtube.com/watch?v=zRjOSxTpC3A&t=765s).

Full video: <https://www.youtube.com/watch?v=zRjOSxTpC3A>
