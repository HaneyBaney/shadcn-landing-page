"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type Answer = "images" | "chat" | "budget" | "memory" | "video";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: Answer; emoji: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What matters most to you?",
    options: [
      { label: "Unlimited images", value: "images", emoji: "🖼️" },
      { label: "Deep conversations", value: "chat", emoji: "💬" },
      { label: "Lowest price", value: "budget", emoji: "💰" },
      { label: "She remembers everything", value: "memory", emoji: "🧠" },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to interact?",
    options: [
      { label: "Mostly text chat", value: "chat", emoji: "⌨️" },
      { label: "Voice messages", value: "memory", emoji: "🎙️" },
      { label: "Images and visuals", value: "images", emoji: "📸" },
      { label: "Video clips", value: "video", emoji: "🎬" },
    ],
  },
  {
    id: 3,
    question: "What's your budget?",
    options: [
      { label: "Under $5/month", value: "budget", emoji: "🪙" },
      { label: "$5-10/month", value: "chat", emoji: "💵" },
      { label: "$10-20/month", value: "images", emoji: "💳" },
      { label: "Whatever it takes", value: "memory", emoji: "💎" },
    ],
  },
];

interface Result {
  platform: string;
  tagline: string;
  reason: string;
  url: string;
  badge: string;
}

const results: Record<Answer, Result> = {
  images: {
    platform: "AiAllure",
    tagline: "Unlimited images + voice included",
    reason: "You want visuals without limits. AiAllure includes unlimited image generation in the base plan.",
    url: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
    badge: "Best Visuals",
  },
  chat: {
    platform: "OurDream AI",
    tagline: "All-in-one plan",
    reason: "You want a balanced experience. OurDream gives you chat, images, voice, and video in one subscription.",
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    badge: "Best Overall",
  },
  budget: {
    platform: "Candy AI",
    tagline: "Cheapest yearly plan",
    reason: "You want the lowest price. Candy AI is just $3.99/mo yearly with unlimited chat included.",
    url: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
    badge: "Cheapest",
  },
  memory: {
    platform: "Secrets AI",
    tagline: "4x enhanced memory",
    reason: "You want her to remember everything. Secrets AI has the most advanced memory system available.",
    url: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
    badge: "Best Memory",
  },
  video: {
    platform: "OurDream AI",
    tagline: "10 video clips included",
    reason: "You want video content. OurDream includes 10 video clips per month in the base plan.",
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    badge: "Best for Video",
  },
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: Answer) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): Result => {
    const counts: Record<Answer, number> = {
      images: 0,
      chat: 0,
      budget: 0,
      memory: 0,
      video: 0,
    };
    answers.forEach((a) => counts[a]++);
    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as Answer;
    return results[winner];
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <main className="container py-16 sm:py-24 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Your Perfect Match
          </h1>
          <p className="text-muted-foreground">Based on your answers</p>
        </div>

        <div className="bg-card border border-secondary rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{result.badge}</Badge>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{result.platform}</h2>
          <p className="text-muted-foreground mb-4">{result.tagline}</p>
          
          <div className="bg-muted/50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{result.reason}</p>
            </div>
          </div>

          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Try {result.platform} Free <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={restart}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            ← Take quiz again
          </button>
          <Link
            href="/"
            className="text-primary hover:underline text-sm"
          >
            See all rankings →
          </Link>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="container py-16 sm:py-24 max-w-xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= currentQuestion ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </Badge>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          {question.question}
        </h1>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full bg-card border border-secondary rounded-2xl p-5 text-left hover:border-primary/50 hover:bg-muted/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{option.emoji}</span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {option.label}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>

      {/* Skip */}
      <div className="text-center mt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip quiz → See all rankings
        </Link>
      </div>
    </main>
  );
}
