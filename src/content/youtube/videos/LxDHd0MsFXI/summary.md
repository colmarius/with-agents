---
title: "How to classify and redact sensitive data"
videoId: LxDHd0MsFXI
sourceUrl: "https://www.youtube.com/watch?v=LxDHd0MsFXI"
publishedAt: "2021-03-24T15:00:14Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates a 2021 Node.js quickstart for the product then called the Data Loss Prevention API or Cloud DLP, now named Sensitive Data Protection. Despite the video title, the shown sample inspects text and identifies sensitive findings; it does not demonstrate redaction.

## Key Ideas

- The quickstart enables the DLP API, creates a service account with the Cloud DLP User role, and configures application credentials for a local sample. [00:00:01]-[00:02:06]
- The Node.js setup clones sample code, installs the DLP client library, and supplies the project ID through an environment variable. [00:01:03]-[00:02:06]
- Running `inspectString.js` identifies a name and an email address as potentially sensitive data in the input. [00:02:06]

## Practical Implications

- Use current Sensitive Data Protection documentation, terminology, client samples, and IAM roles; the 2021 Cloud DLP console flow and sample layout are dated.
- Prefer current credential guidance and short-lived, managed credentials where possible instead of downloading a long-lived service-account key by default.
- Keep this as security and data-governance cross-topic material; inspection is only one control and does not establish classification policy, redaction, access control, retention, or incident handling.

## Questions and Tensions

- Detection results are potential findings that require policy and context; the quickstart does not discuss false positives, confidence, or remediation.
- The title promises classification and redaction, while the demonstrated code path only inspects a string and logs findings.

## Source

- [Video](https://www.youtube.com/watch?v=LxDHd0MsFXI)
- [transcript.md](./transcript.md)
