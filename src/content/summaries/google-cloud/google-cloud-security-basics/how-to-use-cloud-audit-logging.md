---
addedDate: '2026-08-24'
title: "How to use Cloud Audit Logging"
resourceId: 57
date: "2021-07-03"
collection: "google-cloud-security-basics"
order: 10
videoId: "SaLHDNqrZ80"
---

If someone accesses files they should not, an audit trail helps establish who did what and when. This episode uses a fictional insider-access investigation to explain the different evidence Cloud Audit Logs records, and why collecting it is not the same as detecting suspicious behavior.

### Key Points Covered

- **Audit trails provide investigation evidence**: Logs help identify who accessed or changed resources during active investigations and post-incident analysis [02:06–03:09](https://www.youtube.com/watch?v=SaLHDNqrZ80&t=126s).
- **Choose logs by the activity you need to investigate**: Admin Activity records administrative changes such as creating a VM or changing an identity. Data Access records users creating, changing, or reading data. System Event records configuration changes triggered by Google systems. Policy Denied records access refused because of a security-policy violation [03:09–05:16](https://www.youtube.com/watch?v=SaLHDNqrZ80&t=189s).
- **Data Access logging must be considered before an incident**: In the episode's 2021 account, these logs are optional and off by default because they can store a lot of data. They also cost money, except for BigQuery's Data Access logs. The fictional investigation succeeds because Data Access logging was already enabled [03:09–06:18](https://www.youtube.com/watch?v=SaLHDNqrZ80&t=189s).
- **Collection does not identify malicious intent**: Audit logs have no concept of suspicious events. Teams still need alerts, a process for regularly reviewing logs, and the tools and data to assess a suspicious event once they find one [05:16–06:18](https://www.youtube.com/watch?v=SaLHDNqrZ80&t=316s).
- **Availability is presented as best effort**: The video says audit log records can be delayed by up to five minutes [05:16–06:18](https://www.youtube.com/watch?v=SaLHDNqrZ80&t=316s).

Full video: <https://www.youtube.com/watch?v=SaLHDNqrZ80>
