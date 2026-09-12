---
title: "Securing customer data"
resourceId: 57
date: "2020-04-14"
collection: "google-cloud-security-basics"
order: 5
videoId: "qR-HMOcJC8c"
---

Customer data needs protection both at rest—while stored—and in transit—while moving between systems. This episode describes Google's 2020 approach: separate customers' data, encrypt it at multiple layers, and restrict communication between services.

### Key Points Covered

- **Shared hardware does not mean shared data access**: The episode says Google logically separates customers' data even on the same physical server and restricts employee access to a small group. It also states provider policies against scanning customer data for advertising or selling it; these are the video's 2020 assurances [01:03–02:08](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=63s).
- **Encrypt before writing to physical storage**: The episode describes storage services using centrally managed keys for application-layer encryption. That layer protects against threats below it, such as malicious disk firmware, while hardware encryption adds another layer [02:08–03:11](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=128s).
- **Network design can reduce exposure**: Google's network and front-end servers are presented as limiting public-internet hops and filtering malicious traffic [02:08–03:11](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=128s).
- **Protect service calls even if the network is compromised**: Google's remote procedure call (RPC) mechanisms use cryptography to keep data private, detect changes, and verify the communicating parties. The episode explains that encrypted inter-service traffic need not rely on the network path alone remaining secure [03:11–04:17](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=191s).
- **Restrict which servers can communicate**: Google Front Ends can contact only an allowed set of internal servers. Firewalls and access-control lists add network separation around sensitive systems [03:11–04:17](https://www.youtube.com/watch?v=qR-HMOcJC8c&t=191s).

Full video: <https://www.youtube.com/watch?v=qR-HMOcJC8c>
