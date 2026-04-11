import { Metadata } from "next";
import { FeaturePage } from "@/components/layout/feature-page";

export const metadata: Metadata = {
  title: "Best AI Companion Apps With Voice Calls (2026)",
  description:
    "Which AI companion apps include real-time or async voice in the subscription? Ranked by actual voice coverage from the Value Index.",
};

export default function VoiceCallsPage() {
  return (
    <FeaturePage
      title="Best AI Companion Apps With Voice Calls (2026)"
      subtitle="Voice Calls"
      description="Voice is the feature most platforms charge extra for. Some include it in the base plan, some cap it by the minute, and some make you pay per playback. We tested every platform and documented exactly what you get."
      featureKey="voice"
      angle="Most platforms charge per minute or per voice message. These are the ones that actually include voice in what you're already paying."
    />
  );
}
