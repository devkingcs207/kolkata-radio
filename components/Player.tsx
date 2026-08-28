"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePlayer } from "@/lib/PlayerContext";
import { useIsDesktop } from "@/lib/useIsDesktop";
import DesktopPlayer from "@/components/DesktopPlayer";
import MobilePlayer from "@/components/MobilePlayer";

export default function Player() {
  const { mountCallbackRef } = usePlayer();
  const isDesktop = useIsDesktop();
  const desktopSlotRef = useRef<HTMLDivElement>(null);
  const mobileSlotRef = useRef<HTMLDivElement>(null);

  // Both DesktopPlayer and MobilePlayer are always mounted (Tailwind's
  // hidden/sm:flex toggles CSS display, not React mounting) — but their
  // slot refs are null until after the first commit, so force one
  // re-render after mount to pick them up.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const target = ready ? (isDesktop ? desktopSlotRef.current : mobileSlotRef.current) : null;

  return (
    <div className="pointer-events-auto w-full max-w-xl px-4 sm:w-auto sm:px-0">
      <DesktopPlayer slotRef={desktopSlotRef} />
      <MobilePlayer slotRef={mobileSlotRef} />
      {target && createPortal(<div ref={mountCallbackRef} className="h-full w-full" />, target)}
    </div>
  );
}
