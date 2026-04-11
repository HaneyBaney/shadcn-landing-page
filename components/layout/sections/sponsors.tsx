"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

const platformLogos: { name: string; logo: string }[] = [
  { name: "OurDream AI",       logo: "/logos/ourdream-ai.png" },
  { name: "GPTGirlfriend",     logo: "https://www.google.com/s2/favicons?domain=gptgirlfriend.online&sz=64" },
  { name: "Candy AI",          logo: "https://www.google.com/s2/favicons?domain=candy.ai&sz=64" },
  { name: "AiAllure",          logo: "/logos/aiallure.png" },
  { name: "MyDreamCompanion",  logo: "https://www.google.com/s2/favicons?domain=mydreamcompanion.com&sz=64" },
    { name: "FantasyGF",         logo: "https://www.google.com/s2/favicons?domain=fantasygf.ai&sz=64" },
  { name: "SpicyChat AI",      logo: "https://www.google.com/s2/favicons?domain=spicychat.ai&sz=64" },
  { name: "Secret Desires",    logo: "https://www.google.com/s2/favicons?domain=secretdesires.ai&sz=64" },
  { name: "Nectar AI",         logo: "https://www.google.com/s2/favicons?domain=nectar.ai&sz=64" },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6 text-muted-foreground font-mono">
        Platforms We&apos;ve Tested &amp; Reviewed
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {platformLogos.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center gap-3 text-xl md:text-2xl font-medium font-mono"
            >
              <Image
                src={logo}
                alt={name}
                width={36}
                height={36}
                className="rounded-lg object-contain"
                unoptimized={logo.startsWith("http")}
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
