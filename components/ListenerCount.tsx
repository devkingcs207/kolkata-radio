"use client";

import { useEffect, useState } from "react";

/**
 * Illustrative "listeners now" indicator. This is a gently drifting
 * simulated figure, not a real analytics count — wire it up to your
 * actual stream/analytics backend if you want a true number.
 */
export default function ListenerCount() {
  const [count, setCount] = useState(214);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => Math.max(120, c + Math.round((Math.random() - 0.5) * 6)));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-1.5 text-xs font-medium text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent-glow)]" />
      {count.toLocaleString("en-IN")} listening now
    </span>
  );
}
