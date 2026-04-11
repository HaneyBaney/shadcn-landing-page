"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Star } from "lucide-react";

export const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-secondary shadow-lg">
      <div className="container flex items-center justify-between py-3 px-4 gap-3">
        <div className="hidden sm:flex items-center gap-3">
          <img 
            src="/logos/aiallure.png" 
            alt="AiAllure" 
            className="h-6 w-auto"
          />
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-primary text-primary" />
            <span className="font-bold text-sm">84/100</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">AiAllure</span>
            <span className="text-muted-foreground ml-1">- #1 Ranked · Live Video Calls Included</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2 sm:hidden">
            <img 
              src="/logos/aiallure.png" 
              alt="AiAllure" 
              className="h-5 w-auto"
            />
            <span className="text-xs text-muted-foreground font-medium">
              #1 Ranked
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="font-bold group/arrow whitespace-nowrap">
              <a
                href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Free
                <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
              </a>
            </Button>
            <button
              onClick={() => setDismissed(true)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
