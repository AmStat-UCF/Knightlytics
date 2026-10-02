import Image from "next/image";
import { about, event, host } from "@/lib/content";
import Button from "@/components/ui/Button";

/**
 * The simple landing page (shown while site.showFullSite is false in lib/content.ts):
 * event name, About, the two buttons, and the AmStat UCF logo.
 */
export default function Landing() {
  return (
    <section id="top" className="bg-grid border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left: name, About, buttons */}
        <div className="flex min-w-0 flex-col gap-8">
          <h1 className="text-6xl font-black uppercase leading-[0.9] [font-stretch:75%] sm:text-7xl lg:text-8xl">
            {event.nameParts[0]}
            <span className="block text-accent">{event.nameParts[1]}</span>
          </h1>

          <div id="about" className="flex flex-col gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent">{about.heading}</h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-xl text-lg text-text-soft">
                {p}
              </p>
            ))}
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

        {/* Right: AmStat UCF logo */}
        <a
          href={host.url}
          className="flex aspect-[5/4] flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-bg p-8 transition-colors hover:border-accent/60"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Hosted by</span>
          <Image src={host.logo} alt={host.name} width={424} height={542} priority className="h-auto max-h-[78%] w-auto" />
        </a>
      </div>
    </section>
  );
}
