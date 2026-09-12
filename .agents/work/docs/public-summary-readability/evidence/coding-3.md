# coding-3 public-summary review

## Scope and status

- Ownership: original sorted top-level plus coding-with-agents summary list, slice `[50:75]`; 25 files listed below. 14 changed, 11 unchanged.
- Content baseline: coordinator supplied `0b57c28e68ead518ecfee854efbcd8d74e9e79b4`. Its subsequent `5f00f1d5755b8ca0ca5b1767e67f998313f1c2b3` adds only Claude Eval material outside ownership. Read the new readability example via `git show origin/main:src/content/summaries/coding-with-agents/trying-the-new-claude-eval-tool.md`; did not edit it.
- Edited summaries only. No source sidecars, manifests, frontmatter, IDs, collection metadata, or original source URLs changed. Timestamp ranges were extended where supporting transcript chunks began at the old endpoint.
- Review method: read every public summary and matching transcript evidence or reviewed library summary before editing; long transcripts received focused passage review, not an original-audio or exhaustive line-by-line audit. Three short transcripts (Ending AI Slop, OKF, Self-Improving Company) were read in full. Do not interpret unchanged as independently verifying every historical claim.
- Ledger is uncommitted and workspace-relative for download. No push or deployment.

## Source/provenance handoff

### Ending AI Slop: coordinator preservation required and reported complete

Exact removed paragraph:

> AI Engineer's official schedule lists the session as **Ending AI Slop**, presented by Castello Branco on the Data Quality track on June 30, 2026. It is distinct from her next-day Design Engineering session, **Training Taste**.

The local transcript contains the speaker's 00:01:16 statement that today's talk covers model training and tomorrow's design-track talk covers the agent side, but not the exact titles/date/track assertion. No schedule was newly verified here. Coordinator reports preserving the paragraph in its transcript sidecar as inherited prior-review provenance. Do not overwrite that sidecar during integration. The public YouTube source URL remains unchanged.

### Other removed standalone evidence/process paragraphs

These are editorial evidence-boundary judgments, not transcript-capture provenance. Capture metadata remains in existing sidecars. If the coordinator preserves review judgments in sidecars, use the exact text below; no new empirical certification is implied.

**DHH / Lex**

> The episode ranges into Linux, work, politics, parenthood, and longevity; this summary focuses on its coding-agent material. DHH's output, speed, cost, model-quality, security, plugin-adoption, and open-source contribution figures are first-party reports without controlled comparison or enough methodology to generalize. His claims about employment, manual programming, AGI, and future model capability are forecasts or practitioner judgments.

Specific review, security, project-volume, productivity, and labor qualifications remain next to public claims.

**Don't Build Agents**

> This is a practitioner and product talk. Its claims about Modal, Ramp, scale, startup time, and pull-request share are first-party reports without comparative measurements in the presentation.

Public bullets describe Azzam's proposed architecture; no scale/startup/PR-share numerical claim is introduced.

**Every Repo**

> This is a product-adjacent practitioner interview, not an independent assessment of GitHub’s implementation. Syme works on the system he describes. Claims about guardrails, pull-request merge rates, and operational readiness are first-party reports without a threat model, evaluation dataset, or comparative measurements in the recording. GitHub Agentic Workflows was in public preview when the episode was published, so its described behavior is not a durable product contract.

Intro retains Syme's involvement and then-public-preview status. Bullets retain attributed product descriptions and human approval boundary.

**Evolution of Agentic Surfaces**

> This is an Anthropic product presentation, not a vendor-neutral comparison. Its architecture and operational lessons are useful, but its latency figures are vendor-reported, and proposed features such as memory “dreaming” and outcome graders should not be treated as independent proof of reliability.

Intro retains speakers' affiliation; latency claim and limitations stay together, memory/grader items remain proposals.

**OKF**

> This is a short explainer of Google's announcement and reference artifacts, not an independent interoperability evaluation. Google's enrichment agent, visualizer, and sample bundles show one producer and consumer path, but the recording does not demonstrate exchange between independent vendors, sustained maintenance accuracy, retrieval quality, or broad adoption. The narration calls six frontmatter fields queryable and later calls them required, while only `type` is required. It also shortens a concept's identity to its file path; the [v0.1 specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/d44368c15e38e7c92481c5992e4f9b5b421a801d/okf/SPEC.md#L45-L48) removes the `.md` suffix.

The specification correction is preserved in public bullets, along with the exact existing spec link. Primary source read directly: https://raw.githubusercontent.com/GoogleCloudPlatform/knowledge-catalog/d44368c15e38e7c92481c5992e4f9b5b421a801d/okf/SPEC.md . Sections 2 and 4.1 explicitly define suffix-free IDs and only `type` required. Interoperability and maintenance limitations remain beside their claims. No additional sidecar needed for the corrections because they remain public and linked.

**Self-Improving Company**

> This is a conceptual batch talk backed by first-party YC examples, not an evaluation of self-improving companies. The recording does not provide methods for its revenue-per-employee comparison or validate the generated advice or deployed code. It does not resolve the consent, privacy, security, retention, and governance risks of recording organizational communication and automating consequential actions.

Proposal status, missing query-agent validation, unsupported revenue causal inference, recording/privacy limits, and manual accuracy qualification remain next to claims. Existing sidecar retains official YC transcript provenance and chapter-based timestamp basis.

## Per-file ledger

All filenames below are under `src/content/summaries/coding-with-agents/`. `T` means matching `src/content/transcripts/coding-with-agents/<filename>`; `Y/<id>` means `src/content/youtube/videos/<id>/summary.md`, whose `status: reviewed` was checked.

### 1. craft-and-chaos-episode-1.md — unchanged

- Source: existing X-only record https://x.com/AmpCode/status/1998800449768665274 and public body. No saved transcript exists; no live X content verification performed.
- Kept required X-only disclosure and source links. No episode-summary content invented. Gap: not a transcript-backed written summary; this is intentional repository policy, not a capture task.

### 2. craft-and-chaos-episode-2.md — unchanged

- Source: existing X-only record https://x.com/AmpCode/status/2000974512251383886 and public body. No saved transcript exists; no live X content verification performed.
- Same decision and limitation as episode 1.

### 3. cursor-hardcore-review-skill-stop-slop.md — unchanged

- Source read: Y/mh5XZ-L5SFQ, reviewed framing and Key Ideas.
- Evidence: 01:03–05:18 review criteria; 08:08–12:06 accepted structural recommendations versus rejected type/duplication findings; 12:06–13:04 false-positive tradeoff.
- Existing public summary already supplies orientation and distinguishes demonstration from implemented improvements. No sidecar gap.

### 4. dhh-future-of-programming-ai-agentic-engineering.md — changed, framing

- Source read: T opening 00:00–07:08; focused 15:43–17:25 chunks through the following discussion.
- New intro contrasts rapid features with aggregate architecture damage. Exact evidence: 16:36 says individually defensible PRs “taken all together, destroyed the architecture” and required manual cleanup; 15:43 distinguishes critical model-layer review from unread UI code.
- Removed standalone scope/evidence paragraph recorded above; left detailed bullets unchanged. No source-capture change needed.

### 5. dhhs-new-way-of-writing-code.md — unchanged

- Source read: Y/JiWgKRgdgpI reviewed framing and Key Ideas.
- Evidence: 32:31–38:38 autocomplete versus terminal drafts; 44:19–48:32 inspect diff/commit/redirect; 1:11:12–1:13:18 cross-model critique is additional scrutiny.
- Existing summary explains interaction shift and acceptance standard adequately. No sidecar gap.

### 6. dont-build-agents-build-environments-instead.md — changed, deletion only

- Source read: T opening 00:00–04:54 including Azzam's harness versus surrounding environment distinction.
- Removed detached evidence note about metrics not reproduced in the public bullets. All architectural mechanisms and citation ranges unchanged. No new claim/example.

### 7. ending-ai-slop-thais-castello-branco-taste-labs.md — changed, substantial framing/clarity

- Source read: full T, 00:13–16:10.
- Intro now names the concrete problem: how to improve subjective outputs when people disagree. First bullet distinguishes model changes from context/user-intent interventions (00:13–02:19).
- Preference-vector explanation is deliberately minimal, not an invented implementation: 10:29 discusses who people are, what they like, why and when; 11:23 proposes attaching a “preference vector” to preference data. Public text defines this as a representation of taste and explicitly says construction is unspecified.
- Removed schedule note; see coordinator handoff above. No new source URL.

### 8. every-repo-is-a-software-factory-now-don-syme-github.md — changed, framing

- Source read: T opening through 06:01, including role at GitHub, contrast with individual chats, documentation/performance examples, deterministic delivery; opening 00:00 contains the quality-gate/reviewer-attention thesis.
- Replaced list-of-topics intro with explanation of recurring shared work beside CI/CD. Preserved product involvement/public-preview caveat inline. Body unchanged.

### 9. evolution-agentic-surfaces-gagan-bhat-isabella-kai-he.md — changed, framing/attribution

- Source read: T 00:13–06:43; 07:31–09:19; 11:07–16:13.
- Intro defines harness and starts with recovery stakes. Evidence: 12:00 separates brain/hands and explains sandbox replacement plus session-log recovery; 15:25 rereads discarded context from durable log.
- Replaced ambiguous “He” with “Kai He” in context-reset bullet. The introduction assigns engineering principles to Isabella; 07:31/08:27 cover Sonnet early termination and obsolete resets harming Opus latency/cache.
- Detached vendor-evidence paragraph removed; numerical latency caveat and proposal status remain in bullets.

### 10. field-guide-to-fable-thariq-shihipar-anthropic.md — changed, definitions and range

- Source read: T opening through 06:32; 09:19–12:58.
- Defines Fable as the Claude model discussed, names speaker's affiliation, replaces unknown-known jargon with explicit categories.
- Exact evidence: 09:19 unknown = a decision not specified; 10:09 distinguishes unanswered questions, things too obvious to write down, things not considered. Range widened from 09:19–10:09 to 09:19–11:11 because the category explanations start at the old endpoint.

### 11. forget-loops-build-a-software-factory-instead-dexter-horthy.md — unchanged

- Source read: T 07:58–11:56 and 32:40–36:23, plus public summary.
- Evidence: 10:05 lights-off desktop-app experiment required human debugging; 33:28 ADRs/external context; 34:21/35:25 hooks synchronize comments/issues without spending model inference on retrieval steps.
- Existing public account explains end-to-end slices and throughput bottleneck clearly. No new assertion needed.

### 12. formal-methods-with-hillel-wayne.md — changed, definition/example/range

- Source read: T 18:53–21:37 and 1:05:24–1:10:08.
- Intro explains formal methods. Bullet now explains meaningless passing property through Wayne's P-or-not-P example and defines liveness in the source's progression-over-time terms.
- Exact evidence: 1:07:04 “either P is true or not P is true”; “that's just always true”; then liveness properties concern how system evolves over time.
- Range widened 1:05:24–1:07:04 → 1:05:24–1:08:08; old range ended before its key evidence. March 2026 qualification retained.

### 13. from-chrome-devtools-to-ai-engineering-with-addy-osmani.md — unchanged

- Source read: Y/2fyPnxKu8ZM reviewed summary, Key Ideas and implications.
- Evidence: 1:01:05–1:05:01 cognitive debt/surrender and decision summaries; 1:05:57–1:11:49 bounded loops and production signals; 1:12:51–1:16:03 ownership.
- Existing summary defines cognitive debt and names concrete review records. No sidecar gap.

### 14. from-ides-to-ai-agents-with-steve-yegge.md — unchanged

- Source read: Y/aFsAOu2bgFk reviewed framing, Key Ideas and tensions.
- Evidence: 32:06–35:04 polecats versus crew; 35:04–39:47 observability and bounded incident roles; 1:02:32–1:04:27 recurring architectural mistakes.
- Already separates proof of concept and forecasts from recommendations. No sidecar gap.

### 15. giving-ai-agents-a-sql-tool-is-unreasonably-effective.md — changed, five evidence ranges/terms

- Source read: T opening and 06:02–18:17 through end.
- Readability: “schema semantics” → what columns mean; expanded PII.
- Exact endpoint corrections: tenant-config/rollback mechanism is in 07:05 chunk → first range ends 08:07; deleting vector tool is in 10:05 chunk → second ends 10:55; errors as feedback are in 11:47 chunk → third ends 12:38; audit-log/known-good-query loop in 13:41 chunk → fourth ends 14:39; multiple agents with different contexts in final 17:47 chunk → fifth ends at recorded full duration 18:17.
- Tenant-isolation sketch, sensitive-data-policy gap, upstream limits, and editorial synthesis labels retained.

### 16. google-open-knowledge-format.md — changed, substantial rewrite

- Source read: full T (00:00–06:20 final chunk) plus pinned primary v0.1 specification linked above.
- Mechanism explains one concept per file, structured metadata, suffix-free IDs, graph links, indexes, and independent writers/readers.
- Exact supporting evidence: 00:00 scattered schemas/metrics/runbooks; 01:52 six field names; 02:48 links and indexes; 03:41 only `type` required and enrichment agent; 04:40 visualizer/samples and ongoing-maintenance pitch; 05:30 terminal reading; 06:20 contradictory all-six-fields assertion.
- Added explicit `tables/orders.md` → `tables/orders` example from spec Section 2. Moved correction into relevant bullet, preserved exact spec source link. Extended tooling range to 03:41–05:30 and maintenance range to 04:40–06:20 to include full mechanisms.
- Remaining caveats: interoperability not demonstrated across independent vendors; first-party tools do not establish accuracy/scale; maintenance is proposed, not validated.

### 17. harness-engineering-is-the-future.md — unchanged

- Source read: T opening through 03:23; 29:17–33:55.
- Evidence: 30:08 roughly 600-line browser harness and missing upload tool; 30:56 iframe/drawing examples; 31:50 dialog handling; 32:52 model improvement enables low-level composition.
- Existing summary already explains missing-tool creation and upstream divergence without endorsing universal reliability.

### 18. how-ai-is-changing-software-development-with-simon-willison.md — unchanged

- Source read: T publisher-provided metadata/opening; 22:51–23:22; 30:49–33:28; 34:02–37:50.
- Evidence: shipping gate = can explain change; nitpicking forces active engagement; claimed 39% speedup remains unlanded because maintainability/review still cost time.
- Summary already preserves these distinctions. Official transcript source links and sidecar provenance retained.

### 19. how-ai-will-change-software-engineering-martin-fowler.md — unchanged

- Source read: T opening; 29:10–31:03; 33:09–36:20.
- Evidence: thin slices reviewed as unreliable collaborator output; generated SVG anecdote; unread code removes learning feedback.
- Existing summary clearly attributes viewpoint, confines vibe coding to disposable exploration in Fowler's recommendation, and connects speed to smaller batches.

### 20. how-to-build-a-self-improving-company-with-ai.md — changed, substantial clarity

- Source read: full official YC publisher-derived T, including provenance notice and all chapter chunks.
- Intro describes failure → tool/context change → later success, rather than “recursive” as an unexplained label.
- 02:24 policies specifically say what AI can do, must log, and must ask humans; public loop bullet now explains these responsibilities.
- Corrected source-range placement: compression was previously claimed under 08:05–09:40, but explanation begins at 09:40. The revised 08:05 item covers recording only; the 09:40–11:19 item covers oversized raw data, topic synthesis, manual, monthly incorporation/discard, and agent context.
- First-party claim and privacy/access/retention/malicious-input limits remain. No invented validation or consent architecture. Sidecar already preserves official transcript capture and chapter timestamp basis.

### 21. how-to-ship-100x-faster-as-a-developer.md — changed, framing/comparison

- Source read: T opening; 06:58–09:27; 17:20–20:41.
- Explains mature enterprise risk versus smaller products; title not measured speedup. Exact evidence 07:48 risk, 08:37 two/three simultaneous tasks.
- Expands RAG, explains stored/synchronized retrieval versus live API calls without claiming either approach lacks retrieval. 17:20/18:13 sync/embed/store/retrieve; 19:50 shared knowledge prevents each platform rebuilding it.

### 22. how-to-stop-building-products-nobody-wants.md — changed, evidence ranges only

- Source read: T opening; 1:08:23–1:14:27; 1:24:19–1:30:23.
- Existing prose already explains opportunity trees, ambiguous diffs, and upstream errors well.
- Exact fixes: audit tool applies changes and sends mismatches back at 1:13:32 → range now ends 1:14:27; successful second correction loop at 1:29:34 → range now ends 1:30:23. No claim change.

### 23. i-hated-every-coding-agent-so-i-built-my-own-mario-zechner-pi.md — changed, orientation/clarity/ranges

- Source read: T opening through 04:33; 15:52–25:48.
- Intro states the control/experimentation problem. Replaces malleability, TUI/SDK/headless list with direct descriptions while preserving four tools.
- Exact evidence: 18:38 malleability/self-modification thesis and package overview; 19:27 interfaces; 21:17 four tools and file alternatives; 22:06/23:09 extension reloads.
- Range changes: 17:36–18:38 → 17:36–19:27; 18:38–21:17 → 18:38–22:06; 21:17–22:06 → 21:17–23:09. Each old endpoint excluded a supporting chunk.

### 24. is-agent-harness-relevant-in-2026.md — changed, framing/example

- Source read: T opening; 39:15–43:34; 56:38–1:04:10.
- Intro explains finite context and specialization, defines harness. Replaces product terminology list with source-backed follow-up example: 41:06 a merged PR identifies affected customers and asks whether to contact them on Discord/Slack; 42:42 trigger/MCP/subagent access.
- Retains first-party, not-demonstrated qualifier and generated-code percentage not equaling productivity.

### 25. just-stop-looking-at-the-code.md — unchanged

- Source read: T opening through 04:00; 33:09–37:16; 43:01–49:10.
- Evidence: low/medium-risk bot review/merge versus system-diagram review, ~50 early users; outgoing secret placeholders/destination check at 45:06; sensitive data can still be exfiltrated; 261 red-team conversations at 47:03/48:12.
- Existing public distinction between secret handling and data protection is important and retained. Editorial takeaway remains labeled.

## Verification

- `git diff --check`: clean.
- `npm run check`: 65 files; 0 errors, 0 warnings, 0 hints.
- `npm test`: final run 114 tests, 114 pass, 0 fail, 0 skip. Initial run before hook installation had 113 pass/1 skip.
- `npm run content:guard`: passed; 1158 tracked videos, 24 playlists, 248 public references, 107 resources, 287 summaries. Existing duplicate-manifest notice for antirez video `8gg-oJr4dTY` at positions 0/3; not modified.
- `npm run summaries:check`: 287 files passed.
- `npm run hooks:install`: installed pre-commit hook.
- `npm run build`: 332 pages; complete.
- Browser: `amp orb services ensure` returned https://t-03guubpxx5wepbupagdp0aj2h-p26203.onamp.dev/ . Real Chromium visited the three representative routes below, at DPR 2. JS checks confirmed new text, preserved spec href, absence of schedule note, and no horizontal overflow. No browser errors reported. Session closed.
  - `/summaries/coding-with-agents/google-open-knowledge-format`, 1280×900; inspected `.amp/in/artifacts/coding-3-okf.png`.
  - `/summaries/coding-with-agents/how-to-build-a-self-improving-company-with-ai`, 1280×900; inspected `.amp/in/artifacts/coding-3-company.png`.
  - `/summaries/coding-with-agents/ending-ai-slop-thais-castello-branco-taste-labs`, 390×844 narrow Chromium (not a phone); inspected `.amp/in/artifacts/coding-3-taste-narrow.png`.
- First screenshot attempt captured resource headers rather than article bodies. Replaced with scrolled body captures; view_media confirmed readable introductions/bullets, normal vertical continuation, and no horizontal clipping. Header resource descriptions are outside summary ownership and were not changed.
- `npm run lint:fix`: 457 files checked, no fixes applied. Ownership/frontmatter assertion passed for all 14 changed files.
- Local commit: `28b73d84eccfd04591c03ad4687f107500f0c972` (14 owned summaries only). Pre-commit timestamp validation passed. Worktree contains only this uncommitted ledger; screenshots are ignored artifacts. No push or deployment.
