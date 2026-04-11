"use client";

import { ArrowRight } from "lucide-react";

interface CTABoxProps {
  href: string;
  label: string;
  sublabel?: string;
  variant?: "primary" | "secondary";
}

export function CTABox({ href, label, sublabel, variant = "primary" }: CTABoxProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full p-5 rounded-xl text-center my-6 transition-all hover:scale-[1.01] ${
        isPrimary
          ? "border-2 border-primary bg-primary/10 hover:bg-primary/20"
          : "border border-secondary bg-muted hover:bg-muted/80"
      }`}
    >
      <span className={`text-lg font-bold flex items-center justify-center gap-2 ${isPrimary ? "text-primary" : ""}`}>
        {label}
        <ArrowRight className="size-4" />
      </span>
      {sublabel && (
        <span className="text-sm text-muted-foreground mt-1 block">{sublabel}</span>
      )}
    </a>
  );
}
