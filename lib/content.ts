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
  // MLH: show the event date. If you don't have an exact date yet, show at least the month.
  dates: "[MONTH YEAR]", // e.g. "February 2027", later "February 20–21, 2027"
  time: "", // e.g. "9:00 AM" (leave "" to hide)
  location: "University of Central Florida · Orlando, FL", // add the venue when you know it
  // Countdown target in ISO format, e.g. "2027-02-20T09:00:00-05:00".
  // Leave as "" until you know the date.
  countdownTo: "",
  registerUrl: "/register", // the interest form page (app/register/page.tsx)
  registerLabel: "Join the Interest Form",
  learnMoreUrl: "#about", // where "Learn More" goes (e.g. the AmStat UCF website)
  // MLH: tell visitors when to come back for full details (schedule, tracks, prizes)
  detailsReleaseDate: "[DATE]", // e.g. "December 1"
  contactEmail: "[CONTACT EMAIL]", // MLH: a team inbox for hacker questions
  sponsorEmail: "[SPONSORSHIP EMAIL]", // can be the same as contactEmail
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

/**
 * FAQ for the full site. These are the standard topics MLH recommends covering.
 * Fill in each answer, and delete any question that doesn't apply.
 */
export const faq = {
  heading: "Questions?",
  items: [
    { question: "What is a datathon?", answer: "A datathon is a hackathon focused on data. Teams spend [XX] hours exploring real datasets, finding insights, and building projects like dashboards, models, or visualizations, then present them to judges." },
    { question: "How much does it cost?", answer: "[Free? What's included: meals, swag, workshops...]" },
    { question: "Where is it, and is there parking?", answer: "[Venue, in-person or virtual, parking details.]" },
    { question: "Who can attend?", answer: "[Eligibility: which students, minimum age, experience level.]" },
    { question: "Do I need experience with data science?", answer: "[Answer goes here.]" },
    { question: "How big can teams be? Can I come without a team?", answer: "[Team size limits and how team-matching works.]" },
    { question: "Do you offer travel reimbursement?", answer: "[Yes / no / details.]" },
    { question: "What should I bring?", answer: "[Laptop, charger, student ID, ...]" },
    { question: "Can I start my project early or use past work?", answer: "[Your rules on prior work.]" },
    { question: "How many tracks or challenges can I enter?", answer: "[Answer goes here.]" },
    { question: "Do I need to stay overnight?", answer: "[Answer goes here.]" },
    { question: "What else happens besides hacking?", answer: "[Workshops, speakers, games, ...]" },
    { question: "When will I know if I'm accepted? Is there a waitlist?", answer: "[Acceptance timeline and waitlist process.]" },
    { question: "How can I mentor, judge, or volunteer?", answer: "Pick your role on the interest form and we'll reach out." },
    { question: "I have another question.", answer: "Email us at [CONTACT EMAIL]." },
  ],
};

/**
 * Short FAQ for the simple landing page (MLH placeholder site: a basic FAQ
 * that explains the event to newcomers).
 */
export const landingFaq = [
  { question: "What is a datathon?", answer: "A datathon is a hackathon focused on data. Teams spend [XX] hours exploring real datasets, finding insights, and building projects like dashboards, models, or visualizations, then present them to judges." },
  { question: "Who can attend?", answer: "[Eligibility: which students, minimum age, experience level.]" },
  { question: "How much does it cost?", answer: "[Answer goes here.]" },
  { question: "When will registration open?", answer: "Join the interest form and we'll email you as soon as it opens. Full details drop [DATE]." },
  { question: "How can I mentor, judge, volunteer, or sponsor?", answer: "Mentors, judges, and volunteers can pick their role on the interest form. Sponsors can email us (see below)." },
];


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
    href: `mailto:${event.sponsorEmail}`,
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
  { label: "Email", href: `mailto:${event.contactEmail}`, icon: "email" },
] as const;

/** MLH: the footer should link to your rules and code of conduct */
export const footerLinks = [
  { label: "Rules", href: "#" }, // [LINK TO RULES PAGE OR DOC]
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
  // Lets mentors, judges, and volunteers use the same form (MLH recommends collecting their interest too)
  roles: ["Participant (hacker)", "Mentor", "Judge", "Volunteer"],
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
