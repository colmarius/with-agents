---
title: "Defining SLIs with platform metrics"
resourceId: 63
date: "2021-06-02"
collection: "google-cloud-engineering-for-reliability"
order: 19
videoId: "uhpAScSerec"
---

Existing platform metrics can measure reliability without adding instrumentation to application code. This episode builds service-level indicators (SLIs), measurements of user-visible success, from load-balancer traffic, data-pipeline lag, and request logs, then sets service-level objectives (SLOs) as targets for those measurements ([00:00–01:02](https://www.youtube.com/watch?v=uhpAScSerec&t=0s), [07:19–09:25](https://www.youtube.com/watch?v=uhpAScSerec&t=439s)).

### Key Points Covered

- **Count successful requests or successful time intervals**: A request-based SLI divides good units of work by total work. A window-based SLI instead measures the fraction of time intervals in which the service meets a threshold. The available measurement determines which kind of ratio can be calculated ([00:00–01:02](https://www.youtube.com/watch?v=uhpAScSerec&t=0s), [05:13–06:17](https://www.youtube.com/watch?v=uhpAScSerec&t=313s)).
- **Filters encode product judgment**: The load-balancer example counts HTTP 200 responses as good and asks teams to decide deliberately whether responses such as 404s belong in the total ([02:06–04:11](https://www.youtube.com/watch?v=uhpAScSerec&t=126s)).
- **Use a windowed target when individual events cannot be counted**: The Dataflow example lacks per-element good-versus-total counts. Instead, it requires 99% of five-minute windows over 28 days to have average system lag below two seconds. This measures the fraction of acceptable windows, not the fraction of individual messages processed in under two seconds ([05:13–07:19](https://www.youtube.com/watch?v=uhpAScSerec&t=313s)).
- **Turn request logs into counts**: When the application logs a status for each request, a logs-based metric can count total requests and filter successful ones by status. The demonstrated availability SLI divides HTTP 200 responses by all requests ([07:19–09:25](https://www.youtube.com/watch?v=uhpAScSerec&t=439s)).

Full video: <https://www.youtube.com/watch?v=uhpAScSerec>
