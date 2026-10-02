import { event, sponsors } from "@/lib/content";
import Button from "@/components/ui/Button";

/**
 * Small "want to sponsor?" band for the landing page.
 * MLH's placeholder-site checklist asks for a way for sponsors to reach you early.
 */
export default function SponsorInterest() {
  return (
    <section id="sponsors" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-accent px-8 py-7">
        <div>
          <p className="text-xl font-extrabold">{sponsors.callout.title}</p>
          <p className="text-[15px] text-muted">
            {sponsors.callout.text} Email{" "}
            <a href={`mailto:${event.sponsorEmail}`} className="text-accent hover:text-accent-hover">
              {event.sponsorEmail}
            </a>
          </p>
        </div>
        <Button href={sponsors.callout.href}>{sponsors.callout.buttonLabel}</Button>
      </div>
    </section>
  );
}
