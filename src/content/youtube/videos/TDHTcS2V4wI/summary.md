---
title: "Managing billing permissions"
videoId: TDHTcS2V4wI
sourceUrl: "https://www.youtube.com/watch?v=TDHTcS2V4wI"
publishedAt: "2019-09-03T23:11:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter separates cloud resource ownership, Cloud Billing administration, and Google payments administration into related but distinct control planes. The durable lesson is to assign accountable owners, preserve administrative redundancy, and review access regularly. All console paths, IAM roles, account relationships, payment-profile behavior, and billing policies described are a 2019 snapshot and require validation against current Google Cloud and Google payments documentation.

## Key Ideas

- Projects, billing accounts, and payments profiles serve different purposes, with separate permissions around resource use, cloud-cost administration, and payment. [00:00:00]-[00:01:03]
- The episode recommends multiple administrators or groups, periodic access review, and as few billing and payments accounts as the organization can reasonably manage. [00:01:03]
- Its account-creation walkthrough ties billing location to currency and configures payment-profile identity, contacts, and backup payment methods. These are historical product and policy details, not current instructions. [00:02:04]
- The 2019 role model distinguishes billing administrators, viewers, and users, and contrasts billing-account visibility with project-scoped cost visibility. Current IAM documentation is required before applying it. [00:03:07]
- Teams should know who owns billing administration and how support issues are escalated, rather than discovering that path during an incident. [00:04:11]

## Practical Implications

- Maintain an explicit responsibility map for resource ownership, billing operations, payment operations, and support escalation.
- Prefer group-based, least-privilege access with more than one accountable administrator, then review both cloud and payment access on a recurring schedule.
- Minimize avoidable account sprawl, but treat the episode’s single-account preference as contextual: legal entities, currencies, invoicing, and risk boundaries can require a different design.

## Questions and Tensions

- Administrative redundancy reduces lockout risk but increases the need for access review and separation of duties.
- The console, role, account-creation, currency, and support behavior may have changed since 2019; current documentation and organizational policy must decide the implementation.

## Source

- [Video](https://www.youtube.com/watch?v=TDHTcS2V4wI)
- [transcript.md](./transcript.md)
