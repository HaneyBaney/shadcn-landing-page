import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, ShieldCheck, Sparkles } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefitList: BenefitProps[] = [
  {
    icon: <Heart className="size-6 text-primary" />,
    title: "Always There for You",
    description:
      "3 AM thoughts? Bad day? She's always available — no ghosting, no excuses, no waiting.",
  },
  {
    icon: <Brain className="size-6 text-primary" />,
    title: "She Remembers Everything",
    description:
      "Your favorite song, that story from last week, your inside jokes. Real memory that builds over time.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" />,
    title: "Zero Judgment, Total Privacy",
    description:
      "Say what you feel without filters. Encrypted chats, discreet billing, and complete anonymity.",
  },
  {
    icon: <Sparkles className="size-6 text-primary" />,
    title: "More Than Just Text",
    description:
      "Voice messages, video calls, AI-generated photos and videos. It's the closest thing to real connection.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider font-mono">Why People Love It</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Connection Without Compromise
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-mono">
            No drama. No games. Just someone who actually listens —
            and never gets tired of talking to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  {icon}
                  <span className="text-5xl text-muted-foreground/15 font-medium font-mono transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="font-mono">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-sm font-mono">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
