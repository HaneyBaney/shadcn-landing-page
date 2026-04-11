import { Metadata } from "next";
import { FeaturePage } from "@/components/layout/feature-page";

export const metadata: Metadata = {
  title: "Best AI Companion Apps With Video Generation (2026)",
  description:
    "Which AI companion apps actually deliver usable video in the subscription? We tested every platform and ranked them by real video coverage — not marketing claims.",
};

export default function VideoPage() {
  return (
    <FeaturePage
      title="Best AI Companion Apps With Video Generation (2026)"
      subtitle="Video Generation"
      description="Video is the most heavily marketed and least reliably included feature in AI companion apps. Most platforms advertise video but charge extra for every clip. We tested every platform and documented what's actually included."
      featureKey="video"
      angle="Every platform claims video. Very few include it without charging per clip. Here's who actually delivers — and what the real cost per video looks like elsewhere."
    />
  );
}
