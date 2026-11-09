---
addedDate: '2026-10-20'
title: "A single PR just hijacked the NPM registry..."
resourceId: 185
date: '2026-05-14'
collection: fireship
order: 47
videoId: gwTQLZSIlsU
---

Fireship describes an alleged supply-chain attack on TanStack's npm packages. An attacker's pull request ran in a privileged CI workflow, poisoned a shared cache, and later hijacked a legitimate release. This summary uses English auto-generated captions, not workflow files, malware, or incident advisories. Package counts, destructive behavior, and tool-version defaults are attributed claims that require official confirmation before incident response.

## Key ideas

- In npm's trusted publishing, GitHub signs a statement naming the workflow, repository, and branch, and npm checks it against the organization's allow list before issuing a publish token that expires within minutes. Fireship's central point is that authenticating the release pipeline does not make the code that pipeline runs trustworthy. [00:54–02:53](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=54s)
- The attacker opened and immediately closed a pull request from a fork. Because the workflow used the `pull_request_target` trigger, that pull request ran with the main repository's permissions, which let the attacker's code write a poisoned file into the GitHub Actions cache shared between jobs. When an unrelated pull request was later merged, the release job ran the poisoned file, which took the npm publish token and published compromised packages. The broken boundary is between untrusted contributions and trusted release execution. [01:57–02:53](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=117s)
- Fireship reports that the malware scanned infected machines for npm publishing tokens and used them to publish more poisoned packages, spread to PyPI through companies' Python SDKs, and embedded itself in Claude Code and VS Code so it ran again whenever the editor opened. The editor persistence explains how uninstalling the initial dependency might not remove an infection, but the specific affected packages and implementation were not inspected here. [02:53–04:59](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=173s)
- He warns that infected machines run a background process that checks every 60 seconds whether the stolen GitHub token still works and deletes files once it stops working. He recommends three pnpm 11 defaults: refusing packages published less than 24 hours ago, refusing transitive dependencies that come from Git repositories or tarball URLs instead of a registry, and blocking install scripts unless a package is explicitly approved. These measures reduce exposure; they are not a complete cleanup procedure or proof that a delay catches every malicious package. [03:57–06:03](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=237s)

## Practical implications

Editorial: Review what privileged workflows execute and which caches cross trust boundaries. For a suspected infection, consult verified response guidance before changing credentials on the affected machine; this commentary's destructive-trigger claim makes improvised cleanup especially inappropriate.

## Questions and limits

Editorial: The narration differs on whether destructive behavior targets a home folder or root directory, so its exact scope is unresolved. Claims about pnpm versions and defaults are dated and unverified here. Sentry's closing investigation and repair workflow is sponsored promotion, not evidence of prevention or safe remediation. [00:00–00:54](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=0s), [03:57–06:16](https://www.youtube.com/watch?v=gwTQLZSIlsU&t=237s)

Full video: <https://www.youtube.com/watch?v=gwTQLZSIlsU>
