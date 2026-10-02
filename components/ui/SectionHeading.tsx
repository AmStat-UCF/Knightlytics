type SectionHeadingProps = {
  /** Small label above the title, e.g. "01 / About" */
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className="font-display text-4xl font-black uppercase leading-none [font-stretch:80%] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
