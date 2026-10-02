import Image from "next/image";
import { sponsors } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <SectionHeading eyebrow="05 / Sponsors" title={sponsors.heading} />

      {sponsors.tiers.map((tier) => {
        const large = tier.size === "large";
        return (
          <div key={tier.name} className="flex flex-col gap-3.5">
            <h3 className="font-mono text-sm uppercase text-muted">{tier.name}</h3>
            <div className={`grid gap-4 ${large ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
              {tier.items.map((s, i) => (
                <a key={i} href={s.url} aria-label={s.name} className="block">
                  {s.logo ? (
                    <div className={`relative rounded-2xl border border-line bg-surface ${large ? "h-36" : "h-24"}`}>
                      <Image src={s.logo} alt={s.name} fill className="object-contain p-6" />
                    </div>
                  ) : (
                    <Placeholder label={large ? "[SPONSOR LOGO]" : "[LOGO]"} className={large ? "h-36" : "h-24"} />
                  )}
                </a>
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-accent px-8 py-7">
        <div>
          <p className="text-xl font-extrabold">{sponsors.callout.title}</p>
          <p className="text-[15px] text-muted">{sponsors.callout.text}</p>
        </div>
        <Button href={sponsors.callout.href}>{sponsors.callout.buttonLabel}</Button>
      </div>
    </Section>
  );
}
