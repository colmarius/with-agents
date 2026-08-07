# Research: Amp product freshness — 2026-08-07

**Date:** 2026-08-07
**Status:** complete
**Question:** What changed in Amp's official Chronicle and canonical manuals after the public Amp case study's 2026-07-31 sweep, and which changes materially affect this site's articles?

## Recommendation

Correct the Amp case study's stale claim that durable plugin webhooks are experimental, and incorporate Portals as a concrete remote feedback and review contract in the case study and field guide. Keep “Attach Anything” in research for now: it expands the evidence an agent can inspect, but does not materially change either article's thesis. Treat the new Orbs note as a useful first-party workflow example, not comparative evidence that orbs increase delivery performance.

## Key Findings

- The Chronicle added three relevant first-party items after the 2026-07-31 sweep: the August 4 “Attach Anything” announcement, the August 4 “What I Want to Tell You About Orbs” note, and the August 6 “Portals into Orbs” announcement.
- Portals expose HTTP services running in an orb through authenticated URLs with live reload and page feedback. Access follows thread visibility, requests wake the orb, and the portal sleeps with it. `.amp/services.yaml` makes the service command and portal setup durable and supervised.
- `PluginAPI.createWebhook` is now a first-class top-level API. The current Plugin API's `experimental` namespace does not contain it, so the case study's statement that durable webhooks remain experimental is stale.
- Durable webhook semantics remain operationally important: capability URL secrecy, signature/authentication verification by the plugin, untrusted payload validation, at-least-once delivery, idempotency, a 30-second handler deadline, rate limits, and lifecycle controls.
- The current Manual and Models page still define four built-in modes: `low`, `medium`, `high`, and `ultra`. Their model routing has changed, which reinforces the article's choice to describe task contracts instead of hard-coding model assignments.
- The current pricing sources still support the case study's bounded claim: subscriptions are optional, pay-as-you-go remains available, and individuals and non-enterprise workspaces pay provider API prices with zero markup. Exact subscription and orb quotas remain deliberately excluded from the article.
- “Attach Anything” says orb threads can receive videos, logs, PDFs, spreadsheets, datasets, and other files. This expands possible diagnostic inputs, but the announcement does not state durable limits or an evaluation showing better outcomes.
- Thorsten Ball's Orbs note describes a first-party working pattern: spawn more isolated workers, let them run longer end-to-end checks, and ask for screenshots, videos, or other concrete proof. It is a vendor-authored anecdote without a comparison group or measured delivery outcomes.

## Candidate Classification

### Incorporate: Portals into Orbs

- **Thesis fit:** Strengthens the case study's remote-execution and proof-loop contracts and the field guide's factory-workflow map.
- **Evidence strength:** The announcement and Orbs manual document operative product behavior, access, lifecycle, and repository setup.
- **Durability:** A reviewable running system and a committed service contract survive UI and model churn.
- **Novelty:** Existing article text mentions orb inspection but not a live application feedback surface.
- **Claim-to-caveat ratio:** The useful behavior is substantial; the main caveat is that portal access and wake/billing follow the thread and orb lifecycle.
- **Load-bearing value:** Makes the remote proof loop concrete and corrects the implication that remote review is limited to files, diffs, and terminals.

### Incorporate with an explicit boundary: What I Want to Tell You About Orbs

- Use only as a first-party example of the mechanism: isolated compute can support longer test matrices and media evidence without occupying a developer's machine.
- Do not repeat its unmeasured claims about shipping more, higher confidence, “infinite” orbs, or remote development replacing almost all local work.

### Research-only: Attach Anything

- It may later support an update to `agent-ready-interfaces.md` about rich diagnostic inputs.
- It does not yet change the public articles' alignment, proof, delegation, or execution contracts enough to earn more product detail.
- The announcement does not provide limits, security guidance, or outcome evidence; canonical attachment documentation should be preferred before making durable public claims.

### Ignore for public prose: exact model routing and subscription quotas

- The Models and Pricing pages remain canonical for these volatile details.
- The public articles already abstract them behind capability, uncertainty, budget, and proof contracts.

## Article Impact

### `amp-factory-era-case-study.md`

1. Advance the official product sweep date to 2026-08-07.
2. Add Portals and committed `.amp/services.yaml` service setup to the remote context and proof-loop sections.
3. Add the Orbs note only as a caveated first-party workflow report.
4. Correct durable webhooks from experimental to first-class while retaining their retry, authentication, idempotency, and lifecycle caveats.
5. Add Portals and the Orbs note to the source appendix.

### `agentic-coding-2026.md`

Add one concise Portals example in the factory section. Keep the reusable takeaway at the map level: remote execution needs a reviewable running system, access boundaries, and lifecycle ownership. Leave implementation detail in the Amp case study.

### `agent-ready-interfaces.md`

No immediate edit. Preserve “Attach Anything” as a candidate for a future evidence-input refresh after canonical attachment documentation provides firmer contracts or the article otherwise needs a material revision.

## Evidence Boundaries

- Chronicle announcements are dated product direction; current manuals are the product authority.
- The Amp Orbs note is vendor-authored observational testimony, not a controlled study or transferable productivity benchmark.
- The official pages do not provide a versioned manual changelog. “Changed” here means a mismatch with the repository's 2026-07-31 article assertions or a new post-sweep capability, not a line-by-line historical diff of the manuals.
- Exact models, prices, quotas, UI labels, rate limits, and API signatures can change. Public prose should retain only details needed to explain the durable contract and should date-stamp exact product assertions.

## Sources

- [Amp Chronicle](https://ampcode.com/chronicle) — Established the post-sweep publication set and dates; freshly fetched 2026-08-07.
- [Portals into Orbs](https://ampcode.com/news/portals) — Announced live-reloading HTTP access, page feedback, thread-scoped access, orb lifecycle, multiplayer use, and `.amp/services.yaml` setup.
- [Attach Anything](https://ampcode.com/news/attach-anything) — Announced arbitrary file uploads to orbs and examples involving video, logs, PDFs, spreadsheets, datasets, audio, and CAD/media workflows.
- [What I Want to Tell You About Orbs](https://ampcode.com/notes/what-i-want-to-tell-you-about-orbs) — Supplied the first-party remote-work and extended-proof-loop example.
- [Amp Manual](https://ampcode.com/manual) — Confirmed current modes, Oracle, subagents, threads, skills/plugins, review/checks, schedules, sharing, multiplayer, runners, and pricing terminology.
- [Amp Orbs manual](https://ampcode.com/manual/orbs) — Confirmed setup/resume hooks, supervised services, portals, access and lifecycle, OIDC, webhooks, terminals, file review, and sync behavior.
- [Amp Plugin API](https://ampcode.com/manual/plugin-api) — Confirmed `createWebhook`, custom agents, and custom agent modes are first-class top-level APIs and documented current delivery contracts.
- [Amp Models](https://ampcode.com/models) — Confirmed current built-in mode contracts and volatile model routing.
- [Amp Pricing](https://ampcode.com/pricing) — Confirmed optional subscriptions and pay-as-you-go availability; exact plan quotas intentionally remain outside the articles.

## Open Questions

- [ ] Revisit `agent-ready-interfaces.md` only if canonical attachment documentation or stronger evidence makes rich file inputs load-bearing to its interface contract.
