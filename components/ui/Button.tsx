import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

/** A link styled as a button. "primary" = gold, "outline" = bordered. */
export default function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  const base = "inline-flex min-h-11 items-center justify-center rounded-lg font-bold transition-colors";
  const sizes = { md: "px-5 py-2.5 text-[15px]", lg: "px-7 py-4 text-base" };
  const variants = {
    primary: "bg-accent text-accent-ink hover:bg-accent-hover",
    outline: "border border-muted/40 text-text hover:border-accent hover:text-accent",
  };
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  // Links to pages on this site (start with "/") use Next's <Link> for fast page changes.
  // Everything else (#sections, mailto:, other websites) is a normal <a>.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
