---
title: "Securing your hardware for your software"
resourceId: 57
date: "2020-04-28"
collection: "google-cloud-security-basics"
order: 6
videoId: "SwT_CHMh6g8"
---

This episode connects physical data-center controls with hardware identity, verified software, and virtual-machine isolation as parts of one provider assurance chain.

### Key Points Covered

- **Physical security includes system trust**: The scope covers restricted facility access and confidence that physical and virtual systems have a trustworthy root [00:01:05]-[00:02:07].
- **Custom hardware establishes identity**: The 2020 account describes custom servers and networking equipment plus Titan chips used to identify and authenticate devices [00:02:07]-[00:03:10].
- **Titan supports integrity evidence**: The video attributes hardware-root-of-trust, firmware and software integrity checks, machine identity, and tamper-evident logging to Titan; these controls are not an absolute guarantee against tampering [00:03:10]-[00:04:15].
- **Virtualization needs continued hardening**: KVM isolation is supplemented by code review, fuzzing, removal of unused components, and Google's user-space virtual-machine monitor [00:04:15]-[00:05:20].
- **Inherited controls have a boundary**: Provider facility and hypervisor controls do not remove customer responsibility for workload hardening, identities, data, configuration, and monitoring [00:05:20]-[00:06:23].
- **Treat this as dated guidance**: This is a 2020 explanation; verify current Google Cloud architecture, IAM behavior, defaults, products, UI, pricing, assurance evidence, and incident-response guidance.

Full video: <https://www.youtube.com/watch?v=SwT_CHMh6g8>
