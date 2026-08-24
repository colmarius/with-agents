---
title: "Resource Access Control IAM Roles and Permissions"
videoId: Sdt-i-Q7tyA
sourceUrl: "https://www.youtube.com/watch?v=Sdt-i-Q7tyA"
publishedAt: "2019-05-20T17:28:40Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

An unnamed speaker demonstrates the basic IAM relationship among a principal, a role, and resulting access by granting and then removing the Storage Admin role in a 2019 Google Cloud project.

## Key Ideas

- Adding a person to a project with the Storage Admin role grants that account control over Cloud Storage resources after policy propagation. [00:00:00]-[00:00:53]
- Removing the principal from the IAM policy revokes that access, which the demonstration confirms through a permission error. [00:00:00]-[00:00:53]
- IAM changes can take time to propagate, so immediate checks may briefly show the previous state. [00:00:00]

## Practical Implications

- Use current IAM documentation and grant the narrowest role at the narrowest suitable resource scope.
- Treat the 2019 console flow as dated; current policy editing, role names, and resource interfaces may differ.
- Keep this as security cross-topic evidence about access control, not as a complete security design or IAM operating guide.

## Questions and Tensions

- Storage Admin is intentionally broad for a short demonstration and may exceed a real user's needs.
- A manual before-and-after check proves one account's observed access, but not complete policy correctness, inherited access, audit coverage, or separation of duties.

## Source

- [Video](https://www.youtube.com/watch?v=Sdt-i-Q7tyA)
- [transcript.md](./transcript.md)
