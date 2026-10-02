import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";
import { interestForm } from "@/lib/content";

// This file = the page at /register
export const metadata: Metadata = {
  title: "Interest form — Knightalytics",
  description: interestForm.intro,
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-grid">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-12 md:pt-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-sm uppercase tracking-widest text-accent">Interest form</span>
            <h1 className="text-5xl font-black uppercase leading-none [font-stretch:80%] md:text-6xl">{interestForm.heading}</h1>
            <p className="text-lg text-text-soft">{interestForm.intro}</p>
          </div>
          <InterestForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
