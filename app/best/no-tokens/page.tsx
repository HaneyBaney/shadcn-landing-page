import { Metadata } from "next";
import { FeaturePage } from "@/components/layout/feature-page";
import { ScoredEntry } from "@/lib/index";

export const metadata: Metadata = {
  title: "AI Companion Apps With No Token System (2026)",
  description:
    "Tired of running out of tokens? These AI companion platforms include features in your subscription — no coins, no credits, no hidden costs.",
};

export default function NoTokensPage() {
  return (
    <FeaturePage
      title="AI Companion Apps With No Token / Credit System (2026)"
      subtitle="No Tokens / Credits"
      description="Token and coin systems are designed to make features feel free until they aren't. Most platforms offer a small monthly allowance that runs out fast, then charge you to refill. These platforms use flat subscriptions instead."
      featureKey={null}
      filterFn={(e: ScoredEntry) => {
        // Include platforms where the majority of core features are NOT coins-based
        const coreKeys = ["chat", "images", "voice", "video"];
        const coreFeatures = e.features.filter((f) =>
          coreKeys.some((k) => f.key.toLowerCase().includes(k))
        );
        const coinCount = coreFeatures.filter((f) => f.access === "coins").length;
        return coinCount <= 1; // at most 1 coin-based core feature
      }}
      angle="Token systems are designed to make you spend more. A 'free' coin allowance sounds generous until you run out on day 3. These platforms skip the psychology."
    />
  );
}
