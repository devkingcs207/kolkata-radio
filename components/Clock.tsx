"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export default function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setNow(formatter.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // Avoid a hydration mismatch — render nothing until the client tick starts.
    return <span className="text-sm font-medium text-white/80 tabular-nums" />;
  }

  const [time, meridiem] = now.split(" ");
  const [h, m] = time.split(":");

  return (
    <span className="text-sm font-medium text-white/80 tabular-nums">
      {h}
      <span className="animate-blink">:</span>
      {m} {meridiem}
    </span>
  );
}
