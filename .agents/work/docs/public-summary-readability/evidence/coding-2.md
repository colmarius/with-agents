# coding-2 public-summary review

Scope: original sorted summaries slice [25:50], 25 files; 15 changed, 10 unchanged. All paths below are relative to src/content/summaries/coding-with-agents/. Baseline checkout remains 0b57c28; origin/main Claude Eval readability example was read using git show, without merging. No source sidecars, metadata, manifests, or other public files edited. No push or deployment.

Evidence notation: T means matching src/content/transcripts/coding-with-agents/<summary basename>.md. Y/<id> means reviewed src/content/youtube/videos/<id>/summary.md. Every public summary was read. Source reading was full for reviewed Y summaries and Kelley/Debois transcripts; targeted passages for several long interview transcripts as noted. This is an editorial pass against saved evidence, not original-audio verification or an independent validation of speakers' product claims.

## Per-file ledger

| File | Evidence read | Outcome and deeper-review anchors |
| --- | --- | --- |
| black-hat-usa-2026-the-breaking-news-the-openai-hugging-face-incident.md | T, relevant incident passages | Unchanged: useful causal account and attribution already present. No independent incident reproduction. |
| boris-cherny-we-cut-80-of-claude-codes-prompt.md | T, relevant interview passages | Unchanged: already explains harness reduction and keeps reported model behavior attributed. |
| bring-your-ai-agents-to-basecamp-rework.md | Y/oE1Y_6W4Mj8, full | Changed: remove standalone missing-safety-evidence paragraph; substantive claims and timestamps retained. |
| build-crew-episode-1.md | T, full including reread opening | Substantial: feedback/reproduction first, then focused intent and handoffs. 06:13–11:19 reproduction script; 11:19–13:50 tmux; 13:50–17:47 diagnosed startup wait and Oracle context; 19:32–24:28 restating intent; 27:09–31:48 distinct handoff preferences; 31:48–33:40 forking; 52:54–57:38 confirmation loops. Sharing warning 47:58–49:58 includes agent reading sensitive script into context. |
| build-crew-episode-2.md | T, relevant passages | Unchanged: existing explanation and attribution useful; no forced restructuring. |
| build-crew-episode-3.md | T, full | Substantial: ordinary reusable scripts/tool wrapper 07:28–11:31; Lua/JS execution and state restoration 15:32–20:30 explicitly exploratory; logging loop 22:38–26:34; asynchronous goal definition 27:36–34:29; sequential assignments 35:35–37:41; Swiss-cheese proposal 44:14–46:02 not proven result; real API/infrastructure checks 44:14–53:52 and 01:05–02:02, not implied safe sandbox; leadership closing 57:50–59:40 narrowed to what that passage states. |
| build-crew-episode-4.md | T, relevant passages across revised topics | Substantial: deliberate database/UI scenarios 14:49–18:43; mock-data design 19:33–20:34; diff context 23:13–24:16; scoped Document AI report 25:07–30:03; docs maintenance 32:59–35:41; user-invoked slash command vs agent-chosen toolbox 36:43–40:59 (historical version explicitly stated). |
| build-crew-episode-5.md | T, relevant passages across revised topics | Substantial: goal-guided editable handoff 14:28–20:27; simulated site visitor 23:22–28:20; reviewer 42:21–46:05; LazyGit/Yazi 47:50–49:53; Librarian repository pattern 49:53–53:40; deterministic code loop 57:26–59:32. Important correction 39:15–41:18: timer measures elapsed time; McBain explicitly does not know whether it helps or merely makes agent wait. |
| build-crew-episode-6.md | T, relevant passages across revised topics | Substantial: sequencing/attention 08:55–10:46 and 17:18–21:11; model cost/performance explicitly confined to divorce-assistant tool calling 11:38–13:35, not coding; project manager and still-unbuilt flooring app 29:57–40:08; targeted thread retrieval 40:56–50:08; eval batches/versioning/human legal ratings 50:54–54:56; courtesy remains personal preference 23:13–28:01. |
| build-crew-episode-7.md | T, relevant passages across revised topics | Substantial: corrected conflation. 03:55–09:01 describes latest-version response reduced from reported 3.5 MB to 35 bytes; 09:01–15:58 separately copies registry helper into standalone bootstrap with no shared module. Research/critique/human plan editing 16:53–24:12; API constraints/speculative cuts 24:12–33:26; scoped guidance/reread after formatter 37:10–40:59; fixed workflow plus model interpretation 44:02–50:12 and 53:09–58:13. |
| build-crew-episode-8.md | T, relevant passages | Unchanged: already concise and useful. |
| building-ambitious-software-jonathan-kelley-dioxus-labs-cognition.md | T, full | Changed: remove public caption-process paragraph, redundant editorial recap and timestamp-process footer. Main claims unchanged with attribution. Coordinator confirmed editorial-history note preserved in matching sidecar in coordinator checkout. |
| building-claude-code-with-boris-cherny.md | Y/julbw1JuAz0, full | Unchanged: no helpful source-backed rewrite identified. |
| building-codex-with-tibo-sottiaux.md | T, relevant passages and Capture provenance | Changed: lead with interface/agent boundary and define harness; remove process paragraph and repetitive editorial recap. Agent/interface boundary 18:44–21:55 and harness/model decisions 37:06–41:18 support opening; main claims retain existing exact citations. Sidecar already records English auto captions, no audio verification, absolute YouTube anchors, separate Substack transcript not merged and timing equivalence unverified. No extra sidecar needed. |
| building-opencode-with-dax-raad.md | Y/1VqKUrxR2C8, full | Unchanged: useful existing mechanism/qualification balance. |
| building-pi-and-what-makes-self-modifying-software-so-fascinating.md | Matching T, relevant interview passages | Unchanged: already source-attributed and concrete. |
| building-pi-in-a-world-of-slop-mario-zechner.md | Y/RjfbvDXpFls, full | Changed: define harness in opening; replace YOLO jargon with default no-approval behavior. Extensions/security policy/package sharing 07:06–09:42 (range extended to include full supporting content). |
| building-the-future-of-ai-coding-agents.md | Y/5H862RhMgOU, full | Unchanged: no helpful edit identified. |
| building-with-llms-finding-a-co-founder-other-listener-questions-rework.md | Y/GifToS0FTII, full | Changed: question and maintenance stakes first; remove standalone evidence/remainder note. Main claims and original ranges unchanged. |
| code-is-only-a-detail-in-software-history-salvatore-sanfilippo.md | Y/Ye6UFH2LfXU, full | Changed: remove public translation/process disclosure and final editorial meta-bullet; keep attributed thesis and concrete examples. Italian automatic-caption/editorial-English translation provenance remains in reviewed source summary. |
| coding-agents-ai-engineer-guided-playlist.md | Full reviewed Y summaries for ClWD8OEYgp8, -QFHIoCo-Ko, 4_VQBbs2iQA, 7gujZrJ9L5I, Up6WVA07QdE, il1c1a2FufU, li0SaBt9RDM, ugUeZ8-b-u0, F_RyElT_gJk, RjfbvDXpFls | Changed: reader-decision opening, less repeated editorial/process framing. Nine sourced stops and their caveats unchanged; related-source links retained. |
| coding-agents-dont-scale-themselves-neither-do-your-teams-patrick-debois-tessl.md | T, full | Changed: remove standalone evidence disclaimer; define dim factory beside risk-based autonomy 19:15–21:16; preserve proposed/forecast status. |
| collaborative-ai-engineering-maggie-appleton.md | Y/ClWD8OEYgp8, full | Changed: ACE 06:49–08:30 explained as shared sandbox/branch workspace and explicitly pre-technical-preview research prototype, rather than finished general product. |
| competing-with-giants-the-end-of-saas-other-listener-questions-rework.md | Y/wpdi1bp-EbU, full | Unchanged: already focused and attributed. |
| context-engineering-with-dex-horthy.md | Y/Usufn8IQJgw, full | Unchanged: clear existing definitions and source boundaries. |

## Gaps and provenance

No absent source prevented the changed passages. No original audio was checked. Existing summaries retained unchanged after targeted long-transcript reading are not claimed as fresh exhaustive line-by-line transcript audits. Caption errors and speaker claims remain evidence limits. Kelley provenance preservation is coordinator-owned and was confirmed by message; do not overwrite that sidecar during integration. Codex needs no further provenance addition. Sanfilippo provenance remains in reviewed source evidence. No sidecar edits included in this worker's transfer.

## Verification

- npm run check: 65 files, 0 errors, 0 warnings, 0 hints.
- npm test: 114 tests, 113 pass, 0 fail, 1 skipped.
- npm run build: complete, 332 pages built.
- npm run content:guard: passed, 287 summaries. Existing informational duplicate antirez-ai-concepts/8gg-oJr4dTY notice remains unchanged.
- npm run summaries:check: passed, 287 files.
- npm run lint:fix: 457 files checked, no fixes.
- git diff --check: passed. Script asserted all 15 changed paths belong to original 25 and frontmatter is byte-identical.
- Installed local pre-commit hook with npm run hooks:install.
- Browser: amp orb services ensure reused web. Inspected Build Crew 7 page and captured full screenshot; navigated Build Crew 1 and 5 and extracted rendered titles/citation labels and exact seek hrefs. Both had no horizontal overflow. Initial screenshot ended naturally at viewport bottom, so captured full page for review.
- Portal base: https://t-03guubpr2hbv7f42b3b2uq44c-p20300.onamp.dev/ ; routes /summaries/coding-with-agents/build-crew-episode-{1,5,7}.
- Representative review image: .amp/in/artifacts/coding2-build-crew7-review.png.

All changed paths are the 15 rows marked Changed or Substantial above. Ledger and screenshots are uncommitted transfer artifacts.
