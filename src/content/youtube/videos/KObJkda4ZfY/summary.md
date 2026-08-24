---
title: "Push or Pull Subscriber? - ep. 6"
videoId: KObJkda4ZfY
sourceUrl: "https://www.youtube.com/watch?v=KObJkda4ZfY"
publishedAt: "2020-01-19T17:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Priyanka, whose affiliation is not stated in the transcript, compares push and pull subscriptions across endpoint requirements, load balancing, flow control, efficiency, and serverless operation. The choice is presented as workload-dependent rather than as a universal preference.

## Key Ideas

- Pull clients need authorized API access, while push requires a publicly reachable HTTPS endpoint; push can avoid Pub/Sub client credentials and libraries in the receiving application. [00:00:00]-[00:01:04]
- Pull workers share a subscription and divide messages, whereas push can target a load balancer or let multiple subscriptions fan into one webhook. [00:01:04]-[00:02:07]
- Pull clients control intake and acknowledgement deadlines; push uses server-managed backoff when the endpoint fails or responds slowly. [00:02:07]-[00:03:09]
- The episode favors pull for high-volume, throughput-sensitive, or private-endpoint workloads and push for lightweight webhooks and scale-to-zero services. [00:03:09]-[00:04:12]

## Practical Implications

- Choose delivery mode from endpoint reachability, throughput shape, backpressure ownership, and deployment model.
- Test overload and failure behavior explicitly; changing who initiates delivery does not remove retry or capacity planning.

## Questions and Tensions

- The comparison predates newer Pub/Sub delivery options and current serverless behavior, so concrete recommendations need documentation review.
- A public endpoint can simplify integration while increasing the importance of authentication, request validation, and abuse controls.

## Source

- [Video](https://www.youtube.com/watch?v=KObJkda4ZfY)
- [transcript.md](./transcript.md)
