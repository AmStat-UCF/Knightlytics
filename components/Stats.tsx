import { stats } from "@/lib/content";

export default function Stats() {
  if (stats.length === 0) return null;

  return (
    <section className="border-b border-line bg-bg-alt">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-9 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="text-[15px] text-muted">{s.label}</dt>
            <dd className="text-4xl font-black text-accent [font-stretch:80%]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
