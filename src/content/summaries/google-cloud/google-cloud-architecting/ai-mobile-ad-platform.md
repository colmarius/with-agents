---
title: How to build an AI-powered mobile ad platform
resourceId: 68
date: 2022-02-05
collection: google-cloud-architecting
order: 8
videoId: Hc5xAK0cWgA
---

When an app offers an advertising slot, Moloco must decide whether to bid and at what price before the auction closes. Vice president of engineering Chang explains how the company's 2022 system separates that fast decision from slower model training and analysis.

### Key Points Covered

- **The deadline shapes the models.** Chang describes roughly 100 milliseconds for the response, including networking, leaving about 20 milliseconds or less to run predictions. Moloco uses wide but relatively shallow neural networks: many input features, fewer successive layers. It accepts more expensive training to keep prediction fast. [02:13–06:28](https://www.youtube.com/watch?v=Hc5xAK0cWgA&t=133s)
- **Bidding and feedback form a loop.** A bid processor on Google Kubernetes Engine (GKE) selects campaigns, retrieves user context and bidding history from Bigtable and BigQuery, and passes model inputs to TensorFlow Serving. After an ad is shown, impressions, clicks, and later engagement feed billing records and future training examples. [08:33–12:49](https://www.youtube.com/watch?v=Hc5xAK0cWgA&t=513s)
- **Stored events support different kinds of work.** Raw events in Cloud Storage can be replayed; Dataflow transforms stored data into model inputs for training. Trained models return to the bidding system, while analysts use Looker over BigQuery to investigate changes in results and market conditions. [13:54–17:01](https://www.youtube.com/watch?v=Hc5xAK0cWgA&t=834s)
- **Efficiency is measured per bid, not just by total spend.** Chang tracks how many bid responses a dollar buys as traffic grows. He attributes cost improvements to GKE autoscaling and a wider choice of node types; Bigtable's garbage collection also removes old data automatically. [17:01–21:17](https://www.youtube.com/watch?v=Hc5xAK0cWgA&t=1021s)

Full video: <https://www.youtube.com/watch?v=Hc5xAK0cWgA>
