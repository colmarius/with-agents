---
title: "How to classify and redact sensitive data"
resourceId: 64
date: "2021-03-24"
collection: "google-cloud-get-started"
order: 10
videoId: "LxDHd0MsFXI"
---

This Node.js example sends text to the Data Loss Prevention (DLP) API to find potentially sensitive information. Despite the title, it **detects a name and email address; it does not redact them**. [00:01–02:45](https://www.youtube.com/watch?v=LxDHd0MsFXI&t=1s)

### Key Points Covered

- The setup enables the API and gives a service account the Cloud DLP User role. The local sample uses that account's credentials to authenticate its requests. [00:01–02:06](https://www.youtube.com/watch?v=LxDHd0MsFXI&t=1s)
- The Node.js path clones sample code, installs the client library, and supplies a project ID through an environment variable. [01:03–02:06](https://www.youtube.com/watch?v=LxDHd0MsFXI&t=63s)
- Running `inspectString.js` prints findings to the console. The result identifies potentially sensitive text rather than returning a version with that text removed or masked. [02:06–02:45](https://www.youtube.com/watch?v=LxDHd0MsFXI&t=126s)

Full video: <https://www.youtube.com/watch?v=LxDHd0MsFXI>
