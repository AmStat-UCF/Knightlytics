/**
 * The shape of one interest-form submission.
 *
 * The form (components/InterestForm.tsx) builds an object like this and sends
 * it as JSON to POST /api/interest (app/api/interest/route.ts). Both files
 * import this type, so if you add a question, add its field here first and
 * TypeScript will point out everywhere else that needs updating.
 */
export type InterestSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string; // optional, may be ""
  github: string; // optional, may be ""
  roles: string[]; // one or more of interestForm.roles (participant, mentor, judge, volunteer)
  school: string;
  major: string;
  year: string; // one of interestForm.years in lib/content.ts
  heardFrom: string[]; // one or more of interestForm.heardFrom
  heardFromOther: string; // free text, may be ""
  experience: string; // "none" | "beginner" | "intermediate" | "advanced"
  firstDatathon: string; // "yes" | "no"
  interests: string[]; // zero or more of interestForm.interests
  wantsUpdates: boolean; // OK to email them updates?
};

/** What the API sends back to the form */
export type InterestResponse = { ok: true } | { ok: false; error: string };
