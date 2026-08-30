import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "border border-white/30 text-white hover:bg-white hover:text-neutral-950";

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3
    text-sm font-medium
    tracking-wide
    transition
    duration-300
    ${styles}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
