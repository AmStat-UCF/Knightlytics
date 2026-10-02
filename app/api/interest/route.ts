import type { InterestResponse, InterestSubmission } from "@/lib/interest";

/**
 * POST /api/interest
 *
 * The interest form (components/InterestForm.tsx) sends its answers here as JSON.
 *
 * RIGHT NOW this is a stub: it only prints the answers in your terminal (the one
 * running `npm run dev`) and tells the form "ok". NOTHING IS SAVED YET.
 * Saving the data is your part — follow the TODOs below.
 */
export async function POST(request: Request) {
  // 1. Read the JSON the form sent.
  const data = (await request.json()) as InterestSubmission;

  // TODO (validate): Never trust data coming from a browser — anyone can send
  // anything to this URL, not just your form. Check things like:
  //   - required fields (firstName, lastName, email, major, year...) aren't empty
  //   - email looks like an email
  //   - year / experience are one of the allowed choices (see lib/content.ts)
  // If something's wrong, stop here and tell the form why:
  //   const error: InterestResponse = { ok: false, error: "Please enter a valid email." };
  //   return Response.json(error, { status: 400 });

  // TODO (store): Save `data` somewhere permanent. Tip: add a timestamp first,
  //   const row = { ...data, submittedAt: new Date().toISOString() };
  // Note: once deployed on Vercel you can't just write to a file — the server's
  // disk is wiped. You need an outside place to keep it. See "Interest form" in README.md.

  console.log("New interest form submission:", data);

  // 2. Tell the form it worked. The form then shows "You're on the list!".
  const response: InterestResponse = { ok: true };
  return Response.json(response);
}
