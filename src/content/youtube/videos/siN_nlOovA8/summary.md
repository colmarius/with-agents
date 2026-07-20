---
title: "Come costringere le AI a dirci ciò che non vogliono: breve analisi di due paper"
videoId: siN_nlOovA8
sourceUrl: "https://www.youtube.com/watch?v=siN_nlOovA8"
publishedAt: "2025-11-24T12:53:06Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo discusses the tension between model safety and usefulness through two reported jailbreak approaches: poetic paraphrasing and removal of an activation direction associated with refusal. He treats the ablation result as a possible clue to the paraphrasing claim, but emphasizes that his own informal attempts did not reliably reproduce that claim.

## Key Ideas

- Providers train models to refuse requests that could facilitate harm, but many security questions are dual-use: the same vulnerability analysis can help repair a system or help attack one. Sanfilippo contrasts those ambiguous cases with requests that have little obvious legitimate purpose. [00:00:01]-[00:04:31]
- He describes adversarial testing as a necessary counterpart to alignment research. On locally controlled models, prefilling an affirmative response can condition later tokens away from refusal; he relates this to extending a reasoning trace with a forced continuation. [00:05:47]-[00:09:30]
- One paper, as he reports it, finds that rewriting harmful requests in poetic or archaic language can increase compliance. Sanfilippo says his own tests worked only on milder requests and failed on more serious ones, so he could not independently verify the broad result. [00:10:42]-[00:11:43]
- The researchers reportedly found smaller models more resistant and hypothesized that they understood oblique prompts less well. Sanfilippo doubts this explanation because smaller models in his tests could explain the paraphrased requests; he instead proposes that larger models may overfit a narrower balance between helpfulness and refusal. [00:12:45]-[00:15:03]
- In the ablation study he describes, researchers average activations for allowed and disallowed prompts, subtract them, and identify a direction associated with refusal. He says that direction appears across Transformer blocks and becomes stronger in later, more conceptual layers. [00:16:11]
- The refusal direction can reportedly be canceled during inference or suppressed through a permanent weight modification. Sanfilippo also notes the existence of open-source software implementing the weight-editing approach for local models. [00:17:30]
- He hypothesizes that unusual wording weakens the early formation of the refusal signal, leaving later conceptual layers unable to amplify it enough to outweigh helpfulness. He presents this as an interpretation connecting the two papers, not as a demonstrated mechanism. [00:18:43]
- His final tests continued to produce refusals even after extreme paraphrasing. He offers other explanations for the paper's result, including changed alignment behavior, dataset-specific overfitting, or ordinary rewording rather than poetry being the decisive factor. [00:19:54]-[00:22:33]

## Practical Implications

- Evaluate safety behavior separately for clearly malicious requests and genuinely dual-use professional tasks.
- Distinguish attacks that require control of local inference or weights from behavior available through a provider-controlled API.
- Compare poetic rewrites with plain-language paraphrases and untouched prompts before attributing an effect to literary style.
- Treat activation editing as a causal intervention that needs behavioral, capability, and safety measurements beyond a successful jailbreak rate.

## Questions and Tensions

- The transcript does not name either paper, the tested datasets, model versions, refusal criteria, effect sizes, or statistical results, so its account cannot support a quantitative comparison.
- Sanfilippo's replication attempt is informal and sparsely specified, while his alternative explanation for the smaller-model result is also a hypothesis rather than a controlled finding.
- A decodable refusal direction may combine several correlated properties; suppressing it does not by itself explain how a model classifies intent or chooses between safety and helpfulness.
- Research that reveals alignment weaknesses can improve defenses while also lowering the cost of removing safeguards from open-weight models.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=siN_nlOovA8)
- [transcript.md](./transcript.md)
