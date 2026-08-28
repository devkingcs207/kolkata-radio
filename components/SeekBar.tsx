"use client";

import { useCallback, useRef, useState } from "react";
import { usePlayer } from "@/lib/PlayerContext";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function SeekBar({ variant }: { variant: "desktop" | "mobile" }) {
  const { currentTime, duration, seekTo } = usePlayer();
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragValue, setDragValue] = useState<number | null>(null);

  const valueFromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el || duration <= 0) return 0;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      return ratio * duration;
    },
    [duration]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      const val = valueFromClientX(e.clientX);
      setDragValue(val);
    },
    [valueFromClientX]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (dragValue === null) return;
      setDragValue(valueFromClientX(e.clientX));
    },
    [dragValue, valueFromClientX]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (dragValue === null) return;
      seekTo(dragValue);
      setDragValue(null);
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    },
    [dragValue, seekTo]
  );

  const shown = dragValue ?? currentTime;
  const pct = duration > 0 ? (shown / duration) * 100 : 0;

  return (
    <div className={variant === "desktop" ? "flex flex-col gap-1" : "flex w-full flex-col gap-1"}>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="group relative flex h-6 w-full touch-none items-center"
      >
        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div
          className="absolute h-3 w-3 -translate-x-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100"
          style={{ left: `${pct}%` }}
        />
      </div>
      {variant === "desktop" && (
        <div className="flex justify-between text-[10.5px] tabular-nums text-white/60">
          <span>{formatTime(shown)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
}

export { formatTime };
