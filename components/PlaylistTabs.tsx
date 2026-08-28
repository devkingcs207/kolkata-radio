"use client";

import { playlists } from "@/lib/tracks";
import { usePlayer } from "@/lib/PlayerContext";

export default function PlaylistTabs() {
  const { playlistIndex, selectPlaylist } = usePlayer();

  return (
    <div className="flex items-center gap-2">
      {playlists.map((p, i) => (
        <button
          key={p.id}
          onClick={() => selectPlaylist(i)}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
            i === playlistIndex
              ? "border-white/20 bg-white/15 text-white"
              : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90"
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
