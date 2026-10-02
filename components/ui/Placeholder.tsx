type PlaceholderProps = {
  label: string;
  className?: string;
};

/** Dashed box that stands in for an image or logo until you add the real one. */
export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-[1.5px] border-dashed border-muted/40 bg-surface p-4 text-center font-mono text-sm text-muted ${className}`}
    >
      {label}
    </div>
  );
}
