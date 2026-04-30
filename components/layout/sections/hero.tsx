"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="max-w-screen-xl mx-auto py-16 md:py-28 px-4">
        {/* ROW: mascot LEFT — text RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* MASCOT — left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-400/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="/videos/v2_1773140792584-636230495.mp4"
                />
              </div>
            </div>
          </div>

          {/* TEXT — right */}
          <div className="flex-1 text-center md:text-left">
            <Badge variant="outline" className="text-sm py-2 mb-6 font-mono">
              <span className="mr-2 text-primary">
                <Badge>2026 Rankings</Badge>
              </span>
              <span> Updated monthly </span>
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              Best AI Girlfriend Apps Ranked by
              <span className="text-transparent px-2 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F97316] bg-clip-text">
                Real Value
              </span>
              (2026)
            </h1>

            <p className="text-xl text-muted-foreground mb-4 max-w-lg font-mono">
              Scored using the{" "}
              <strong className="text-foreground">Value&nbsp;Index™</strong> — a mathematical formula combining feature access, usage limits, and price efficiency.
            </p>

            <p className="text-sm text-muted-foreground/70 mb-8 font-mono tracking-wide">
              No opinions. No sponsorships. Just data.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-bold font-mono group/arrow">
                <a href="https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172" target="_blank" rel="noopener noreferrer">
                  Meet Your Match
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="font-bold font-mono">
                <Link href="#platforms">Explore All Platforms</Link>
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground/50 font-mono tracking-wide">
              Geometric mean scoring — same method the UN uses for the Human Development Index.
            </p>
          </div>

        </div>

        {/* video moved to page.tsx before rankings */}
      </div>
    </section>
  );
};
