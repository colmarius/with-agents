---
title: "How to use Cloud Speech-to-Text with cURL"
videoId: SPcFViKU_xU
sourceUrl: "https://www.youtube.com/watch?v=SPcFViKU_xU"
publishedAt: "2022-03-22T17:00:14Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates a 2022 synchronous Speech-to-Text REST request with cURL, using a FLAC object in Cloud Storage and reading the returned transcript and confidence value.

## Key Ideas

- The setup enables the Speech-to-Text API and configures credentials before making a REST request. [00:00:04]-[00:01:06]
- The JSON request identifies FLAC encoding, a 16,000 hertz sample rate, and a Cloud Storage URI for the audio. [00:01:06]-[00:02:07]
- A cURL call sends the request to `speech.googleapis.com` and returns transcribed text with an estimated confidence value. [00:01:06]-[00:02:07]

## Practical Implications

- Use current Speech-to-Text API documentation to confirm the endpoint, model, recognition configuration, request limits, and authentication flow.
- The Google Cloud SDK in the 2022 narration is now named the Google Cloud CLI; console steps and command examples should be checked against current docs.
- Prefer current credential guidance and avoid long-lived downloaded service-account keys where a safer managed or short-lived credential is available.

## Questions and Tensions

- Confidence is an estimate, not a guarantee of transcript correctness; downstream use needs quality checks appropriate to its risk.
- The synchronous single-file example does not cover streaming, longer audio, speaker handling, privacy, retention, or production error handling.

## Source

- [Video](https://www.youtube.com/watch?v=SPcFViKU_xU)
- [transcript.md](./transcript.md)
