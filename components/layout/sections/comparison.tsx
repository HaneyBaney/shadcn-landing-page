"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Platform {
  name: string;
  rating: number;
  price: string;
  chat: number;
  video: number;
  memory: number;
  free: boolean;
  best?: boolean;
  url: string;
  tag?: string;
}

const platforms: Platform[] = [
  { name: "AiAllure", rating: 4.9, price: "$16.40/mo", chat: 4, video: 5, memory: 4, free: true, best: true, url: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow", tag: "#1 Ranked" },
  { name: "OurDream AI", rating: 4.8, price: "$12.99/mo", chat: 4, video: 4, memory: 4, free: true, url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172", tag: "Best Overall" },
  { name: "GPTGirlfriend", rating: 4.7, price: "$15/mo", chat: 5, video: 3, memory: 4, free: true, url: "https://www.gptgirlfriend.online/?ref=mgi4mjj", tag: "Best Chat" },
  { name: "Candy AI", rating: 4.6, price: "$5.99/mo", chat: 3, video: 3, memory: 3, free: true, url: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN", tag: "Best Value" },
  { name: "MyDreamCompanion", rating: 4.5, price: "$5.84/mo", chat: 3, video: 3, memory: 4, free: false, url: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion" },
    { name: "FantasyGF", rating: 4.3, price: "$9.99/mo", chat: 3, video: 3, memory: 2, free: true, url: "https://fantasygf.ai/?via=hana91", tag: "Best Roleplay" },
  { name: "SpicyChat AI", rating: 4.2, price: "Free", chat: 4, video: 1, memory: 2, free: true, url: "https://spicychat.ai/?ref=mwrioda", tag: "Most Characters" },
  { name: "Secret Desires", rating: 4.1, price: "$9.99/mo", chat: 3, video: 2, memory: 2, free: false, url: "https://secretdesires.ai?via=hana64", tag: "Most Private" },
];

const DotRating = ({ score, max = 5 }: { score: number; max?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < score ? "bg-primary" : "bg-muted"
        }`}
      />
    ))}
  </div>
);

export const ComparisonSection = () => {
  return (
    <section id="compare" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Compare
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Side-by-Side Comparison
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground">
          Every platform rated on chat, video, and memory quality — not just features.
        </h3>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-secondary">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-secondary bg-card">
              <th className="text-left py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Platform</th>
              <th className="text-left py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Score</th>
              <th className="text-left py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Price</th>
              <th className="text-center py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Chat</th>
              <th className="text-center py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Video</th>
              <th className="text-center py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Memory</th>
              <th className="text-center py-3.5 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Free</th>
              <th className="py-3.5 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((p) => (
              <tr
                key={p.name}
                className={`border-b border-secondary hover:bg-muted/50 transition-colors ${
                  p.best ? "bg-primary/5 border-l-2 border-l-primary" : ""
                }`}
              >
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{p.name}</span>
                    {p.tag && (
                      <Badge variant="secondary" className="text-[10px]">
                        {p.tag}
                      </Badge>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-bold">{p.rating}</span>
                  <span className="text-primary ml-1">★</span>
                </td>
                <td className="py-3.5 px-4 font-medium">{p.price}</td>
                <td className="py-3.5 px-4">
                  <div className="flex justify-center">
                    <DotRating score={p.chat} />
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex justify-center">
                    <DotRating score={p.video} />
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex justify-center">
                    <DotRating score={p.memory} />
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center">
                  {p.free ? "✅" : "—"}
                </td>
                <td className="py-3.5 px-4">
                  <Button asChild size="sm" variant={p.best ? "default" : "secondary"}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.best ? "Try Free" : "Visit"}
                      <ArrowRight className="size-3.5 ml-1" />
                    </a>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {platforms.slice(0, 5).map((p) => (
          <div
            key={p.name}
            className={`rounded-xl border p-4 ${
              p.best
                ? "border-primary bg-primary/5"
                : "border-secondary bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-semibold">{p.name}</span>
                {p.tag && (
                  <Badge variant="secondary" className="ml-2 text-[10px]">
                    {p.tag}
                  </Badge>
                )}
              </div>
              <span className="font-bold">
                {p.rating} <span className="text-primary">★</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-3">
              <div>
                <span className="block mb-1">Chat</span>
                <DotRating score={p.chat} />
              </div>
              <div>
                <span className="block mb-1">Video</span>
                <DotRating score={p.video} />
              </div>
              <div>
                <span className="block mb-1">Memory</span>
                <DotRating score={p.memory} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{p.price}</span>
              <Button asChild size="sm" variant={p.best ? "default" : "secondary"}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.best ? "Try Free" : "Visit"} →
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
