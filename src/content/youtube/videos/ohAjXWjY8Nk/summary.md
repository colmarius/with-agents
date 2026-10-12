---
title: "Miglioramento di ZX2040 attraverso Opus 5.5: speedup e emulazione del Commodore 64"
videoId: ohAjXWjY8Nk
sourceUrl: "https://www.youtube.com/watch?v=ohAjXWjY8Nk"
publishedAt: "2026-10-11T14:52:40Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo walks through improving his ZX2040 Spectrum emulator with Opus 5.5, then adding Commodore 64 emulation to the same RP2040 device. The useful engineering story is not simply faster code generation: it is choosing which hardware details to simulate, retaining timing-sensitive behavior, and checking desktop results against a constrained physical device. [00:02:01]-[00:06:01], [00:29:23]-[00:32:35], [00:45:34]-[00:49:29]

The session combines his architectural direction, model-generated changes and test reports, and his commentary on device demonstrations. Its performance figures describe particular builds and workloads, not a general benchmark or a guarantee of compatibility. [00:24:19]-[00:28:17], [00:53:57]-[00:57:53]

## Key Ideas

- **Reduce simulation work without discarding the timing that games observe.** Sanfilippo replaces a Z80 core that advances one clock cycle at a time with one that executes an instruction and accounts for its cycles. He reports that the optimized Spectrum emulator can run at 200 MHz rather than the previous 400 MHz. A separate display problem requires synchronization, not merely speed: copying video memory at the wrong point can capture sprites while a game is rewriting them. He requests scanline updates aligned with the emulated video timing and reports that the flicker disappears after the change. [00:02:01]-[00:06:01]
- **Test memory savings against timing stability on the device.** To leave RAM for the C64 emulator, he asks Opus to move the Spectrum code and ROM into flash, first discussing cache misses, contention between the two cores, and audio timing. The requested tests run for only one or two minutes per configuration. He reports 50 frames per second at 266 MHz, modest extra CPU busy time, and no visible corruption during the 266/280 MHz trials. These are short, workload-specific observations; acceptable average speed alone would not rule out timing glitches. [00:13:51]-[00:16:00], [00:19:58]-[00:28:17]
- **Separate the emulator rewrite from the embedded port.** He asks Opus to adapt the desktop C64 emulator first, removing the pin-level interface and moving CPU execution to instruction-sized steps before integrating it into ZX2040. He allows reduced SID sound-chip accuracy but asks to preserve VIC-II video compatibility, using demanding demos as tests. He later describes old/new comparisons of images and registers and a report of bit-identical results after 10,000 frames. Passing those comparisons does not establish that the code will be fast enough on the RP2040. [00:29:23]-[00:32:35], [00:37:46]-[00:39:36]
- **The C64 bottleneck is video work, not just CPU instruction dispatch.** The initial conversion yields little speed improvement, and an early device run reaches only about 10% of real-time speed. Sanfilippo pushes for a different VIC-II implementation: capture register writes and relevant display state, then render from that record instead of reproducing the chip's internal work cycle by cycle. The discussion explicitly rejects retaining only one final frame state, because mid-frame changes and sprite multiplexing matter; it separates state tracking from rendering, with the second core doing rendering work. [00:39:36]-[00:42:32], [00:45:34]-[00:49:29], [00:53:08]-[00:53:57]
- **The model also helps revise one of his hardware assumptions.** Sanfilippo had lowered the device clock for flash access. During the conversation he recognizes that a separate flash clock divider can allow a 400 MHz CPU clock with flash running at 100 MHz. He treats this as something he had missed in the earlier implementation, rather than an idea he supplied to the model. [00:50:20]-[00:52:13]
- **The session ends with a combined emulator, not an exhaustive compatibility result.** Sanfilippo reports that rendering slowdowns were addressed and that both Spectrum and C64 modes run in the same 400 MHz build. He reports the demanding C64 demos running with sound, then describes switching from the Spectrum menu into a C64 demo on the device. His enthusiastic assessment includes border sprites and audio; the recording does not supply a broad game test matrix or long-duration stability study. [00:53:57]-[00:57:53]

## Practical Implications

- Editorial: Stage risky work so that each step answers a different question: desktop comparisons for behavior, device measurements for throughput, and timing-sensitive demos for compatibility. Here, a successful CPU rewrite still left the dominant video cost unresolved. [00:29:23]-[00:32:35], [00:37:46]-[00:49:29]
- Editorial: Give an agent explicit invariants as well as optimization goals. Preserving mid-frame video effects and supporting both machines through one menu constrained which simplifications were acceptable. [00:31:30]-[00:32:35], [00:41:26]-[00:44:24]

## Questions and Tensions

- Editorial: How much fidelity can the cheaper VIC-II representation retain outside the demonstrated workloads? The session reports success on demanding demos, but preserving those examples is not proof that every timing-sensitive program or collision case is correct. [00:41:26]-[00:42:32], [00:53:08]-[00:54:57]
- Editorial: The account supports a strong result from this human-model collaboration, not a general ranking of Opus against programmers or other models. Sanfilippo's broader reaction to the model's ability is personal interpretation, while the session itself repeatedly depends on his diagnosis and architectural constraints. [00:06:50], [00:29:23]-[00:32:35], [00:46:36]-[00:49:29]

## Source

- Original video: https://www.youtube.com/watch?v=ohAjXWjY8Nk
- Captured Italian auto-generated captions: [transcript.md](./transcript.md)
