import Image from "next/image";
import { team } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";

export default function Team() {
  return (
    <Section id="team" alt>
      <SectionHeading eyebrow="06 / Team" title={team.heading} />
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {team.members.map((m, i) => (
          <li key={i} className="flex flex-col gap-2.5">
            {m.photo ? (
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={m.photo} alt={m.name} fill className="object-cover" />
              </div>
            ) : (
              <Placeholder label="[PHOTO]" className="aspect-square" />
            )}
            <div>
              <p className="font-bold">{m.name}</p>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
