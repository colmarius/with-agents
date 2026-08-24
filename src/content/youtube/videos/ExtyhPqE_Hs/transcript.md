---
title: "Using object versioning"
sourceUrl: "https://www.youtube.com/watch?v=ExtyhPqE_Hs"
videoId: "ExtyhPqE_Hs"
capturedAt: "2026-08-24T21:54:44.240Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 121
---

## Transcript

[00:00:01] [Music] today i'll show you how to use Object Versioning with Cloud Storage and some examples of working with versioned objects so as you can see i've got a storage bucket already set up named tiny homes and i've put a few photos of my favorite tiny homes in the bucket so using our console what we want to do is we want to type in the command gsutil versioning set on gs://tiny-homes this will enable versioning for the tiny homes bucket that tells Cloud Storage to create a new version of an object each time the live version of the object is overwritten or deleted if i want to stop versioning all i have to do is write this command gsutil versioning set off gs://tiny-homes if i ever need to see whether or not versioning is enabled it's very easy to figure that out we can just quickly write this command called gsutil versioning get gs://

[00:01:05] tiny-homes and as you can see if we get enabled this means that versioning is enabled for this bucket now let's work with some versioned objects here is my tiny homes bucket filled with tiny home pictures i've uploaded multiple versions of tiny home to this bucket only the most recent version is visible in the bucket but i can see all the versions that have existed with this command if i want to access any version that's not the most recent all i need to do is just append the generation number to the object like this there now you have it you too can manipulate past or present versions of your storage objects you
