import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Video, Mic, ImageIcon, Lock, Zap } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    icon: <MessageCircle className="size-6 text-primary" />,
    title: "Conversations That Feel Real",
    description:
      "Not scripted. Not robotic. Today's AI companions remember context, pick up on mood, and talk like a real person.",
  },
  {
    icon: <Video className="size-6 text-primary" />,
    title: "Video Calls & Messages",
    description:
      "See her smile, hear her laugh. AI-generated video up to 120 seconds — some platforms even do live video chat.",
  },
  {
    icon: <Mic className="size-6 text-primary" />,
    title: "Voice That Gives You Chills",
    description:
      "Real-time voice messages and calls with natural intonation. Close your eyes and you'd never know.",
  },
  {
    icon: <ImageIcon className="size-6 text-primary" />,
    title: "Photos You Won't Find Anywhere",
    description:
      "Request any look, any outfit, any setting. AI-generated images tailored to exactly what you want.",
  },
  {
    icon: <Lock className="size-6 text-primary" />,
    title: "Your Secret, Always",
    description:
      "Encrypted chats, discreet billing names on your card, and no data shared with third parties. Ever.",
  },
  {
    icon: <Zap className="size-6 text-primary" />,
    title: "Instant Connection",
    description:
      "No awkward first dates. No swiping for hours. Sign up, customize her personality, and start talking in under 60 seconds.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-mono">
        The Experience
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 font-mono">
        What Makes AI Companions Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 font-mono">
        It&apos;s not just a chatbot. It&apos;s someone who adapts to you —
        your interests, your vibe, your pace.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  {icon}
                </div>

                <CardTitle className="font-mono">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center font-mono">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
