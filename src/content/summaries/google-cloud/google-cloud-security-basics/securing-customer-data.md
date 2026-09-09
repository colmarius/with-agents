---
title: "Securing customer data"
resourceId: 57
date: "2020-04-14"
collection: "google-cloud-security-basics"
order: 5
videoId: "qR-HMOcJC8c"
---

This episode describes provider controls for customer data at rest and in transit, including tenant isolation, restricted employee access, encryption, routing, and service-to-service controls.

### Key Points Covered

- **Provider policies complement technical isolation**: The video makes 2020 claims about logical tenant isolation, restricted employee access, deletion, portability, advertising scans, and sale of customer data [01:03–02:08](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=63s).
- **At-rest protection has layers**: Storage services are described as configurable with centrally managed keys for application-layer encryption, alongside lower-level hardware protections [02:08–03:11](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=128s).
- **Network design can reduce exposure**: Google's network and front-end servers are presented as limiting public-internet hops and filtering malicious traffic [02:08–03:11](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=128s).
- **Service communication should not trust the path alone**: Cryptographic RPC, inter-service encryption, firewalls, and access-control lists add isolation even if a network device is compromised [03:11–04:17](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=191s).
- **Customers still own their controls**: These provider protections do not remove customer responsibility for identities, classification, key policy, workloads, configuration, monitoring, and application authorization [04:17–05:19](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=257s).
- **Treat this as dated guidance**: This is a 2020 explanation; verify current Google Cloud privacy, encryption, networking, IAM, defaults, products, UI, pricing, and incident-response documentation.

Full video: <https://www.youtube.com/watch?v=qR-HMOcJC8c>
