# Knightalytics website

One-page site for Knightalytics, UCF's datathon. Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Deploys on Vercel.

## Run it

```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

Other commands: `npm run build` (production build), `npm run lint` (check code style).

## Where things live

| To change…                                   | Edit this file                 |
| -------------------------------------------- | ------------------------------ |
| Any text, dates, links, FAQ, schedule, sponsors, team | `lib/content.ts`      |
| Colors                                       | `app/globals.css` (the `:root` block at the top) |
| Fonts                                        | `lib/fonts.ts`                 |
| Section order / remove a section             | `app/page.tsx`                 |
| Browser tab title + Google description       | `meta` in `lib/content.ts`     |
| Images (logo, sponsor logos, team photos)    | put files in `public/`, then point to them from `lib/content.ts` |
| Switch between landing page and full site    | `site.showFullSite` in `lib/content.ts` |
| Interest form questions / answer choices     | `interestForm` in `lib/content.ts` |

## Components

Each section is its own file in `components/`:

- `Navbar.tsx` — sticky top bar, links, Register button, phone menu
- `Hero.tsx` — name, tagline, dates, location, buttons, host logo + countdown
- `Countdown.tsx` — live countdown (set `event.countdownTo` in `lib/content.ts`)
- `Stats.tsx` — row of big numbers (set `stats` to `[]` to hide it)
- `Landing.tsx` — top of the simple landing page: name, About, buttons, date, AmStat UCF logo
- `SponsorInterest.tsx` — "want to sponsor?" band on the landing page
- `InterestForm.tsx` — the form on the /register page
- `About.tsx`, `Tracks.tsx`, `Schedule.tsx` (Day 1/Day 2 tabs), `Faq.tsx` (click to expand), `Sponsors.tsx`, `Team.tsx`, `Footer.tsx`

Small shared pieces are in `components/ui/`: `Section` (page width + spacing), `SectionHeading`, `Button`, `Placeholder` (dashed image boxes), `Icon` (social/menu icons).

## Landing page vs. full site

`site.showFullSite` in `lib/content.ts` picks what the home page shows:

- `false` (now): the simple landing page: event name, About, the "Join the Interest Form" and
  "Learn More" buttons, date, the AmStat UCF logo, a short FAQ (`landingFaq`), and a sponsor band.
- `true`: the full site: `Hero`, `Stats`, `About`, `Tracks`, `Schedule`, `Faq`, `Sponsors`, `Team`.
  Fill in their content in `lib/content.ts` first.

## Interest form (`/register`) — and your backend

How a submission travels:

1. **Page:** `app/register/page.tsx` is the page at `/register`. The Register buttons link here.
2. **Form:** `components/InterestForm.tsx` runs in the browser. On submit it collects the answers into an
   object shaped like `InterestSubmission` (`lib/interest.ts`) and sends it with
   `fetch("/api/interest", { method: "POST", body: JSON })`.
3. **API route:** `app/api/interest/route.ts` runs on the server and receives that JSON.
   **Right now it's a stub:** it only prints the data in the terminal running `npm run dev` and replies
   `{ ok: true }`, so the form shows "You're on the list!". Nothing is saved yet.

Your job is step 3: validate the data, then store it. The TODOs in `route.ts` walk through it.
You can't just write to a file once the site is on Vercel, because each server only lives briefly and
its disk is wiped. So the data needs an outside home. Common choices:

- **Google Sheets** (via a Google Apps Script web app or the Sheets API): easiest for the club to view and share.
- **Supabase** (hosted Postgres with a dashboard): a real database with a free tier and a JavaScript client.
- **A Postgres database from Vercel's Marketplace** (for example Neon): connects to your Vercel project in a few clicks.
- **MongoDB Atlas**: stores each submission as a JSON-like document, close to what the form already sends.

Whichever you pick, keep its keys or passwords in a `.env.local` file (already ignored by git) and read them in
`route.ts` with `process.env.YOUR_KEY_NAME`. Add the same variables in Vercel's project settings when you deploy.

## MLH website checklist

Based on MLH's organizer guide (guide.mlh.com → Hackathon Website). ✅ = built in, you fill in the content.

**Now: placeholder site (landing page)**

- ✅ Event date, at least the month: `event.dates`
- ✅ Pre-registration form with name, email, socials: `/register`
- ✅ Team support email: `event.contactEmail` (footer)
- ✅ Social media links: `socials` (footer). Replace the `#` links; MLH mentions Facebook, Instagram, TikTok, LinkedIn.
- ✅ Date to come back for full details: `event.detailsReleaseDate`
- ✅ Basic FAQ for newcomers: `landingFaq`
- ✅ Sponsor interest: `event.sponsorEmail` + `SponsorInterest.tsx`

**Full site (`showFullSite: true`)**

- ✅ Landing: name, logo, dates, registration. Mentor/judge/volunteer interest is the "How would you like to take part?" question on the form.
- ✅ About + team, sponsors with logos and links, FAQ covering MLH's standard topics (`faq`)
- ✅ Footer: rules link, code of conduct, support email (`footerLinks`, `event.contactEmail`)

**Add at least one month before the event** (not built yet)

- [ ] Schedule with room numbers (the `location` field in `schedule`)
- [ ] Venue address and a map showing hacking, workshop, and rest areas
- [ ] One communication channel for updates (e.g. Discord), linked on the site
- [ ] Prizes and tracks (`tracks`)
- [ ] Speakers, judges, and mentors with short bios
- [ ] If you join the MLH season: switch registration to MyMLH and follow MLH's member-event requirements

**Accessibility:** text colors meet WCAG's 4.5:1 contrast minimum. Keep it that way if you change colors
(check with WebAIM's contrast checker), and give every image real `alt` text.

## Notes

- Anything in `[BRACKETS]` is a placeholder to replace.
- Files that start with `"use client"` (Navbar, Countdown, Schedule, InterestForm) run in the browser because they react to clicks or time. Everything else is rendered ahead of time.
