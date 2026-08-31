---
title: "OWASP API Security Top 10 — 2023"
resourceId: 104
date: "2023-06-05"
---

The [OWASP API Security Top 10 — 2023](https://owasp.org/API-Security/editions/2023/en/0x00-header/) is a risk taxonomy and awareness document, not an API implementation standard or a compliance checklist. OWASP publicly released the stable edition on June 5, 2023. Use its categories to challenge an API design and test plan, then choose concrete controls from standards, platform guidance, and the application's threat model.

The list spans several different failure boundaries:

- **Authorization:** broken object-level, property-level, and function-level authorization ask whether every request may act on this exact object, field, or operation—not merely whether the caller is authenticated.
- **Identity and abuse controls:** broken authentication covers credentials and tokens, while unrestricted resource consumption and access to sensitive business flows cover technical exhaustion, cost amplification, and harmful automation that may use otherwise valid requests.
- **Platform and supply chain:** server-side request forgery and security misconfiguration test network destinations, parsers, services, and deployment defaults. Improper inventory management asks whether every host, version, endpoint, and data flow is known and maintained. Unsafe consumption of APIs treats third-party responses as untrusted input.

### Turn the taxonomy into engineering work

For each endpoint, record the caller types, object relationships, allowed actions and properties, data classification, resource limits, downstream calls, expected business frequency, and detectable abuse signals. Add negative tests across tenants and roles, varying object IDs and fields independently. Test deprecated versions and shadow hosts, constrain outbound destinations, and observe authorization failures, throttling, and abnormal business-flow activity without logging secrets.

Use the [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) to make the three access-control categories concrete: enforce least privilege, deny by default, validate permission on every request, and check the specific object or function even when an identifier can be guessed. Centralize policy where practical, but test the actual request paths with unit and integration coverage and log failed decisions in a useful, non-sensitive form.

The Top 10 deliberately compresses many root causes into ten memorable families. Do not infer that lower-numbered risks are the only priorities, that covering each heading proves security, or that one control closes a category. Prioritize using system-specific likelihood, exposure, and impact.
