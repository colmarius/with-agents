---
title: "OWASP API Security Top 10 — 2023"
resourceId: 104
date: "2023-06-05"
---

The [OWASP API Security Top 10 — 2023](https://owasp.org/API-Security/editions/2023/en/0x00-header/) groups common ways APIs expose data, grant unintended access, or enable costly abuse. It is useful for finding gaps in a design and test plan, not for proving compliance or deciding which risks matter most to a particular system.

### A valid login does not settle authorization

Three categories distinguish what a caller may access. As an illustration, an account API needs separate checks for:

- **Objects:** may this caller access this particular account, even if they know its ID?
- **Properties:** which fields may they read or change? Access to an account does not imply permission to change every field.
- **Functions:** may they perform this operation at all, such as an administrator-only action?

Broken authentication is a separate category: credentials or tokens fail to establish the caller's identity correctly. Fixing it does not fix missing authorization checks.

### Abuse can use otherwise valid requests

- **Unrestricted resource consumption** can exhaust compute, storage, bandwidth, or a paid downstream service. Rate and resource limits bound both availability and cost exposure.
- **Unrestricted access to sensitive business flows** concerns harmful automation of legitimate operations. The business can suffer even when each request is valid and the infrastructure stays healthy.
- **Server-side request forgery** lets an attacker influence a URL the API fetches, potentially reaching unintended services through the server's network access.
- **Security misconfiguration** exposes weaknesses in deployment settings and components. **Improper inventory management** leaves hosts, API versions, endpoints, or data flows untracked and insufficiently maintained.
- **Unsafe consumption of APIs** arises when a service trusts third-party responses more than other input. Validate downstream data rather than assuming an external provider makes it safe.

### Turn the taxonomy into engineering work

An applied review can start with each endpoint's allowed callers, objects, fields, and actions. Add negative tests that vary tenant, role, object ID, and field independently. Then inspect resource limits, outbound calls, and the expected frequency of business operations. Include old API versions and untracked hosts rather than testing only the current public endpoint.

The [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) supplies concrete access-control guidance: least privilege, deny by default, and validate permission on every request at the server. Test the actual request paths and log failed decisions without exposing secrets. Prioritize the resulting work by the system's exposure and likely impact, not by the category number.
