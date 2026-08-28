"use client";

import { usePlayer } from "@/lib/PlayerContext";

export default function Vinyl({
  size,
  slotRef,
}: {
  size: number;
  slotRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { isPlaying } = usePlayer();

  return (
    <div
      className="relative shrink-0 self-start rounded-full bg-black ring-1 ring-white/10"
      style={{ width: size, height: size }}
    >
      <div
        ref={slotRef}
        className="h-full w-full overflow-hidden rounded-full [&>div]:h-full [&>div]:w-full [&_iframe]:pointer-events-none [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:scale-[1.4]"
        style={{
          animation: "spin 8s linear infinite",
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40" />
    </div>
  );
}
