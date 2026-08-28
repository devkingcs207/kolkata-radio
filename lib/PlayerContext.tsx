"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { playlists, type Track } from "@/lib/tracks";
import { loadYouTubeApi } from "@/lib/loadYouTubeApi";

type PlayerContextValue = {
  playlistIndex: number;
  trackIndex: number;
  track: Track;
  playlistName: string;
  playlistBg: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  mountCallbackRef: (el: HTMLDivElement | null) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  seekTo: (seconds: number) => void;
  selectPlaylist: (index: number) => void;
  selectTrack: (index: number) => void;
  isListOpen: boolean;
  toggleList: () => void;
  closeList: () => void;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isListOpen, setIsListOpen] = useState(false);

  // Persistent mount point for the single YouTube iframe. This same DOM
  // node gets portaled between the desktop pill and mobile card slots so
  // there is always exactly one visible, playing iframe — never a hidden
  // background one. A state (not a plain ref) so the creation effect below
  // can react to the node actually existing in the DOM.
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);
  const mountCallbackRef = useCallback((el: HTMLDivElement | null) => {
    setMountNode(el);
  }, []);
  const playerRef = useRef<YT.Player | null>(null);
  const rafRef = useRef<number | null>(null);

  const playlist = playlists[playlistIndex];
  const track = playlist.tracks[trackIndex];

  const tick = useCallback(() => {
    const p = playerRef.current;
    if (p) {
      setCurrentTime(p.getCurrentTime() || 0);
      setDuration(p.getDuration() || 0);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const next = useCallback(() => {
    setTrackIndex((i) => (i + 1) % playlist.tracks.length);
  }, [playlist.tracks.length]);

  const prev = useCallback(() => {
    setTrackIndex((i) => (i - 1 + playlist.tracks.length) % playlist.tracks.length);
  }, [playlist.tracks.length]);

  // Create the player once the mount node exists (fires again only if the
  // node is ever unmounted entirely, not on portal reparenting between the
  // desktop/mobile slots — React preserves the host instance across those).
  useEffect(() => {
    if (!mountNode || playerRef.current) return;
    let cancelled = false;

    loadYouTubeApi().then((YTApi) => {
      if (cancelled || playerRef.current) return;

      playerRef.current = new YTApi.Player(mountNode, {
        videoId: track.videoId,
        playerVars: { autoplay: 0, playsinline: 1, modestbranding: 1, rel: 0 },
        events: {
          onReady: () => {
            rafRef.current = requestAnimationFrame(tick);
          },
          onStateChange: (e) => {
            if (e.data === YTApi.PlayerState.PLAYING) setIsPlaying(true);
            else if (e.data === YTApi.PlayerState.PAUSED) setIsPlaying(false);
            else if (e.data === YTApi.PlayerState.ENDED) next();
          },
          onError: (e) => {
            // Video got deleted or embedding was switched off after ship —
            // skip forward instead of leaving a dead player on screen.
            if (typeof window !== "undefined" && "gtag" in window) {
              (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
                "event",
                "youtube_playback_error",
                { code: e.data, videoId: track.videoId }
              );
            }
            next();
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // Track changes are handled by loadVideoById in the effect below, not here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mountNode]);

  // Load the newly selected track into the existing player instance.
  const isFirstTrackLoad = useRef(true);
  useEffect(() => {
    if (isFirstTrackLoad.current) {
      isFirstTrackLoad.current = false;
      return;
    }
    const p = playerRef.current;
    if (!p) return;
    // Track changes only ever come from a next/prev/select click — a real
    // user gesture — so it's safe (and expected) to autoplay every time.
    p.loadVideoById(track.videoId);
    setCurrentTime(0);
    setDuration(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track.videoId]);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (isPlaying) p.pauseVideo();
    else p.playVideo();
  }, [isPlaying]);

  const seekTo = useCallback((seconds: number) => {
    const p = playerRef.current;
    if (!p) return;
    p.seekTo(seconds, true);
    setCurrentTime(seconds);
  }, []);

  const selectPlaylist = useCallback((index: number) => {
    setPlaylistIndex(index);
    setTrackIndex(0);
    setIsListOpen(false);
  }, []);

  const selectTrack = useCallback((index: number) => {
    setTrackIndex(index);
    setIsListOpen(false);
  }, []);

  const toggleList = useCallback(() => setIsListOpen((v) => !v), []);
  const closeList = useCallback(() => setIsListOpen(false), []);

  const value = useMemo<PlayerContextValue>(
    () => ({
      playlistIndex,
      trackIndex,
      track,
      playlistName: playlist.name,
      playlistBg: playlist.bg,
      isPlaying,
      currentTime,
      duration,
      mountCallbackRef,
      togglePlay,
      next,
      prev,
      seekTo,
      selectPlaylist,
      selectTrack,
      isListOpen,
      toggleList,
      closeList,
    }),
    [
      playlistIndex,
      trackIndex,
      track,
      playlist.name,
      playlist.bg,
      isPlaying,
      currentTime,
      duration,
      mountCallbackRef,
      togglePlay,
      next,
      prev,
      seekTo,
      selectPlaylist,
      selectTrack,
      isListOpen,
      toggleList,
      closeList,
    ]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
