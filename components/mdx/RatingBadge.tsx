"use client";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface RatingBadgeProps {
  score: string;
  label: string;
  price?: string;
  video?: string;
  freeTier?: string;
}

export function RatingBadge({ score, label, price, video, freeTier }: RatingBadgeProps) {
  return (
    <div className="w-full p-6 rounded-xl border border-primary/30 bg-primary/5 my-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl shrink-0">
          {score}
        </div>
        <div>
          <h3 className="text-xl font-bold">{label}</h3>
          <div className="flex flex-wrap gap-3 mt-1">
            {price && <Badge variant="secondary">{price}</Badge>}
            {video && <Badge variant="secondary">{video}</Badge>}
            {freeTier && <Badge variant="secondary">{freeTier}</Badge>}
          </div>
        </div>
      </div>
    </div>
  );
}
