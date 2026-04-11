import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

export function ValueIndexMethodology() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Value Index™ — Open Methodology</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Most &quot;best AI girlfriend&quot; lists are opinions. This isn&apos;t.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <TrendingUp className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              What you actually get before paying extra — per dollar
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="size-5 text-green-600" />
              <h3 className="text-xl font-semibold">Feature Coverage</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              What&apos;s included in the base subscription — before credits, tokens, or paywalls.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Chat</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Voice</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Video</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Memory</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="size-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Price Efficiency</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              How close the plan is to the cheapest option tested.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cheapest plan</span>
                <span className="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded">100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">More expensive</span>
                <span className="font-mono text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Proportional</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold mb-4">Why We Use Geometric Mean</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">The Problem with Average Scores</h4>
              <div className="bg-white rounded-lg p-4 text-sm font-mono">
                Platform A: Features (90) + Price (10) = Average 50
                <div className="text-red-600 mt-2">❌ Looks &quot;good&quot; but terrible value</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Geometric Mean Solution</h4>
              <div className="bg-white rounded-lg p-4 text-sm font-mono">
                Value Index = √(coverage × priceEfficiency)
                <div className="text-green-600 mt-2">✅ Same platform scores 30 (realistic)</div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Both features AND price must be strong. No gaming the system.
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Same approach used by the UN Human Development Index</span>
            <span>•</span>
            <span>Last updated: March 26, 2026</span>
            <span>•</span>
            <span>Platforms tested: 8</span>
          </div>
        </div>
      </div>
    </section>
  );
}
