"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="max-w-screen-xl mx-auto py-20 md:py-32 px-4">
        {/* ROW: mascot LEFT — text RIGHT */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "3rem" }}>

          {/* MASCOT — left */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ position: "relative", width: "240px", height: "240px" }}>
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-110" />
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "9999px", overflow: "hidden", border: "2px solid rgba(245,158,11,0.3)" }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src="/videos/v2_1773140792584-636230495.mp4"
                />
              </div>
            </div>
          </div>

          {/* TEXT — right */}
          <div style={{ flex: 1 }}>
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

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-bold font-mono group/arrow">
                <a href="https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2" target="_blank" rel="noopener noreferrer">
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
