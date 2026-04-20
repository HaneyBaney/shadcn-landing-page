import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find My AI Girlfriend App — Live Platform Matcher | aigfnow.com",
  description: "Drag the sliders to find your perfect AI girlfriend app. Budget, images, voice, video, memory — watch 8 platforms re-rank in real time based on your priorities.",
  openGraph: {
    title: "Find My AI Girlfriend App — Live Platform Matcher",
    description: "Interactive tool that matches you to the best AI companion platform based on your budget and feature priorities.",
    type: "website",
    url: "https://www.aigfnow.com/match",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find My AI Girlfriend App — Live Platform Matcher",
    description: "Drag sliders to match with the best AI companion for your priorities.",
  },
  alternates: {
    canonical: "https://www.aigfnow.com/match",
  },
};

export default function MatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
