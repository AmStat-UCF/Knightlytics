import Image from "next/image";
import { event, host } from "@/lib/content";
import Button from "@/components/ui/Button";
import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section id="top" className="bg-grid border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left: text */}
        <div className="flex min-w-0 flex-col gap-7">
          <div className="flex flex-wrap gap-2.5 font-mono text-xs uppercase md:text-sm">
            {event.badges.map((badge, i) => (
              <span
                key={badge}
                className={`rounded-full border px-3 py-1.5 ${i === 0 ? "border-accent text-accent" : "border-line text-text-soft"}`}
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.9] [font-stretch:75%] sm:text-7xl lg:text-8xl">
            {event.nameParts[0]}
            {/* Second half of the name goes on its own line, in gold */}
            <span className="block text-accent">{event.nameParts[1]}</span>
          </h1>

          <p className="max-w-lg text-lg text-text-soft md:text-xl">{event.tagline}</p>

          <div className="flex flex-col gap-1 font-mono text-sm md:text-base">
            <span>
              {event.dates}
              {event.time && ` · ${event.time}`}
            </span>
            <span className="text-muted">{event.location}</span>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <Button href={event.registerUrl} size="lg">
              {event.registerLabel}
            </Button>
            <Button href={event.learnMoreUrl} size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: host logo + countdown. Swap the logo for event art later if you make some. */}
        <div className="flex min-w-0 flex-col gap-4">
          <a
            href={host.url}
            className="flex aspect-[5/4] flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-bg p-8 transition-colors hover:border-accent/60"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Hosted by</span>
            <Image src={host.logo} alt={host.name} width={424} height={542} priority className="h-auto max-h-[78%] w-auto" />
          </a>
          <Countdown target={event.countdownTo} />
        </div>
      </div>
    </section>
  );
}
