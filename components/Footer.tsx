import { event, host, socials, footerLinks } from "@/lib/content";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 px-6 pb-10 pt-14">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex max-w-sm flex-col gap-2.5">
            <span className="text-2xl font-black uppercase [font-stretch:80%]">
              {event.nameParts[0]}
              <span className="text-accent">{event.nameParts[1]}</span>
            </span>
            <a href={host.url} className="w-fit text-[15px] text-text-soft hover:text-accent">
              Hosted by {host.name}
            </a>
            <span className="text-[15px] text-muted">
              Questions? Email{" "}
              <a href={`mailto:${event.contactEmail}`} className="text-accent hover:text-accent-hover">
                {event.contactEmail}
              </a>
            </span>
          </div>

          <ul className="flex gap-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-lg border border-line transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
          <span>
            © {event.year} {event.name} · University of Central Florida
          </span>
          <span className="flex gap-5">
            {footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-accent hover:text-accent-hover">
                {l.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
