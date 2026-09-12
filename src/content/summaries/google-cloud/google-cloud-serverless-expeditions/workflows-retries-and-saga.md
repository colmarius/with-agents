---
title: "Retries and Saga pattern in Workflows"
resourceId: 59
date: "2023-05-18"
collection: "google-cloud-serverless-expeditions"
order: 7
videoId: "yqMKr37mGJw"
---

An order can be created successfully even when the next step—reserving the customer's credit—fails. In this May 2023 demonstration, Mete uses Google Cloud Workflows to coordinate those steps, retry temporary failures, and cancel the pending order when credit cannot be reserved.

### Key points

- **Put call order in a workflow:** Instead of having the order service call the customer service directly, an orchestrator calls each in sequence: create a pending order, reserve credit, then approve the order. Mete argues that separating this sequence from the services makes them less dependent on one another's implementation [00:00–02:08](https://www.youtube.com/watch?v=yqMKr37mGJw&t=0s).
- **Retry temporary errors, not an impossible business operation:** The demo applies the Workflows default retry policy to an intermittently failing HTTP call. A temporary outage may clear on another attempt; a customer with insufficient credit needs a different response because retries will not supply that credit [02:08–04:15](https://www.youtube.com/watch?v=yqMKr37mGJw&t=128s).
- **Compensate for work already completed:** The Saga pattern adds a later action that undoes an earlier one when the whole operation cannot finish. Here, failure to reserve credit cancels the pending order; success approves it. Mete calls this eventual consistency: when one database transaction cannot cover all services, later steps restore a consistent outcome rather than making every step succeed together [04:15–06:29](https://www.youtube.com/watch?v=yqMKr37mGJw&t=255s).

Full video: <https://www.youtube.com/watch?v=yqMKr37mGJw>
