---
title: "How to build digital e-commerce platform on Google Cloud"
resourceId: 65
date: "2022-01-20"
collection: "google-cloud-build"
order: 3
videoId: "aOaR4GAcKYU"
---

Google Cloud developer advocate Priyanka Vergadia compares several 2022 routes to an e-commerce platform. The decision is how much a retailer needs to build and control: move an existing application, redesign its services, own just the storefront, or use a ready-made platform.

### Key Points Covered

- **Moving and redesigning are different levels of change**: A lift-and-shift migration keeps the web, application, and database tiers on Compute Engine virtual machines. The migrate-and-improve option uses containers on Google Kubernetes Engine (GKE), while still connecting to systems left on premises. Vergadia presents these as different starting points, not one mandatory sequence [04:15–10:38](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=255s).
- **A service-based redesign separates business functions**: Accounts, inventory, orders, and search become smaller services with their own storage choices. The example uses relational storage for inventory and products, document storage for sessions, and a cache for recently queried data. Vergadia argues that this lets teams deploy and develop services independently [10:38–12:45](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=638s).
- **Headless commerce keeps the storefront separate from commerce operations**: The retailer owns the customer-facing website or app but calls a provider's APIs for catalog, pricing, promotions, carts, and orders. The 2022 example uses commercetools behind a Google Cloud front end. By contrast, an out-of-the-box software-as-a-service platform suits the scenario where little customization is needed [02:07–04:15](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=127s), [12:45–14:53](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=765s).

Vergadia associates these options with faster delivery, lower cost, or better conversion, but the recording does not measure those outcomes. They are proposed benefits of the designs, not results from a comparative deployment. [00:00–04:15](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=0s), [12:45–14:53](https://www.youtube.com/watch?v=aOaR4GAcKYU&t=765s)

Full video: <https://www.youtube.com/watch?v=aOaR4GAcKYU>
