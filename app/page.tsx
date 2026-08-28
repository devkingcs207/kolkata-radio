import { PlayerProvider } from "@/lib/PlayerContext";
import HeroBackground from "@/components/HeroBackground";
import Clock from "@/components/Clock";
import ListenerCount from "@/components/ListenerCount";
import SocialLinks from "@/components/SocialLinks";
import PlaylistTabs from "@/components/PlaylistTabs";
import Player from "@/components/Player";
import TrackListPanel from "@/components/TrackListPanel";

export default function Home() {
  return (
    <PlayerProvider>
      <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
        <HeroBackground />

        {/* Top row */}
        <div
          className="fixed inset-x-0 top-0 z-10 flex items-center justify-between"
          style={{
            paddingTop: "max(1rem, env(safe-area-inset-top))",
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
          }}
        >
          <Clock />
          <div className="absolute left-1/2 -translate-x-1/2">
            <ListenerCount />
          </div>
          <SocialLinks />
        </div>

        {/* Centre — playlist toggle + title */}
        <div className="mt-24 flex flex-col items-center gap-4 px-4 text-center sm:mt-28">
          <PlaylistTabs />
          <div>
            <h1 className="font-display text-5xl tracking-tight text-white drop-shadow-lg sm:text-6xl">
              কলকাতা
            </h1>
            <p className="mt-1 text-sm font-medium tracking-[0.3em] text-white/80">
              KOLKATA RADIO
            </p>
          </div>
        </div>

        <div className="hidden sm:block" />

        {/* Player, bottom-anchored */}
        <div
          className="relative z-10 flex w-full justify-center"
          style={{
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
          }}
        >
          <Player />
        </div>

        <TrackListPanel />
      </main>
    </PlayerProvider>
  );
}
