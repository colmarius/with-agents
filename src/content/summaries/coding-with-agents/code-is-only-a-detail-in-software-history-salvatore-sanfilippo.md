---
title: "Il codice è solo un dettaglio, nella grande storia del software?"
resourceId: 39
date: "2026-08-10"
---

*All English wording below is an editorial translation/paraphrase of Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo responds to a widely shared essay about whether saying code was never the hard part devalues programmers. He rejects both the claim that implementation is trivial and the idea that implementation effort alone explains software's value.

His distinction is between implementation effort and the conceptual choices that decide what a system should be. Coding agents can automate part of the former because they inherit a programming culture built by people; that makes product intent, design, architecture, experiments, and judgment more consequential, not less.

### Key Points Covered

- **Code is a means inside the larger software problem**: Sanfilippo says the disputed phrase need not mean programming was easy. In his framing, software also includes deciding what to build and designing how it should work; once a feasible goal and sufficient resources exist, implementation is difficult work in service of that goal ([00:00:57–00:03:03](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=57s)).
- **Implementation skill and conceptual direction reinforce each other**: John Carmack's programming ability mattered, but Sanfilippo argues that the same ability without a vision for the games would not have produced id Software's work ([00:04:08–00:05:06](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=248s)).
- **Fabrice Bellard exemplifies exceptional implementation leverage**: QEMU and FFmpeg required unusual technical skill and made important capabilities broadly available; QuickJS is his further example of a compact implementation. Sanfilippo nevertheless distinguishes these contributions from originating concepts such as virtualization or media compression, which predated those implementations ([00:05:06–00:08:10](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=306s)).
- **Redis is his counterexample from personal experience**: He presents the database's in-memory model, fork-based persistence, replication strategy, and data-structure interface as the decisive ideas. The code was substantial work, but he locates the project's pivotal moments in those design choices ([00:08:10–00:10:06](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=490s)).
- **Automation depends on programming culture rather than nullifying it**: Because stable code was difficult to produce, people built a large programming culture around it. Sanfilippo argues that language models can automate some coding precisely because people created that culture ([00:10:06–00:11:09](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s)).
- **Cheaper implementation raises the relative value of invention**: He divides programming into implementation and conceptual work, then argues that reducing manual implementation effort puts more emphasis on program design, architecture, and genuinely new capabilities ([00:11:09–00:13:16](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=669s)).
- **Coding agents change who can realize ambitious systems**: Sanfilippo contrasts programmers who could implement assigned work but lacked a larger product idea with people whose ideas exceeded their implementation capacity. He uses his roughly 150,000-line DwarfStar project as an example of automation making a previously impractical build possible ([00:12:12–00:14:20](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=732s)).
- **The examples illustrate a thesis rather than prove a universal split**: The talk does not measure how much value belongs to design versus implementation, and its categories overlap in practice. Its useful challenge is to stop treating implementation effort and conceptual judgment as interchangeable when deciding what agents automate and what humans still need to own.

[Watch the video on YouTube](https://www.youtube.com/watch?v=Ye6UFH2LfXU).
