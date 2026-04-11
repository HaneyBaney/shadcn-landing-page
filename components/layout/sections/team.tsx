import { ArrowRight } from "lucide-react";
import { rankedPlatforms } from "@/data/ranked-platforms";
import { platforms } from "@/lib/platforms";

/* Map platform id → affiliate URL override (for platforms not in platforms.ts or needing a different link) */
const URL_OVERRIDES: Record<string, string> = {
  "aimour-ai": "https://t.crjmpy.com/389267/10314/0?aff_sub5=SF_006OG000004lmDN",
};

/* Map platform id → domain override for favicon (for IDs that don't match platforms.ts keys) */
const DOMAIN_MAP: Record<string, string> = {
  "aimour-ai": "aimour.ai",
};

const NAME_MAP: Record<string, string> = {
  "aimour-ai": "Aimour.ai",
};

function buildShowcaseList() {
  // Create a map of ranked platforms by slug for quick lookup
  const rankedMap = new Map(rankedPlatforms.map(p => [p.meta.slug, p]));
  
  // Get ranked platforms in order, then add unranked platforms
  const rankedIds = rankedPlatforms.map(p => p.meta.slug);
  const unrankedIds = ["fantasygf", "spicychat-ai"];
  const allPlatformIds = [...rankedIds, ...unrankedIds];

  return allPlatformIds.map((id, i) => {
    const ranked = rankedMap.get(id);
    const plat = platforms[id];
    const domain = DOMAIN_MAP[id] ?? plat?.domain ?? id.replace(/-/g, ".");
    const name = ranked?.meta.name ?? NAME_MAP[id] ?? plat?.name ?? id;
    const logo = plat?.logo;
    const url = ranked?.meta.affiliateUrl ?? URL_OVERRIDES[id] ?? plat?.url ?? "#";

    // Build a data-driven tag
    let tag: string;
    if (ranked) {
      // Ranked in Value Index — show rank + score
      tag = `#${ranked.rank} Value Index · ${ranked.valueIndex}/100`;
    } else if (plat && plat.price) {
      // Not ranked yet — show price
      tag = `From ${plat.price}`;
    } else {
      tag = `${domain}`;
    }

    return { id, name, tag, url, logo, domain, delay: i * 0.2 };
  });
}

const platformList = buildShowcaseList();

export const PlatformShowcase = () => {
  return (
    <section id="platforms" className="container py-24 sm:py-32">

      <div className="text-center mb-12">
        <h2 className="text-lg text-primary mb-2 tracking-wider font-mono">Tested Platforms</h2>
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">Ranked by the Math, Not Opinions</h2>
        <p className="mx-auto max-w-xl text-muted-foreground font-mono">
          Scores come from the Value Index — feature coverage × price efficiency, geometric mean.
          No editorial picks, no sponsors, no bias.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 max-w-5xl mx-auto">
        {platformList.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 text-center"
          >
            {/* Floating logo */}
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-pink-300/15 blur-2xl group-hover:bg-pink-300/25 transition-all duration-500" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo ?? `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
                alt={p.name}
                className={`relative ${p.logo ? "size-28 md:size-32" : "size-16 md:size-24"} object-contain drop-shadow-xl vi-float`}
                style={{ animationDelay: `${p.delay}s` }}
              />
            </div>

            {/* Name + data tag */}
            <div>
              <p className="text-sm font-bold font-mono text-foreground group-hover:text-pink-400 transition-colors">{p.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wider uppercase mt-0.5 tabular-nums">{p.tag}</p>
            </div>

            {/* CTA */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 px-4 py-1.5 text-xs font-bold font-mono text-pink-600 dark:text-pink-400 group-hover:bg-pink-200 dark:group-hover:bg-pink-500/20 group-hover:border-pink-300 dark:group-hover:border-pink-500/30 transition-all duration-200">
              Try It
              <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
