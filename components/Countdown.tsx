"use client"; // runs a live clock in the browser

import { useSyncExternalStore } from "react";

// A tiny "clock" React can subscribe to: ticks once per second.
function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const getNowSeconds = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null; // on the server we don't know the visitor's time yet

/** Counts down to `target` (an ISO date string). Shows 00s if target is empty or passed. */
export default function Countdown({ target }: { target: string }) {
  const now = useSyncExternalStore(subscribe, getNowSeconds, getServerNow);

  const targetSeconds = target ? Math.floor(new Date(target).getTime() / 1000) : NaN;
  const left = now === null || Number.isNaN(targetSeconds) ? 0 : Math.max(0, targetSeconds - now);

  const units = [
    { label: "Days", value: Math.floor(left / 86400) },
    { label: "Hours", value: Math.floor((left % 86400) / 3600) },
    { label: "Mins", value: Math.floor((left % 3600) / 60) },
    { label: "Secs", value: left % 60 },
  ];

  // No date yet: show a "TBA" bar instead of a row of zeros
  if (!target) {
    return (
      <div className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-muted/40 bg-surface px-5 py-4">
        <span className="font-mono text-sm uppercase tracking-widest text-muted">Countdown</span>
        <span className="font-mono text-sm font-semibold text-accent">Starts when we announce the date</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2.5" role="timer" aria-label="Time until the event starts">
      {units.map((u) => (
        <div key={u.label} className="rounded-xl border border-line bg-surface px-1.5 py-3.5 text-center">
          <div className="font-mono text-2xl font-semibold text-accent md:text-3xl">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-widest text-muted">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
