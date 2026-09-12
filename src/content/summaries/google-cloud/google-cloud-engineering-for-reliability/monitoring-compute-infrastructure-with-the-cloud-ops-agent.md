---
title: "Monitoring compute infrastructure with the Cloud Ops Agent"
resourceId: 63
date: "2021-09-22"
collection: "google-cloud-engineering-for-reliability"
order: 11
videoId: "Fzd6WP0_bWM"
---

The system hosting a virtual machine knows how much memory it allocated to that VM, but not how much the operating system inside it is using. The Ops Agent runs inside the VM to collect that missing information, along with process measurements and logs ([00:00–04:26](https://www.youtube.com/watch?v=Fzd6WP0_bWM&t=0s)).

### Key Points Covered

- **Install once, then inspect the added data**: After manually installing the agent on one VM, the presenter checks its reported version and opens views of memory, disk, running processes, and logs. These show what the VM is doing beyond the host's infrastructure measurements ([01:03–04:26](https://www.youtube.com/watch?v=Fzd6WP0_bWM&t=63s)).
- **Apply one policy to many VMs**: The 2021 demonstration uses an agent policy to select machines by operating system, version, and zone, then install and automatically upgrade their agents ([04:26–05:31](https://www.youtube.com/watch?v=Fzd6WP0_bWM&t=266s)).
- **Put the policy in code and verify its effect**: Terraform records which agent to install, whether to upgrade it automatically, and which VMs it covers. The presenter validates and applies the configuration, then checks both that the policy exists and that the selected VMs actually received the agent ([05:31–06:34](https://www.youtube.com/watch?v=Fzd6WP0_bWM&t=331s)).

Full video: <https://www.youtube.com/watch?v=Fzd6WP0_bWM>
