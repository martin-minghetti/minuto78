"use client";

import { useEffect, useState } from "react";

const START = 78 * 60;
const END = 93 * 60;

export default function Clock() {
  const [sec, setSec] = useState(START);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? doc.scrollTop / max : 0;
        setSec(Math.round(START + p * (END - START)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const min = Math.floor(sec / 60);
  const label =
    min >= 90
      ? `90'+${min - 90 > 0 ? min - 90 : 1}`
      : `${min}:${String(sec % 60).padStart(2, "0")}`;

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
