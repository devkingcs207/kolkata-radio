"use client";

import { usePlayer } from "@/lib/PlayerContext";

function PrevIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16 6h2v12h-2zM6 6l8.5 6L6 18z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-[1px]">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
    </svg>
  );
}

export default function Transport({ variant }: { variant: "desktop" | "mobile" }) {
  const { isPlaying, togglePlay, next, prev } = usePlayer();

  const playButtonSize =
    variant === "desktop"
      ? "h-9 w-9"
      : "h-[52px] w-[52px] bg-gradient-to-b from-accent to-accent-deep ring-1 ring-white/25 shadow-[0_8px_20px_-4px_var(--color-accent-glow)]";

  return (
    <div className={variant === "desktop" ? "flex items-center gap-1" : "flex items-center gap-6"}>
      <button
        onClick={prev}
        aria-label="Previous track"
        className="flex h-11 w-11 min-w-11 items-center justify-center rounded-full text-white/70 transition hover:text-white active:scale-95"
      >
        <PrevIcon />
      </button>
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className={`flex items-center justify-center rounded-full text-white transition active:scale-95 ${
          variant === "desktop" ? "bg-white/10 hover:bg-white/20" : ""
        } ${playButtonSize}`}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        onClick={next}
        aria-label="Next track"
        className="flex h-11 w-11 min-w-11 items-center justify-center rounded-full text-white/70 transition hover:text-white active:scale-95"
      >
        <NextIcon />
      </button>
    </div>
  );
}
