import path from "path";
import { getPosts, getPost, MDXContent } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { platforms } from "@/lib/platforms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const REVIEWS_DIR = path.join(process.cwd(), "content", "reviews");

export async function generateStaticParams() {
  const posts = getPosts(REVIEWS_DIR);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(REVIEWS_DIR, params.slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    robots: { index: false, follow: true },
  };
}

function findPlatform(slug: string) {
  const normalized = slug.replace("-review", "");
  return Object.values(platforms).find(
    (p) => p.id === normalized || normalized.includes(p.id.replace("-", ""))
  );
}

export default function ReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(REVIEWS_DIR, params.slug);
  if (!post) notFound();

  const platform = findPlatform(params.slug);

  return (
    <article className="container max-w-3xl py-16 md:py-24">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">Review</Badge>
          <span className="text-sm text-muted-foreground">{post.metadata.publishedAt}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-lg text-muted-foreground">{post.metadata.summary}</p>
      </div>

      {platform && (
        <div className="flex flex-wrap gap-3 mb-8 p-4 rounded-xl border border-secondary bg-card">
          <Button asChild size="sm" className="font-bold group/arrow">
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              Try {platform.name} Free
              <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span><strong className="text-foreground">{platform.rating}/5</strong> Rating</span>
            <span><strong className="text-foreground">{platform.price}</strong></span>
            <span>&ldquo;{platform.hook}&rdquo;</span>
          </div>
        </div>
      )}

      <div className="prose-custom">
        <MDXContent source={post.content} />
      </div>

      {/* Bottom CTA */}
      {platform && (
        <div className="mt-12 p-6 rounded-xl border-2 border-primary/30 bg-primary/5 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to try {platform.name}?</h3>
          <p className="text-muted-foreground mb-4">{platform.bestFor}</p>
          <Button asChild className="font-bold group/arrow">
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              Try {platform.name} Free
              <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      )}

      {/* Related links */}
      <div className="mt-8 pt-8 border-t border-secondary">
        <h3 className="font-bold mb-4">Related</h3>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/#platforms">All Platforms</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">More Reviews & Comparisons</Link>
          </Button>
        </div>
      </div>

      {/* JSON-LD Review Schema */}
      {platform && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              name: post.metadata.title,
              description: post.metadata.summary,
              datePublished: post.metadata.publishedAt,
              author: { "@type": "Organization", name: "AI GF Now" },
              itemReviewed: {
                "@type": "SoftwareApplication",
                name: platform.name,
                applicationCategory: "Entertainment",
                offers: {
                  "@type": "Offer",
                  price: platform.priceMonthly.replace("$", ""),
                  priceCurrency: "USD",
                },
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: platform.rating,
                bestRating: 5,
                worstRating: 1,
              },
            }),
          }}
        />
      )}
    </article>
  );
}
