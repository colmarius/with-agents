---
title: "How to use Cloud Speech-to-Text with cURL"
sourceUrl: "https://www.youtube.com/watch?v=SPcFViKU_xU"
videoId: "SPcFViKU_xU"
capturedAt: "2026-08-24T21:54:53.820Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 147
---

## Transcript

[00:00:04] welcome to the quickstart for Cloud Speech-to-Text which converts speech into text using Google's AI technologies in this video we walk through how to convert an audio file to text using the REST interface and the cURL command to get started with Cloud Speech-to-Text you need a Google Cloud project you can use an existing project or set up a new one in the Google Cloud console at console.cloud.google.com visit the APIs and Services section of the console and enable the Cloud Speech-to-Text API for your project next you need to set up authentication in the APIs and Services section click on credentials create a new service account and download the private key as JSON you can use these credentials to access Google Cloud APIs so make sure to keep this file secure and out of your code and public repositories to securely access the credentials from your project go to your terminal and set an environment variable to the path of

[00:01:06] your JSON file if you don't yet have the Google Cloud SDK installed on your machine then install and initialize it instructions are linked below create a new JSON request file add the following text and save it as a sync-request.json plain text file this JSON snippet indicates that the audio file has a FLAC encoding format a sample rate of 16,000 hertz and is stored in a Google Cloud Storage bucket at the given URI next use cURL to make a request to the speech.googleapis.com endpoint this cURL command specifies sync-request.json as the file name of the JSON request you just created run the cURL command and you should see the following response here we can see the transcribed text as well as a confidence value that estimates how likely it is that the transcription is accurate and that's it you now know how to make a call to the Cloud Speech-to-Text API using a cURL command make sure to check out the rest of our

[00:02:07] Cloud Speech-to-Text documentation at cloud.google.com/speech-to-text/docs [Music] you
