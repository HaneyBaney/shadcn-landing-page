import { platforms } from "./platforms";
import { rankPlatforms } from "./value-index-calculator";

export const rankedPlatforms = rankPlatforms(platforms);

// Export current rankings for quick reference
export const currentRankings = rankedPlatforms.map(p => ({
  rank: p.rank,
  name: p.meta.name,
  valueIndex: p.valueIndex,
  featureSummary: p.featureSummary,
  badge: p.meta.badge,
}));

// Example output:
// [
//   { rank: 1, name: "AiAllure", valueIndex: 88, featureSummary: "3 unlimited · 1 capped · 0 credits", badge: "Best Visuals" },
//   { rank: 2, name: "OurDream AI", valueIndex: 80, featureSummary: "1 unlimited · 3 capped · 0 credits", badge: "Best Overall" },
//   { rank: 3, name: "Secrets AI", valueIndex: 66, featureSummary: "2 unlimited · 0 capped · 3 credits", badge: "Best Memory" },
//   ...
// ]
