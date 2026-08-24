---
title: "Virtual Private Cloud in a minute"
resourceId: 66
date: "2021-07-12"
collection: "google-cloud-bytes"
order: 10
videoId: "hS_uvz4ohbo"
---

The source names neither its presenter nor an affiliation. This 2021 primer presents Virtual Private Cloud (VPC) as the network-topology and connectivity layer for Google Cloud resources, not as a complete security system.

### Key Points Covered

- **Network scope and subnet scope differ**: The primer describes a globally scoped VPC with regional subnets and internal communication that does not traverse the public internet [00:00:00].
- **Sharing has an explicit qualification**: VPCs are presented as shareable across projects and, in some cases, organizations so isolated projects can use common private address space [00:00:00].
- **Hybrid connectivity has several paths**: The 2021 options include Dedicated or Partner Interconnect, Cloud VPN, and partner-supported SD-WAN, while Packet Mirroring is presented for traffic inspection [00:00:54]-[00:01:53].

Use this as historical networking orientation, not a topology or security recommendation. Verify current Shared VPC boundaries and roles, routing, firewall policy, subnet constraints, hybrid products, default-network behavior, quotas, and limits in current documentation.

Full video: <https://www.youtube.com/watch?v=hS_uvz4ohbo>
