---
title: How to protect your company from cyberattacks
resourceId: 68
date: 2022-02-28
collection: google-cloud-architecting
order: 10
videoId: "-4Ci-zs2bwE"
---

An employee may be authorized to use an application while their computer is compromised. Palo Alto Networks' Google Cloud alliance technical lead Mason describes a 2022 integration designed to make access depend on the device's reported security state, not just the user's identity. The Cortex XDR Endpoint Verification integration was in private preview at the time. [04:15–05:17](https://www.youtube.com/watch?v=-4Ci-zs2bwE&t=255s), [10:33–11:34](https://www.youtube.com/watch?v=-4Ci-zs2bwE&t=633s)

### Key Points Covered

- **Endpoint protection supplies the signal.** Cortex XDR's software agent runs on employee devices to detect or block malicious activity and produce alerts. Mason describes local file analysis followed, when needed, by analysis in the WildFire security sandbox. [05:17–07:22](https://www.youtube.com/watch?v=-4Ci-zs2bwE&t=317s)
- **The first release used three checks.** A device needed the Cortex XDR agent, could not be marked as isolated by a security administrator, and needed an alert-derived health score that met a configured threshold. Incident information was planned for a later release. [07:22–09:30](https://www.youtube.com/watch?v=-4Ci-zs2bwE&t=442s)
- **A separate integration turns device state into access policy input.** A Cloud Function calls the Cortex XDR API and updates Google's endpoint management. Context-aware access policies can then use that state to restrict access to cloud resources, Workspace, and other applications. Mason presents this as a way to contain damage from a compromised device, alongside the agent's protection on the device itself. [08:26–11:34](https://www.youtube.com/watch?v=-4Ci-zs2bwE&t=506s)

Full video: <https://www.youtube.com/watch?v=-4Ci-zs2bwE>
