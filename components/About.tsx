import { about } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <SectionHeading eyebrow="01 / About" title={about.heading} />
          {about.paragraphs.map((p) => (
            <p key={p} className="text-text-soft">
              {p}
            </p>
          ))}
        </div>
        <Placeholder label={about.imageLabel} className="aspect-[4/3]" />
      </div>
    </Section>
  );
}
