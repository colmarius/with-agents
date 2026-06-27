# YouTube Transcript Summary Prefill Research

Updated: 2026-06-27

## Desired workflow

Input: a YouTube URL such as <https://www.youtube.com/watch?v=DPgJjRdQWrg>.

Output:

- normalized video metadata: `videoId`, title, channel/source, duration, URL, publish date when available, thumbnail
- transcript text with timestamps when captions exist
- a draft resource JSON object for `src/data/resources/coding-with-agents.json`
- a draft summary markdown file compatible with `src/content.config.ts`

## Transcript extraction options

1. **Node transcript package**
   - `youtube-transcript-plus` is a maintained Node package for YouTube captions/transcripts. It requires Node >=20 and notes that it uses unofficial YouTube APIs, so it can break if YouTube changes internals.
   - `@danielxceron/youtube-transcript` is another maintained fork with HTML scraping plus InnerTube fallback and no dependencies.
   - Pros: easiest to integrate in a TypeScript/Node repo; likely enough for one-off resource drafting.
   - Cons: unofficial APIs; may fail from production/server IPs; adds dependency if committed to `package.json`.

2. **`yt-dlp` subtitles mode**
   - Typical command shape: `yt-dlp --skip-download --write-subs --write-auto-subs --sub-langs en --sub-format vtt <url>`.
   - Pros: battle-tested and handles many YouTube changes.
   - Cons: `yt-dlp` is not currently installed in this workspace; adding a binary dependency or requiring a local install makes onboarding heavier.

3. **Direct YouTube web endpoints**
   - A YouTube watch page exposes video metadata and caption/engagement-panel data in `ytInitialPlayerResponse` and `ytInitialData`.
   - Pros: no package dependency.
   - Cons: brittle. Local testing found caption metadata but direct timedtext/get_transcript calls did not return usable text without additional client state.

4. **Hosted extractor APIs**
   - Apify/Decodo-style transcript APIs can return transcript plus metadata.
   - Pros: more reliable at scale; handles proxy/anti-bot concerns.
   - Cons: external accounts/secrets/cost; overkill for a local content-prefill workflow unless scraping becomes unreliable.

## Example video probe

Video: "Pi Building Pi, Openclaw's Minimalist Coding Agent | Mario Zechner, Creator of Pi"  
URL: <https://www.youtube.com/watch?v=DPgJjRdQWrg>

Local page metadata probe found:

- `videoId`: `DPgJjRdQWrg`
- title: `Pi Building Pi, Openclaw's Minimalist Coding Agent | Mario Zechner, Creator of Pi`
- channel: `The Modern Software Developer`
- duration: `5447` seconds (~1h30m47s)
- captions: one English auto-generated caption track is advertised by the watch page

Local direct caption fetch notes:

- The advertised `api/timedtext` caption `baseUrl` returned an empty body from this environment, even with `fmt=json3` and `fmt=vtt` appended.
- The `youtubei/v1/get_transcript` endpoint was discoverable in the page, but a direct POST failed with `FAILED_PRECONDITION`, likely due to missing/invalid YouTube client state.
- This makes a maintained transcript package or `yt-dlp` a better first implementation than hand-rolling direct endpoints.

## Content schema notes

- Summary files require frontmatter fields from `src/content.config.ts`: `title`, `resourceId`, and optional `series`, `episode`, `date`.
- Series resources are grouped in `src/components/resources/CodingWithAgents.tsx` by matching `resourceId` and `series`.
- A safe first version should draft files outside `src/` unless `--apply` is explicitly provided, to avoid accidentally publishing low-quality AI summaries.
