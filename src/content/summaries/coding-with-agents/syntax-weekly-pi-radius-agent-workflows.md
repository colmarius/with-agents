---
title: "Syntax Weekly: Pi Radius, remote agents, and validation mistakes"
resourceId: 143
date: "2026-09-14"
---

This selection covers the coding-agent segments of a broader Syntax Weekly conversation with Scott Tolinski, Wes Bos, and CJ. The episode also discusses React, foldable phones, and hardware; it is not a dedicated agent tutorial. Based on English auto-generated captions, without an original-audio check. Product capabilities and personal results below are the hosts' accounts, not independently tested findings.

### Key Points Covered

- **Radius packages services around Pi's extensible agent runtime**: Scott describes a managed model gateway with routing, tool-output rewriting, hosted artifacts, usage controls, and Google Workspace access. Rewriting can shorten repetitive tool results or remove terminal formatting before they consume more context. The hosts distinguish this ready-made service from building similar behavior through Pi extensions; they do not establish that it consolidates every provider's subscription login [05:34–14:33](https://www.youtube.com/watch?v=-czzyDaV9PA&t=334s).
- **More orchestration can mean more waiting**: Scott says he keeps his Pi setup minimal after trying extensions that repeatedly delegated work and left him waiting. He explicitly separates the poor interactive experience from whether the eventual output was better; this is a personal workflow report, not a comparison benchmark [14:33–15:27](https://www.youtube.com/watch?v=-czzyDaV9PA&t=873s).
- **Bring remote sessions and their logs into one visible workspace**: Scott describes adding his Mac Mini to Herder over SSH through Tailscale so local and remote sessions appear together. Wes uses a skill to open separate panes for servers, builds, or other agents, making their output easier to inspect. Scott also reports a loosely specified request producing roughly a hundred panes: convenient delegation did not itself constrain how much work the agent launched [40:38–45:20](https://www.youtube.com/watch?v=-czzyDaV9PA&t=2438s).
- **Useful personal-agent access also creates a security boundary**: Wes describes extracting school information and photos from email and PDFs. CJ acknowledges the usefulness but prefers purpose-built access restrictions: an agent with broad Gmail API permissions could encounter prompt injection and send email or disclose data. The conversation identifies this risk; it does not demonstrate a tested mitigation [51:16–56:55](https://www.youtube.com/watch?v=-czzyDaV9PA&t=3076s).
- **Variable inputs explain when an agent helps beyond a fixed script**: For a recurring download from one known app, a script may suffice. Wes contrasts that with searching years of messages where photos appear as attachments, PDFs, Google Photos links, or other websites. His agent selected different retrieval methods and filtered clip art. This is a reported example of adapting to heterogeneous sources, not evidence that the extraction was complete or error-free [57:57–1:00:41](https://www.youtube.com/watch?v=-czzyDaV9PA&t=3477s).
- **Reject invalid input rather than silently expanding the accepted format**: Wes recounts a deployment failure caused by a capitalized metadata key. Asked to improve validation, the agent instead added special handling to accept that spelling in validation and import code, plus acceptance tests. Wes wanted unknown keys rejected so authors would fix them. The preceding blue-button website is explicitly a scripted parody, not a live model evaluation [1:27:33–1:31:40](https://www.youtube.com/watch?v=-czzyDaV9PA&t=5253s).

### Editorial takeaway

Make the desired boundary explicit: which input is valid, what an agent may access, and how much work it may delegate. The validation anecdote is especially useful because tests can pass while preserving the wrong behavior—accepting a malformed key instead of rejecting it.

Full video: <https://www.youtube.com/watch?v=-czzyDaV9PA>
