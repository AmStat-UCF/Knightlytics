"use client"; // runs in the browser: handles typing, checking, and sending

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { interestForm as q } from "@/lib/content";
import type { InterestResponse, InterestSubmission } from "@/lib/interest";

type Status = "idle" | "sending" | "success" | "error";

// Shared Tailwind classes so every input looks the same
const inputClass =
  "min-h-12 w-full rounded-lg border border-line bg-bg px-4 text-base text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const labelClass = "flex flex-col gap-2 text-[15px] font-semibold";
const chipClass =
  "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border border-line bg-bg px-3.5 py-2 text-[15px] transition-colors hover:border-muted has-checked:border-accent has-checked:bg-accent/10 has-focus-visible:ring-2 has-focus-visible:ring-accent/40";

export default function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the browser's default full-page reload
    setError("");

    // 1. Collect every answer from the form by its `name`
    const form = new FormData(e.currentTarget);
    const text = (name: string) => String(form.get(name) ?? "").trim();
    const data: InterestSubmission = {
      firstName: text("firstName"),
      lastName: text("lastName"),
      email: text("email"),
      linkedin: text("linkedin"),
      github: text("github"),
      roles: form.getAll("roles").map(String),
      school: text("school"),
      major: text("major"),
      year: text("year"),
      heardFrom: form.getAll("heardFrom").map(String),
      heardFromOther: text("heardFromOther"),
      experience: text("experience"),
      firstDatathon: text("firstDatathon"),
      interests: form.getAll("interests").map(String),
      wantsUpdates: form.get("wantsUpdates") === "on",
    };

    // 2. Extra checks the browser can't do on its own (at least one box ticked in a group)
    if (data.roles.length === 0) {
      setError("Please pick at least one way you'd like to take part.");
      return;
    }
    if (data.heardFrom.length === 0 && !data.heardFromOther) {
      setError("Please tell us how you heard about Knightalytics.");
      return;
    }

    // 3. Send it to our API route (app/api/interest/route.ts)
    setStatus("sending");
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => null)) as InterestResponse | null;
      if (!res.ok || !body?.ok) {
        throw new Error(body && !body.ok ? body.error : "Something went wrong. Please try again.");
      }
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  // After a successful submit, swap the form for a thank-you message
  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-accent/60 bg-surface p-8 md:p-10" role="status">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">Submitted</span>
        <h2 className="text-4xl font-black uppercase leading-none [font-stretch:80%]">{q.successHeading}</h2>
        <p className="text-lg text-text-soft">{q.successText}</p>
        <Link href="/" className="font-bold text-accent hover:text-accent-hover">
          ← Back to the home page
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 rounded-2xl border border-line bg-surface p-6 md:p-10">
      {/* --- About you --- */}
      <fieldset className="flex flex-col gap-5">
        <legend className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            First name *
            <input name="firstName" required autoComplete="given-name" className={inputClass} />
          </label>
          <label className={labelClass}>
            Last name *
            <input name="lastName" required autoComplete="family-name" className={inputClass} />
          </label>
        </div>
        <label className={labelClass}>
          Email *
          <input name="email" type="email" required autoComplete="email" placeholder="you@ucf.edu" className={inputClass} />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            <span>
              LinkedIn <span className="font-normal text-muted">(optional)</span>
            </span>
            <input name="linkedin" autoComplete="url" placeholder="linkedin.com/in/…" className={inputClass} />
          </label>
          <label className={labelClass}>
            <span>
              GitHub <span className="font-normal text-muted">(optional)</span>
            </span>
            <input name="github" placeholder="github.com/…" className={inputClass} />
          </label>
        </div>
        <label className={labelClass}>
          School *
          <input name="school" required defaultValue="University of Central Florida" className={inputClass} />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Major *
            {/* `list` connects this input to the <datalist> of suggestions below */}
            <input name="major" required list="major-options" placeholder="Start typing…" className={inputClass} />
            <datalist id="major-options">
              {q.majors.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          </label>
          <label className={labelClass}>
            Year *
            <select name="year" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select your year
              </option>
              {q.years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      {/* --- Role --- */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-[15px] font-semibold">
          How would you like to take part? * <span className="font-normal text-muted">(pick all that apply)</span>
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {q.roles.map((role, i) => (
            <label key={role} className={chipClass}>
              <input type="checkbox" name="roles" value={role} defaultChecked={i === 0} className="size-4 accent-[var(--accent)]" />
              {role}
            </label>
          ))}
        </div>
      </fieldset>

      {/* --- How they heard --- */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-[15px] font-semibold">How did you hear about Knightalytics? * <span className="font-normal text-muted">(pick all that apply)</span></legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {q.heardFrom.map((option) => (
            <label key={option} className={chipClass}>
              <input type="checkbox" name="heardFrom" value={option} className="size-4 accent-[var(--accent)]" />
              {option}
            </label>
          ))}
        </div>
        <label className={labelClass}>
          <span>
            Somewhere else? <span className="font-normal text-muted">(optional)</span>
          </span>
          <input name="heardFromOther" placeholder="Tell us where" className={inputClass} />
        </label>
      </fieldset>

      {/* --- Experience --- */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-[15px] font-semibold">How much experience do you have working with data? *</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {q.experienceLevels.map((level, i) => (
            <label key={level.value} className={`${chipClass} items-start py-3`}>
              <input type="radio" name="experience" value={level.value} required={i === 0} className="mt-1 size-4 accent-[var(--accent)]" />
              <span className="flex flex-col">
                <span className="font-semibold">{level.label}</span>
                <span className="text-sm text-muted">{level.hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-[15px] font-semibold">Would this be your first hackathon or datathon? *</legend>
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "yes", label: "Yes, first one!" },
            { value: "no", label: "No, I've been to one before" },
          ].map((o, i) => (
            <label key={o.value} className={chipClass}>
              <input type="radio" name="firstDatathon" value={o.value} required={i === 0} className="size-4 accent-[var(--accent)]" />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 text-[15px] font-semibold">
          What topics interest you? <span className="font-normal text-muted">(optional, pick any)</span>
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {q.interests.map((topic) => (
            <label key={topic} className={chipClass}>
              <input type="checkbox" name="interests" value={topic} className="size-4 accent-[var(--accent)]" />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-3 text-[15px]">
        <input type="checkbox" name="wantsUpdates" defaultChecked className="mt-1 size-4 accent-[var(--accent)]" />
        <span>Email me when registration opens and when there are updates about Knightalytics.</span>
      </label>

      {/* --- Errors + submit --- */}
      {error && (
        <p role="alert" className="rounded-lg border border-red-400/50 bg-red-400/10 px-4 py-3 text-[15px] text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-7 text-base font-bold text-accent-ink transition-colors hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60 sm:w-fit"
      >
        {status === "sending" ? "Sending…" : "Join the interest list"}
      </button>
    </form>
  );
}
