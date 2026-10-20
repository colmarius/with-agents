---
addedDate: '2026-10-20'
title: "The safest way to store Bitcoin was just hacked..."
resourceId: 185
date: '2026-08-05'
collection: fireship
order: 27
videoId: 2X2V3xv_jik
---

Fireship alleges a Coldcard wallet failure in which firmware selected a weak random-number generator despite dedicated security hardware. This summary uses English auto-generated captions, not firmware, vendor advisories, or blockchain analysis. The named vendor, exploit, losses, and rescue account are unverified claims in this report, not independently established incident facts.

## Key ideas

- Fireship explains that wallet safety depends on unpredictable seed generation, not just keeping a key offline. In his account, a dedicated hardware entropy source provided no protection because the software path allegedly never used it. The twelve-word example is an illustration, not a universal description of every wallet. [00:00–02:06](https://www.youtube.com/watch?v=2X2V3xv_jik&t=0s)
- The alleged implementation error confuses a flag being undefined with a flag defined as zero. Fireship says two generators exposed the same function name and a preprocessor check consequently selected MicroPython's general-purpose generator rather than the intended cryptographic generator. [01:03–03:09](https://www.youtube.com/watch?v=2X2V3xv_jik&t=63s)
- The selected generator reportedly depended on serial numbers and timer values, shrinking the search space enough for attackers to enumerate candidate keys. This is the video's proposed mechanism, not a reproduced exploit or proof that all devices are affected. [02:06–03:09](https://www.youtube.com/watch?v=2X2V3xv_jik&t=126s)
- Fireship says patching firmware cannot secure coins already controlled by predictable keys: holders must transfer them to fresh keys. He describes attackers competing with rescue transactions using the same compromised signing authority, and private submission to a miner as the reported workaround to public-mempool observation. [03:09–05:10](https://www.youtube.com/watch?v=2X2V3xv_jik&t=189s)

## Practical implications

Editorial: Test which randomness implementation the shipped build actually selects, including the distinction between undefined and zero-valued feature flags. If keys are compromised, distinguish preventing future key-generation failures from moving assets away from old keys; consult verified incident guidance before acting on this unconfirmed report.

## Questions and limits

Editorial: Loss totals vary within the narration, and no affected firmware versions are established here. The suggestion that Lovable would have prevented the failure is an advertising joke, not a security conclusion; the closing app-building example is sponsored promotion. [00:00–01:03](https://www.youtube.com/watch?v=2X2V3xv_jik&t=0s), [02:06–05:10](https://www.youtube.com/watch?v=2X2V3xv_jik&t=126s)

Full video: <https://www.youtube.com/watch?v=2X2V3xv_jik>
