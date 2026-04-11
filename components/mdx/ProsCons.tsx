"use client";

import { Check, X } from "lucide-react";

interface ProsConsProps {
  pros: string;
  cons: string;
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  const prosList = pros.split("|").map((s) => s.trim()).filter(Boolean);
  const consList = cons.split("|").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/5">
        <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
          <Check className="size-5" /> Pros
        </h4>
        <ul className="space-y-2">
          {prosList.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <Check className="size-3.5 text-green-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
        <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
          <X className="size-5" /> Cons
        </h4>
        <ul className="space-y-2">
          {consList.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <X className="size-3.5 text-red-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
