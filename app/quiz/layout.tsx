import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Quiz — Find Your Perfect Match in 30 Seconds | aigfnow.com",
  description: "Answer 3 quick questions and we'll match you with the best AI girlfriend app for your needs. Images, chat, budget, memory, or video — find your perfect platform.",
  openGraph: {
    title: "AI Girlfriend Quiz — Find Your Perfect Match in 30 Seconds",
    description: "Quick quiz to find the best AI companion app for your priorities. Takes 30 seconds.",
    type: "website",
    url: "https://www.aigfnow.com/quiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Quiz — Find Your Perfect Match",
    description: "Answer 3 questions, get matched to the best AI companion app for you.",
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.aigfnow.com/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
