import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  /** Use the slightly lighter background (for alternating sections) */
  alt?: boolean;
  /** Narrower content column (used by FAQ) */
  narrow?: boolean;
  children: ReactNode;
};

/** Wraps every page section: full-width background + centered content column. */
export default function Section({ id, alt, narrow, children }: SectionProps) {
  return (
    <section id={id} className={alt ? "border-y border-line bg-bg-alt" : ""}>
      <div className={`mx-auto flex flex-col gap-10 px-6 py-20 md:py-28 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>
        {children}
      </div>
    </section>
  );
}
