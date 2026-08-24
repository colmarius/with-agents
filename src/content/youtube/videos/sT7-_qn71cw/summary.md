---
title: "Google Cloud Persistent Disks"
videoId: sT7-_qn71cw
sourceUrl: "https://www.youtube.com/watch?v=sT7-_qn71cw"
publishedAt: "2018-08-20T18:45:37Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates a 2018 Compute Engine flow for creating a blank standard Persistent Disk, attaching it to a VM, formatting it, and mounting it from an SSH session.

## Key Ideas

- The console flow creates a 500 GB blank standard Persistent Disk and saves it as an additional disk on an existing VM. [00:00:00]-[00:01:03]
- The guest operating system must still discover and format the device before it can hold files. [00:01:03]-[00:02:11]
- The example creates a mount directory, mounts with discard enabled, and changes directory permissions so the disk can be used. [00:01:03]-[00:02:11]

## Practical Implications

- Confirm the actual device identifier before formatting; copying `/dev/sdb` blindly can destroy the wrong data.
- Use current Persistent Disk and guest-OS documentation for supported disk types, filesystem options, mount persistence, ownership, and backup policy.
- Treat the console path and commands as a 2018 quickstart snapshot, not a production storage runbook.

## Questions and Tensions

- The walkthrough mounts the disk for the current session but does not configure a persistent mount across VM restarts.
- Broad write permissions simplify the demo but may not match an application's ownership and security requirements.

## Source

- [Video](https://www.youtube.com/watch?v=sT7-_qn71cw)
- [transcript.md](./transcript.md)
