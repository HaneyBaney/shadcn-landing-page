"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-secondary">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left font-medium hover:text-primary transition-colors"
      >
        {title}
        <ChevronDown
          className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-foreground leading-7">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionGroupProps {
  children: React.ReactNode;
}

export function AccordionGroup({ children }: AccordionGroupProps) {
  return (
    <div className="my-6 rounded-xl border border-secondary p-4">
      {children}
    </div>
  );
}
