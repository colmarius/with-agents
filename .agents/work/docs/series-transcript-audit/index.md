# Audit past series transcripts

Status: completed
Category: docs
Updated: 2026-09-26

## Why

After adding Raising an Agent S2E5, the user asked to check transcripts for past episodes across all series and update them. Preserve source evidence and existing editorial corrections while repairing actual gaps or transcription errors.

## Summary

Inventory covers 42 published episode summaries in seven series: Raising an Agent seasons 1 and 2, Build Crew, Craft and Chaos, Next Token, State of Agentic Coding, and ZIP. There are 41 transcript sidecars; Next Token episode 1 explicitly points only to X. S2E5 was just added from the official untimed transcript. The other 40 sidecars have timestamped text through their final minute. Audit existing evidence and available publisher transcripts without force regeneration, playlist expansion, or adding new episodes. Update summaries only where a source correction affects their claims.

Updated 40 older transcripts: Raising an Agent S1 (10), S2 (4), Build Crew (8), Craft and Chaos (2), Next Token (1), State of Agentic Coding (10), and ZIP (5). Corrections cover source-supported person/product names and clear caption substitutions. Official Amp transcripts support meaning-changing repairs such as fix UI → fix CI, 120th → one twentieth, architecture revenue → architecture review, and inference provider → infra provider. Existing summaries already express the intended claims and remain unchanged.

Checked the apparent Next Token episode-1 YouTube candidate `AvjACmiik8U`: its channel is NextTokenShow, hosted by Sunil Pai, Dillon Mulroy, and Rhys Sullivan, not Amp's older Ryan Carson/Thorsten Ball series. It is not a replacement for the X-only broadcast. No missing sidecar was fabricated.

Verification: all 40 changed transcript prefixes (frontmatter and source notes), timestamp sequences, and line counts match the prior commit exactly. Reviewed token-level diffs and repaired over-broad substring replacements before final checks. `npm run lint:fix` applied no changes; `npm run check` reported 0 errors/warnings/hints; `npm test` passed 138/138 with no skips; `npm run build` built 383 pages; `npm run summaries:check` passed 330 summaries; `npm run content:guard` passed; library status and structural audit passed with existing duplicate-manifest notices. No rendered content changed in this batch, so no additional browser check was required.

Limits: no original-audio review or destructive caption regeneration. Ambiguous model versions, collapsed phrases, unverified domains, and names remain unchanged rather than guessed. Amp's S1E10 official transcript is condensed and cannot establish completeness. S2E3/E4 publisher-page dates differ from existing summary dates by one day; dates were left unchanged because this transcript audit does not establish whether those represent distinct recording/upload/publication dates.

## Artifacts

- Research: none
- PRD: none
- Plan: none
- Progress: none
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
