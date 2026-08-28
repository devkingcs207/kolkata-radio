"use client";

import { usePlayer } from "@/lib/PlayerContext";
import Vinyl from "@/components/Vinyl";
import SeekBar from "@/components/SeekBar";
import Transport from "@/components/Transport";
import ListButton from "@/components/ListButton";

export default function DesktopPlayer({
  slotRef,
}: {
  slotRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { track } = usePlayer();

  return (
    <div
      className="hidden sm:flex items-center gap-4 rounded-full border border-white/10
      bg-gradient-to-b from-white/[0.15] to-white/[0.055] p-3 pr-5 backdrop-blur-3xl
      backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
    >
      <Vinyl size={80} slotRef={slotRef} />

      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="min-w-0 max-w-[180px]">
          <p className="truncate text-[15px] font-semibold text-white">{track.title}</p>
          <p className="truncate text-[12.5px] text-white/70">
            {track.artist} · {track.film}
          </p>
        </div>
        <SeekBar variant="desktop" />
      </div>

      <div className="flex items-center gap-1 pl-2">
        <ListButton />
        <Transport variant="desktop" />
      </div>
    </div>
  );
}
