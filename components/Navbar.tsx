"use client"; // needs state for the phone menu

import { useState } from "react";
import Link from "next/link";
import { event, nav, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  // The simple landing page only has an About section, so only show that link
  const links = site.showFullSite ? nav : nav.filter((link) => link.href === "/#about");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" onClick={close} className="flex items-center gap-2.5">
          <span className="text-base font-extrabold uppercase tracking-wide sm:text-lg [font-stretch:85%]">
            {event.nameParts[0]}
            <span className="text-accent">{event.nameParts[1]}</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 text-[15px] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-text-soft transition-colors hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href={event.registerUrl}>
            {/* Shorter label on phones so the navbar fits */}
            <span className="sm:hidden">Interest Form</span>
            <span className="hidden sm:inline">{event.registerLabel}</span>
          </Button>
          {/* Phone menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-lg border border-line md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* Phone menu panel */}
      {open && (
        <ul className="flex h-[calc(100dvh-68px)] flex-col bg-bg px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block border-b border-line py-4 text-3xl font-extrabold uppercase [font-stretch:80%]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
