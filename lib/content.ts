/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * Fill in the [BRACKETED] placeholders below. The components read from this
 * file, so you never need to open them to change text, dates, or lists.
 *
 * Tip: to hide a list (e.g. no tier-2 sponsors yet), set it to an empty array [].
 */

/**
 * WHICH VERSION OF THE HOME PAGE TO SHOW
 * false = simple landing page: event name, About, buttons, and the AmStat UCF logo.
 * true  = the full site: hero, stats, About, Tracks, Schedule, FAQ, Sponsors, Team.
 * Flip to true once the full-site content below is filled in.
 */
export const site = {
  showFullSite: false,
};

/** The club hosting the event (logo file lives in /public) */
export const host = {
  name: "AmStat UCF",
  logo: "/amstat-logo.png",
  url: "#", // [CLUB WEBSITE / INSTAGRAM LINK]
};

export const event = {
  name: "Knightalytics",
  // Shown split into two colors: "Knight" + "alytics"
  nameParts: ["Knight", "alytics"] as const,
  tagline: "[One-line tagline — what attendees build in 24 hours with real data.]",
  badges: ["UCF's Datathon", "[YEAR] Edition"],
  dates: "Date coming soon", // e.g. "February 20–21, 2027"
  time: "", // e.g. "9:00 AM" (leave "" to hide)
  location: "University of Central Florida · Orlando, FL", // add the venue when you know it
  // Countdown target in ISO format, e.g. "2027-02-20T09:00:00-05:00".
  // Leave as "" until you know the date.
  countdownTo: "",
  registerUrl: "/register", // the interest form page (app/register/page.tsx)
  registerLabel: "Join the Interest Form",
  learnMoreUrl: "#about", // where "Learn More" goes (e.g. the AmStat UCF website)
  contactEmail: "[CONTACT EMAIL]",
  year: "[YEAR]",
};

/** SEO / browser-tab info */
export const meta = {
  title: "Knightalytics — UCF's Datathon",
  description: "[Short description for Google and link previews.]",
};

/**
 * Navbar links. `href` is "/#" + a section id, so the links also work from
 * the /register page. On the simple landing page only "About" is shown,
 * because the other sections are part of the full site.
 */
export const nav = [
  { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#tracks" },
  { label: "Schedule", href: "/#schedule" },
  { label: "FAQ", href: "/#faq" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Team", href: "/#team" },
];

/** The row of big numbers under the hero. Use real numbers or set to []. */
export const stats = [
  { value: "[XX] hrs", label: "of hacking" },
  { value: "[XXX]+", label: "participants" },
  { value: "$[X,XXX]", label: "in prizes" },
  { value: "[X]", label: "tracks" },
];

export const about = {
  heading: "What is Knightalytics?",
  paragraphs: [
    "[Paragraph 1 — what a datathon is, who it's for, and that no experience is needed.]",
    "[Paragraph 2 — what attendees get: datasets, mentors, workshops, food, swag, prizes.]",
  ],
  imageLabel: "[PHOTO — past event or campus]",
};

export const tracks = {
  heading: "Pick your challenge",
  items: [
    { name: "[Track 1 — e.g. Health Data]", description: "[Short description of the challenge and dataset.]", prize: "[PRIZE]" },
    { name: "[Track 2 — e.g. Sports Analytics]", description: "[Short description of the challenge and dataset.]", prize: "[PRIZE]" },
    { name: "[Track 3 — e.g. Sustainability]", description: "[Short description of the challenge and dataset.]", prize: "[PRIZE]" },
    { name: "[Track 4 — Best Visualization]", description: "[Short description of the challenge and dataset.]", prize: "[PRIZE]" },
  ],
};

export const schedule = {
  heading: "The game plan",
  days: [
    {
      label: "Day 1 · [DATE]",
      events: [
        { time: "[TIME]", title: "Check-in & breakfast", location: "[Location]" },
        { time: "[TIME]", title: "Opening ceremony", location: "[Location]" },
        { time: "[TIME]", title: "Hacking begins", location: "[Location]" },
        { time: "[TIME]", title: "Workshop: [TOPIC]", location: "[Location]" },
        { time: "[TIME]", title: "Dinner", location: "[Location]" },
        { time: "[TIME]", title: "Late-night activity", location: "[Location]" },
      ],
    },
    {
      label: "Day 2 · [DATE]",
      events: [
        { time: "[TIME]", title: "Breakfast", location: "[Location]" },
        { time: "[TIME]", title: "Hacking ends — submissions due", location: "[Location]" },
        { time: "[TIME]", title: "Judging & demos", location: "[Location]" },
        { time: "[TIME]", title: "Lunch", location: "[Location]" },
        { time: "[TIME]", title: "Closing ceremony & awards", location: "[Location]" },
      ],
    },
  ],
};

export const faq = {
  heading: "Questions?",
  items: [
    { question: "What is a datathon?", answer: "[Answer goes here.]" },
    { question: "Who can attend?", answer: "[Answer goes here.]" },
    { question: "Do I need experience with data science?", answer: "[Answer goes here.]" },
    { question: "How much does it cost?", answer: "[Answer goes here.]" },
    { question: "What should I bring?", answer: "[Answer goes here.]" },
    { question: "Can I come without a team?", answer: "[Answer goes here.]" },
    { question: "Will there be food?", answer: "[Answer goes here.]" },
  ],
};

/**
 * Sponsors, grouped by tier. Put logo files in /public/sponsors/ and set
 * `logo: "/sponsors/acme.svg"`. Leave `logo` empty to show a placeholder box.
 */
export const sponsors = {
  heading: "Powered by",
  tiers: [
    {
      name: "[TIER 1 — e.g. Gold]",
      size: "large" as const,
      items: [
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
      ],
    },
    {
      name: "[TIER 2 — e.g. Silver]",
      size: "small" as const,
      items: [
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
        { name: "[Sponsor]", logo: "", url: "#" },
      ],
    },
  ],
  callout: {
    title: "Want to sponsor Knightalytics?",
    text: "[One line on why companies should sponsor.]",
    buttonLabel: "Get the sponsor packet",
    href: "mailto:[EMAIL]",
  },
};

/** Organizers. Put photos in /public/team/ and set `photo: "/team/name.jpg"`. */
export const team = {
  heading: "Meet the organizers",
  members: [
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
    { name: "[Name]", role: "[Role]", photo: "" },
  ],
};

/** Footer social links. `icon` must be one of: instagram, linkedin, discord, email, github, x */
export const socials = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Discord", href: "#", icon: "discord" },
  { label: "Email", href: "mailto:[EMAIL]", icon: "email" },
] as const;

export const footerLinks = [
  { label: "MLH Code of Conduct", href: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf" },
  { label: "[Past years]", href: "#" },
];

/**
 * INTEREST FORM (/register page)
 * Edit the questions' answer choices here. The form itself is in
 * components/InterestForm.tsx and it sends answers to app/api/interest/route.ts.
 */
export const interestForm = {
  heading: "Join the interest list",
  intro: "Knightalytics is coming soon. Tell us a bit about yourself and we'll email you first when registration opens.",
  successHeading: "You're on the list!",
  successText: "Thanks for your interest. We'll be in touch as soon as we have dates and details.",

  // Suggestions that pop up while typing a major (people can still type anything)
  majors: [
    "Computer Science",
    "Statistics & Data Science",
    "Mathematics",
    "Information Technology",
    "Computer Engineering",
    "Electrical Engineering",
    "Business Analytics",
    "Finance",
    "Economics",
    "Biology",
    "Psychology",
    "Undeclared",
  ],
  years: ["First year", "Second year", "Third year", "Fourth year", "Fifth year +", "Graduate student", "Alumni", "Other"],
  heardFrom: [
    "Instagram",
    "LinkedIn",
    "Discord",
    "Friend or classmate",
    "Professor or class announcement",
    "Flyer on campus",
    "AmStat UCF meeting or member",
    "Another club or organization",
    "Email or newsletter",
    "Tabling event on campus",
  ],
  experienceLevels: [
    { value: "none", label: "None yet", hint: "Totally new — that's great!" },
    { value: "beginner", label: "Beginner", hint: "A class or tutorial or two" },
    { value: "intermediate", label: "Intermediate", hint: "Some projects with real data" },
    { value: "advanced", label: "Advanced", hint: "Research, internships, competitions" },
  ],
  interests: [
    "Data visualization",
    "Machine learning / AI",
    "Statistics",
    "Sports analytics",
    "Health & medicine",
    "Business & finance",
    "Social good",
  ],
};
