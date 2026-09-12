---
title: "Securing your hardware for your software"
resourceId: 57
date: "2020-04-28"
collection: "google-cloud-security-basics"
order: 6
videoId: "SwT_CHMh6g8"
---

Securing an application also depends on the machines beneath it: who can touch them, which software they run, and how they separate virtual machines. This episode describes Google's 2020 approach to those layers, from data-center access controls to Titan security chips and virtualization hardening.

### Key Points Covered

- **Restrict physical access**: The episode describes access limited to qualified employees, with security badges and biometrics required to reach the data-center floor. These controls address the risk of someone stealing or tampering with a machine [01:05–02:07](https://www.youtube.com/watch?v=SwT_CHMh6g8&t=65s).
- **Custom hardware establishes identity**: The 2020 account describes custom servers and networking equipment plus Titan chips used to identify and authenticate devices [02:07–03:10](https://www.youtube.com/watch?v=SwT_CHMh6g8&t=127s).
- **Titan supplies a hardware basis for trusting software**: The chip gives a machine a strong identity and checks firmware and software integrity. Its tamper-evident logs help reveal changes, including actions by an insider with root access; they are evidence of tampering, not a promise that tampering is impossible [03:10–04:15](https://www.youtube.com/watch?v=SwT_CHMh6g8&t=190s).
- **Separate virtual machines and reduce the code exposed to attack**: Kernel-based Virtual Machine (KVM) lets Linux host multiple isolated VMs. The episode describes Google reviewing and testing KVM, removing unused components such as legacy mouse drivers, and using a simpler custom user-space virtual-machine monitor [04:15–05:20](https://www.youtube.com/watch?v=SwT_CHMh6g8&t=255s).

Full video: <https://www.youtube.com/watch?v=SwT_CHMh6g8>
