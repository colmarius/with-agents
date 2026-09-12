---
title: "Top 3 access risks in Cloud Security"
resourceId: 57
date: "2020-02-19"
collection: "google-cloud-security-basics"
order: 2
videoId: "IHBoUADMrHc"
---

Access security is more than checking a password: it also limits which resources a user can reach and which devices they can use. This 2020 episode explains how network protection, sign-in checks, and application policies work together.

### Key Points Covered

- **Access risk is broader than stolen passwords**: The examples include phishing, man-in-the-middle interception, denial-of-service attacks, and accidental or malicious use of excessive permissions [01:04–02:10](https://www.youtube.com/watch?v=IHBoUADMrHc&t=64s).
- **Protect the connection and service**: The episode explains that TLS encrypts traffic and requires a server to prove its identity, making interception harder. Load balancers report traffic to a central denial-of-service detection service, which can tell them to drop or slow attack traffic [02:10–03:13](https://www.youtube.com/watch?v=IHBoUADMrHc&t=130s).
- **Require more than a stolen password**: Sign-in checks consider whether a device or location is familiar. A hardware security key adds something the user must physically possess, rather than another secret an attacker could obtain through phishing [03:13–04:15](https://www.youtube.com/watch?v=IHBoUADMrHc&t=193s).
- **Control what an authenticated user can reach**: The example puts Identity-Aware Proxy in front of a legacy application to require membership in an approved group or domain with little application-code change. Endpoint policies add device requirements, so a valid identity alone need not be enough for access [04:15–06:22](https://www.youtube.com/watch?v=IHBoUADMrHc&t=255s).

Full video: <https://www.youtube.com/watch?v=IHBoUADMrHc>
