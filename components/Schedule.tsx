"use client"; // needs state for the Day 1 / Day 2 tabs

import { useState } from "react";
import { schedule } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const day = schedule.days[activeDay];

  return (
    <Section id="schedule">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="03 / Schedule" title={schedule.heading} />

        {/* Day tabs */}
        <div role="tablist" className="flex gap-2 rounded-xl border border-line bg-surface p-1.5">
          {schedule.days.map((d, i) => (
            <button
              key={d.label}
              type="button"
              role="tab"
              aria-selected={i === activeDay}
              onClick={() => setActiveDay(i)}
              className={`min-h-11 rounded-lg px-4 text-[15px] font-bold transition-colors ${
                i === activeDay ? "bg-accent text-accent-ink" : "text-text-soft hover:text-text"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <ol role="tabpanel" className="border-t border-line">
        {day.events.map((e, i) => (
          <li key={i} className="grid grid-cols-[96px_1fr] items-baseline gap-6 border-b border-line py-5 sm:grid-cols-[140px_1fr]">
            <span className="font-mono text-[15px] text-accent">{e.time}</span>
            <div className="flex flex-col">
              <span className="text-lg font-bold">{e.title}</span>
              <span className="text-[15px] text-muted">{e.location}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
