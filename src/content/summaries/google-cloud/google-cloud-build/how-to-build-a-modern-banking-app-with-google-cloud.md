---
title: "How to build a modern banking app with Google Cloud"
resourceId: 65
date: "2022-03-31"
collection: "google-cloud-build"
order: 2
videoId: "0EBCMNoYvfc"
---

Priyanka Vergadia, identified in the transcript as a Google Cloud developer advocate, presents a 2022 reference architecture for a modular digital bank. Its durable contribution is the capability map; its product and benefit claims remain a presenter snapshot.

### Key Points Covered

- **Reusable APIs replace one-to-one channel links**: Vergadia proposes putting financial capabilities into microservices behind an API layer so partners and front ends do not integrate independently with the core system [01:04–03:11](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=64s).
- **Capabilities come before services**: The model separates customer and partner channels, integration, data platforms, back-office applications, core banking, and cross-cutting infrastructure, security, and operations [03:11–06:23](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=191s).
- **The product map is explicitly a 2022 design**: Vergadia places Apigee at the integration boundary, routes batch and event data through then-current managed services, and proposes event-driven core microservices on GKE with Spanner and Pub/Sub [06:23–10:38](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=383s).
- **Delivery-speed claims are not measurements**: The presentation says a modular platform can shorten product delivery from months or years to days, but supplies no comparative workload or outcome evidence [01:04–03:11](https://www.youtube.com/watch?v=0EBCMNoYvfc&t=64s).

Use this as a historical decomposition exercise, not current banking, compliance, or product guidance. Validate transaction semantics, residency, recovery, regional support, service lifecycle, and every security control against current requirements and documentation.

Full video: <https://www.youtube.com/watch?v=0EBCMNoYvfc>
