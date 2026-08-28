"use client";

import { usePlayer } from "@/lib/PlayerContext";
import Vinyl from "@/components/Vinyl";
import SeekBar, { formatTime } from "@/components/SeekBar";
import Transport from "@/components/Transport";
import ListButton from "@/components/ListButton";

export default function MobilePlayer({
  slotRef,
}: {
  slotRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { track, currentTime, duration } = usePlayer();

  return (
    <div
      className="flex sm:hidden w-full flex-col gap-3 rounded-[26px] border border-white/10
      bg-gradient-to-b from-white/[0.15] to-white/[0.055] p-4 backdrop-blur-3xl
      backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
    >
      <div className="flex items-center gap-3">
        <Vinyl size={64} slotRef={slotRef} />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-white">{track.title}</p>
          <p className="truncate text-[12.5px] text-white/70">
            {track.artist} · {track.film}
          </p>
        </div>
      </div>

      <SeekBar variant="mobile" />

      <div className="flex items-center justify-between">
        <span className="text-[10.5px] tabular-nums text-white/60">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <Transport variant="mobile" />
        <span className="flex w-[52px] justify-end">
          <ListButton size="lg" />
        </span>
      </div>
    </div>
  );
}
