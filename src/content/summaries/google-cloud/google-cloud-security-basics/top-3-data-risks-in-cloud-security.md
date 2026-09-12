---
title: "Top 3 data risks in Cloud Security"
resourceId: 57
date: "2020-03-03"
collection: "google-cloud-security-basics"
order: 3
videoId: "QJcRkpzW8Mw"
---

Data can be exposed through excessive access, corrupted by unsafe inputs, or lost in storage and transfer. This 2020 episode explains why securing data requires several controls rather than encryption alone.

### Key Points Covered

- **Know what data exists and where it goes**: The episode highlights sensitive-data exposure, harmful or unsanitized input, lost data, and compromised storage hosts [01:05–02:09](https://www.youtube.com/watch?v=QJcRkpzW8Mw&t=65s).
- **Unsafe input remains dangerous even behind other controls**: The presenter warns that unsanitized input can compromise an application even when its other data-security measures work. The episode also recommends minimizing personally identifiable information (PII), but its blanket advice not to store PII is a simplification, not legal guidance [01:05–02:09](https://www.youtube.com/watch?v=QJcRkpzW8Mw&t=65s).
- **Grant only the access a job needs**: Identity and Access Management (IAM) assigns permissions to specific resources. The example keeps UI developers out of credit-card databases they do not need, reducing both accidental and malicious access. Logging and monitoring then track who accessed what and can alert on suspicious activity [03:15–04:17](https://www.youtube.com/watch?v=QJcRkpzW8Mw&t=195s).
- **Set restrictions centrally**: Organization Policy defines limits on how teams can configure resources. The episode illustrates this with a rule requiring customer-managed encryption keys when Cloud SQL instances are created, restarted, or updated, rather than relying on each team to remember the requirement [04:17–05:20](https://www.youtube.com/watch?v=QJcRkpzW8Mw&t=257s).

Full video: <https://www.youtube.com/watch?v=QJcRkpzW8Mw>
