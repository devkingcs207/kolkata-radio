"use client";

import { useEffect } from "react";
import { playlists } from "@/lib/tracks";
import { usePlayer } from "@/lib/PlayerContext";

export default function TrackListPanel() {
  const { playlistIndex, trackIndex, selectTrack, isListOpen, closeList } = usePlayer();
  const tracks = playlists[playlistIndex].tracks;

  // Close on Escape.
  useEffect(() => {
    if (!isListOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeList();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isListOpen, closeList]);

  if (!isListOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <button
        aria-label="Close song list"
        onClick={closeList}
        className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
      />

      {/* Panel: full-height sheet on mobile, anchored dropdown on desktop */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 max-h-[70dvh] overflow-hidden rounded-t-3xl
        border border-white/10 bg-[#141118]/95 backdrop-blur-2xl
        sm:bottom-28 sm:left-1/2 sm:right-auto sm:w-[420px] sm:max-h-[60dvh]
        sm:-translate-x-1/2 sm:rounded-3xl sm:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <p className="text-sm font-semibold text-white">{playlists[playlistIndex].name}</p>
          <button
            onClick={closeList}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.88 18.3 9.17 12 2.88 5.71 4.3 4.29l6.29 6.3 6.3-6.3z" />
            </svg>
          </button>
        </div>

        <div className="max-h-[calc(70dvh-56px)] overflow-y-auto sm:max-h-[calc(60dvh-56px)]">
          {tracks.map((t, i) => {
            const active = i === trackIndex;
            return (
              <button
                key={t.id}
                onClick={() => selectTrack(i)}
                className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${
                  active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`w-5 shrink-0 text-xs tabular-nums ${
                    active ? "text-accent" : "text-white/40"
                  }`}
                >
                  {active ? "▶" : i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-[14px] ${active ? "font-semibold text-white" : "text-white/90"}`}>
                    {t.title}
                  </span>
                  <span className="block truncate text-[12px] text-white/50">
                    {t.artist} · {t.film} ({t.year})
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
