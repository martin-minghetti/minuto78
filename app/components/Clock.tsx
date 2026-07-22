"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const total = 78 * 60 + seconds;
  const min = Math.floor(total / 60);
  const label =
    min >= 90
      ? "90'+"
      : `${min}:${String(total % 60).padStart(2, "0")}`;

  return (
    <span
      className="font-mono text-card tabular-nums"
      aria-hidden="true"
      suppressHydrationWarning
    >
      {label}
    </span>
  );
}
