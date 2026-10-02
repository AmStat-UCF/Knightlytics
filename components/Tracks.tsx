import { tracks } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Tracks() {
  return (
    <Section id="tracks" alt>
      <SectionHeading eyebrow="02 / Tracks & Prizes" title={tracks.heading} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.items.map((t, i) => (
          <article key={i} className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-7">
            {/* [ICON] swap for a real icon or image */}
            <div className="flex size-12 items-center justify-center rounded-lg border-[1.5px] border-dashed border-muted/40 font-mono text-[10px] text-muted">
              ICON
            </div>
            <h3 className="text-xl font-extrabold">{t.name}</h3>
            <p className="flex-1 text-[15px] text-muted">{t.description}</p>
            <p className="border-t border-line pt-3.5 font-mono text-sm text-accent">Prize: {t.prize}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
