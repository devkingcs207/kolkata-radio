"use client";

import { usePlayer } from "@/lib/PlayerContext";

export default function ListButton({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { toggleList, isListOpen } = usePlayer();

  const dims = size === "lg" ? "h-11 w-11" : "h-9 w-9";

  return (
    <button
      onClick={toggleList}
      aria-label={isListOpen ? "Close song list" : "Browse songs"}
      aria-pressed={isListOpen}
      className={`flex ${dims} min-w-11 items-center justify-center rounded-full text-white/70 transition hover:text-white active:scale-95`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
      </svg>
    </button>
  );
}
