---
title: "Creating budgets and alerts for cost management"
resourceId: 67
date: 2019-10-22
collection: google-cloud-beyond-your-bill
order: 6
videoId: "F4omjjMZ54k"
---

Cloud Billing budgets warn teams about spending; they do not stop usage or impose a hard cap. This 2019 walkthrough shows how to choose what a budget monitors and distinguish a warning about recorded cost from a forecast of the month's final cost.

### Key Points Covered

- **Scope the budget to the cost you want to watch.** The demo supports an entire billing account or combinations of projects and products, such as production projects or BigQuery spending. Targets can be fixed amounts or based on the previous month's spending for that scope. [00:00–03:06](https://www.youtube.com/watch?v=F4omjjMZ54k&t=0s)
- **Choose whether credits count.** Including credits subtracts discounts, promotions, or grants from the monitored cost. Multiple percentage thresholds let the same budget warn at several stages rather than only when the full amount is reached. [03:06–04:08](https://www.youtube.com/watch?v=F4omjjMZ54k&t=186s)
- **Actual and forecast alerts trigger for different reasons.** In the example, a 50% actual-cost threshold on a $1,000 budget warns after recorded cost exceeds $500. A 110% forecast threshold warns when the predicted month-end cost reaches $1,100, even early in the month. Cost updates are delayed, so these are not instantaneous spending controls. [03:06–05:11](https://www.youtube.com/watch?v=F4omjjMZ54k&t=186s)
- **Notification is separate from enforcement.** Email alerts inform people; Pub/Sub notifications can feed programmatic responses. The presenter explicitly says budget alerts do not stop resources from running. [04:08–05:48](https://www.youtube.com/watch?v=F4omjjMZ54k&t=248s)

Full video: <https://www.youtube.com/watch?v=F4omjjMZ54k>
