import React from "react";
import { rankedPlatforms } from "@/data/ranked-platforms";
import {
  getCappedFeatures,
  getCreditFeatures,
  getIncludedFeatures,
  getUsageRealityLine,
} from "@/data/card-helpers";

interface PlatformCardProps {
  platform: typeof rankedPlatforms[0];
}

export function PlatformCard({ platform }: PlatformCardProps) {
  const included = getIncludedFeatures(platform);
  const capped = getCappedFeatures(platform);
  const credits = getCreditFeatures(platform);
  const realityLine = getUsageRealityLine(platform);

  return (
    <div className="rounded-2xl border p-6 bg-card">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm opacity-70">#{platform.rank}</div>
          <h3 className="text-2xl font-bold">{platform.meta.name}</h3>
          {platform.meta.badge && (
            <div className="text-sm opacity-80">{platform.meta.badge}</div>
          )}
        </div>

        <div className="text-right">
          <div className="text-sm opacity-70">Value Index</div>
          <div className="text-3xl font-bold">{platform.valueIndex}</div>
        </div>
      </div>

      <p className="mb-3">{platform.meta.description}</p>

      <div className="mb-3 text-sm opacity-80">{platform.featureSummary}</div>

      <div className="mb-4">
        <div className="font-semibold">Yearly Plan</div>
        <div>${platform.pricing.yearlyMonthly.toFixed(2)}/mo</div>
      </div>

      {included.length > 0 && (
        <div className="mb-3">
          <div className="font-semibold">Included</div>
          <ul className="list-disc pl-5">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {capped.length > 0 && (
        <div className="mb-3">
          <div className="font-semibold">Included with cap</div>
          <ul className="list-disc pl-5">
            {capped.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {credits.length > 0 && (
        <div className="mb-3">
          <div className="font-semibold">Costs credits</div>
          <ul className="list-disc pl-5">
            {credits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {realityLine && (
        <div className="mt-4 rounded-xl border p-3 text-sm">
          <strong>Real usage:</strong> {realityLine}
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <a
          href={platform.meta.affiliateUrl}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Try {platform.meta.name}
        </a>
        <a
          href={platform.meta.websiteUrl}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export function RankingsList() {
  return (
    <div className="space-y-6">
      {rankedPlatforms.map((platform) => (
        <PlatformCard key={platform.meta.slug} platform={platform} />
      ))}
    </div>
  );
}
