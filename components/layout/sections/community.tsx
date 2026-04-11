import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="cta" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold font-mono flex flex-col items-center">
                <div>
                  Stop Guessing Which AI Girlfriend Is
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F97316] bg-clip-text">
                    Worth It
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground font-mono">
              See exactly what each platform includes — from images to video to chat — and choose based on real value, not hype.
            </CardContent>

            <CardFooter className="gap-4 flex-col sm:flex-row">
              <Button asChild className="font-bold font-mono group/arrow">
                <a
                  href="https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try OurDream AI Free
                  <ArrowRight className="size-4 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button asChild variant="secondary" className="font-bold font-mono">
                <Link href="#top-picks">
                  See All Rankings
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
