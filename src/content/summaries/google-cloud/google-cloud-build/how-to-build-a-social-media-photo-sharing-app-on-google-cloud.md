---
title: "How to build a social media photo sharing app on Google Cloud"
resourceId: 65
date: "2022-09-08"
collection: "google-cloud-build"
order: 5
videoId: "BX9BIHRfab0"
---

Priyanka and Christopher walk through a 2022 reference architecture for a pet photo-sharing application. Accounts, captions, large media files, and notifications have different storage and processing needs; the design assigns each a separate role as the site grows.

### Key Points Covered

- **Growth exposes separate architecture concerns**: The application begins with accounts, feeds, follows, and post creation, then adds questions about serving, authentication, traffic, networking, and databases [01:02–03:09](https://www.youtube.com/watch?v=BX9BIHRfab0&t=62s).
- **Serving scales separately from account management**: Christopher proposes Cloud Run to add application capacity as requests grow, with regional deployments behind Cloud Load Balancing to serve users nearby. Cloud Build automates deployment from code changes, while Identity Platform handles account creation and sign-in [03:09–05:19](https://www.youtube.com/watch?v=BX9BIHRfab0&t=189s).
- **Media and metadata use different stores**: Profile information and captions go into the relational database, Cloud SQL; images and videos go into Cloud Storage. Christopher proposes functions to resize media, with translation and recommendation models as optional enhancements rather than requirements for posting a photo [04:14–08:33](https://www.youtube.com/watch?v=BX9BIHRfab0&t=254s).
- **Caching and notifications serve different access patterns**: A content delivery network (CDN) caches frequently accessed content, while Pub/Sub carries messages for new followers and comments. The presentation names these roles but does not explain when a cached post is refreshed or how a failed notification is retried [08:33–10:40](https://www.youtube.com/watch?v=BX9BIHRfab0&t=513s).

Full video: <https://www.youtube.com/watch?v=BX9BIHRfab0>
