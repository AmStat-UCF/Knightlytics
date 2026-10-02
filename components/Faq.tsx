import { faq } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

/**
 * Uses the browser's built-in <details>/<summary> elements, so each question
 * opens and closes on click with no JavaScript needed.
 */
type FaqProps = {
  /** Which questions to show (defaults to the full-site list in lib/content.ts) */
  items?: { question: string; answer: string }[];
  eyebrow?: string;
};

export default function Faq({ items = faq.items, eyebrow = "04 / FAQ" }: FaqProps) {
  return (
    <Section id="faq" alt narrow>
      <SectionHeading eyebrow={eyebrow} title={faq.heading} />
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <details key={i} className="group rounded-xl border border-line bg-surface" open={i === 0}>
            <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
              {item.question}
              <span className="text-accent transition-transform group-open:rotate-45">
                <Icon name="plus" />
              </span>
            </summary>
            <p className="px-5 pb-5 text-text-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
