---
title: "Securing customer data"
videoId: qR-HMOcJC8c
sourceUrl: "https://www.youtube.com/watch?v=qR-HMOcJC8c"
publishedAt: "2020-04-14T23:00:22Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter and the Cloud Detective and Bad Actor characters describe provider controls for customer data at rest and in transit. The episode covers logical tenant isolation, restricted employee access, encryption layers, network routing, authenticated service communication, and network access controls.

## Key Ideas

- The episode says customer data is logically isolated, employee access is restricted, data is not used for advertising or sold, deletion is completed within a stated period, and export tools support portability. [00:01:03]-[00:02:08]
- Storage services can use centrally managed keys for application-layer encryption, supplemented by lower-level protections such as hardware encryption. [00:02:08]-[00:03:11]
- Google's network is presented as reducing public-internet hops, with Google Front Ends filtering malicious traffic before data moves through protected internal paths. [00:02:08]-[00:03:11]
- Cryptographic RPC mechanisms, inter-service encryption, firewalls, and access-control lists provide layers that do not rely solely on the network path. [00:03:11]-[00:04:17]

## Practical Implications

- Separate at-rest, in-transit, and service-to-service threat models, then document which encryption keys and network boundaries each uses.
- Require current evidence for provider employee-access, deletion, portability, tenant-isolation, and encryption assurances.
- Treat the 2020 policy claims, architecture descriptions, product terms, and interface assumptions as historical; verify them against current Google Cloud privacy, data-processing, encryption, and networking documentation.

## Questions and Tensions

- Provider controls can protect managed infrastructure without defining the customer's own key policy, data classification, or application-layer authorization.
- The episode states policy and architecture assurances but does not show the audit evidence a customer would use to validate them.

## Source

- [Video](https://www.youtube.com/watch?v=qR-HMOcJC8c)
- [transcript.md](./transcript.md)
