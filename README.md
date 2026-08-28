# Kolkata Radio — Purono o Notun

A single-page nostalgia radio site: two playlists (old Hindi classics from
Purono Kolkata, new Bengali Arijit Singh hits from Notun Kolkata), streamed
live through the YouTube IFrame Player API, styled as a floating glass
player over a hero illustration that swaps with the active playlist.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you ship this — required steps

### 1. Add real YouTube video IDs (blocking)

Every track in `lib/tracks.ts` currently has `videoId: "TODO"`. I didn't
pick these myself — your own brief correctly asked me not to search for or
select copyrighted commercial tracks on your behalf, and all 76 songs in
your list are commercially released Bollywood/Bengali music.

For each track, find a video you have the right to use — either your own
upload, or the official upload from the rights holder's channel (T-Series,
Saregama, SVF, Zee Music, Eskay Music, etc.) with embedding enabled — and
paste its video ID in. It's a one-line change per song:

```ts
{ id: "p01", title: "Yeh Shaam Mastani", artist: "TODO: singer", film: "Kati Patang", year: 1971, videoId: "TODO" }
                                                                                                    ^^^^^^^^^^^^^^ replace this
```

The player already handles the case where a video gets pulled or embedding
gets disabled later (`onError` auto-skips to the next track), but it can't
work at all until real IDs are in place.

### 2. Fill in singer names for the Purono Kolkata list

Your docx listed title/film/year for the old Hindi classics but not the
playback singer, so `artist` is a placeholder (`"TODO: singer"`) for all 39
of those tracks. I didn't want to guess and risk attributing a song to the
wrong singer. The Notun Kolkata list is fine as-is — your docx confirmed
every track there is Arijit Singh.

### 3. Point the social links somewhere real

`components/SocialLinks.tsx` has Instagram/YouTube/WhatsApp icons all
linking to `#`. Swap in your actual URLs (or remove any you don't have).

### 4. Listener count is simulated

`components/ListenerCount.tsx` shows a gently drifting number for
atmosphere — it isn't wired to a real stream or analytics backend. Replace
it with a real count if you have one, or leave it as a design flourish.

## Letting visitors pick their own song

There's a list icon (☰) in the player — desktop pill (bottom-right) and
mobile card (bottom-right of the transport row). Tapping it opens a
scrollable list of every track in the current playlist; tapping any track
loads and plays it immediately. It's driven by `selectTrack()` in
`lib/PlayerContext.tsx` and rendered by `components/TrackListPanel.tsx`.
This only works once real `videoId`s are filled in per the section above —
picking a `TODO` track just loads nothing.

## Structure

- `app/page.tsx` — page layout (server component)
- `lib/PlayerContext.tsx` — owns the YouTube player instance, playlist/track
  state, and transport controls
- `lib/tracks.ts` — your two playlists
- `components/Player.tsx` — portals the single YouTube iframe into whichever
  of the desktop pill / mobile card layouts is currently active, so there's
  always exactly one visible player and never a hidden background one
- `components/DesktopPlayer.tsx` / `MobilePlayer.tsx` — the two distinct
  layouts (not one reflowing layout, per spec)
- `components/Vinyl.tsx`, `SeekBar.tsx`, `Transport.tsx` — shared player UI
- `components/HeroBackground.tsx` — fixed background + grain overlay, swaps
  image with the active playlist
- `public/bg/purono-kolkata.png`, `notun-kolkata.png` — your two hero images

## Notes on deviations from the original spec

Your prompt described a single scene with a landscape (`scene-wide.png`) and
a separately-composed portrait (`scene-tall.png`) variant, swapped by
`orientation` media query. The two images you actually provided are both
landscape and depict two different scenes (old vs. new Kolkata) rather than
orientation variants of one scene — so the background now swaps by **active
playlist** instead (Purono Kolkata's image for that playlist, Notun
Kolkata's for the other), using `bg-cover` to hold up reasonably in portrait
too. If you'd rather have true portrait-composed versions, generate or crop
a `-tall` variant for each and I can wire up the orientation swap on top of
this.
