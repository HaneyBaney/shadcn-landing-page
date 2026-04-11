"use client";

interface QuickSpecProps {
  items: string;
}

export function QuickSpec({ items }: QuickSpecProps) {
  const specs = items.split("|").map((item) => {
    const [label, ...rest] = item.split(":");
    return { label: label.trim(), value: rest.join(":").trim() };
  });

  return (
    <div className="w-full flex flex-wrap gap-2 my-6">
      {specs.map((spec, i) => (
        <div
          key={i}
          className="flex-1 min-w-[120px] p-4 rounded-lg border border-secondary bg-muted/50 text-center"
        >
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            {spec.label}
          </div>
          <div className="text-sm font-bold mt-1">{spec.value}</div>
        </div>
      ))}
    </div>
  );
}
