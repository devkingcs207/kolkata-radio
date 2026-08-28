"use client";

import { usePlayer } from "@/lib/PlayerContext";

export default function HeroBackground() {
  const { playlistBg } = usePlayer();

  return (
    <>
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center transition-[background-image] duration-700"
        style={{ backgroundImage: `url(${playlistBg})` }}
      />
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      <div
        className="fixed inset-0 -z-10 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
