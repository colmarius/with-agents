---
addedDate: '2026-10-20'
title: "The most expensive software bug in history..."
resourceId: 185
date: '2026-08-27'
collection: fireship
order: 21
videoId: UuqSy1jPSUw
---

Fireship retells Knight Capital's 2012 trading failure as a combination of dormant code, reused configuration, inconsistent deployment, and a harmful rollback. This summary uses English auto-generated captions, not incident filings; historical details and financial figures are attributed to Fireship, and the title's superlative is not independently established.

## Key ideas

- Knight's order router split large trades into smaller orders. Fireship says adapting it to a new exchange program introduced the change that activated a long-unused flag, making a business requirement interact with legacy behavior. [01:02–03:07](https://www.youtube.com/watch?v=UuqSy1jPSUw&t=62s)
- In the video's account, engineers reused a flag formerly attached to Power Peg rather than creating a distinct control. Updated servers interpreted it as the new feature, while old code still interpreted it as aggressive test-trading behavior. [02:05–03:07](https://www.youtube.com/watch?v=UuqSy1jPSUw&t=125s)
- A manual rollout reportedly updated only seven of eight servers. When the flag was enabled, the remaining server ran the dormant behavior; rolling the other seven back then expanded the failure because the flag remained active. The rollback was therefore not equivalent to restoring the earlier safe system state. [03:07–04:10](https://www.youtube.com/watch?v=UuqSy1jPSUw&t=187s)
- Fireship reports roughly 45 minutes of unintended trading and a loss exceeding $440 million, followed by a corporate acquisition. Some numeric wording in the captions is unclear, so this summary does not repeat the inconsistent position-size figure. [03:07–05:12](https://www.youtube.com/watch?v=UuqSy1jPSUw&t=187s)

## Practical implications

Editorial: Treat deployed code versions and configuration as one operational state. Retire obsolete controls, verify fleet-wide rollout, and test whether a rollback remains safe under currently enabled flags rather than assuming old binaries are automatically a safe fallback.

## Questions and limits

Editorial: This is a compressed historical narrative, not a complete causal investigation or proof of the exact trading algorithm's behavior. The final assurance that the industry never repeated such mistakes is sarcasm. HyperAgent's closing maintenance workflow and credits are sponsored promotion, not evidence that agents prevent deployment failures. [04:10–05:19](https://www.youtube.com/watch?v=UuqSy1jPSUw&t=250s)

Full video: <https://www.youtube.com/watch?v=UuqSy1jPSUw>
