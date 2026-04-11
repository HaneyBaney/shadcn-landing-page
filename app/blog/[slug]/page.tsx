import path from "path";
import { getPosts, getPost, MDXContent } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function generateStaticParams() {
  const posts = getPosts(BLOG_DIR);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(BLOG_DIR, params.slug);
  if (!post) return {};
  return {
    title: `${post.metadata.title} — AI GF Now`,
    description: post.metadata.summary,
  };
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(BLOG_DIR, params.slug);
  if (!post) notFound();

  const isComparison = post.metadata.tag === "Comparison" || params.slug.includes("-vs-");

  return (
    <article className="container max-w-3xl py-16 md:py-24">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">{post.metadata.tag || "Guide"}</Badge>
          <span className="text-sm text-muted-foreground">{post.metadata.publishedAt}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-lg text-muted-foreground">{post.metadata.summary}</p>
      </div>

      <div className="prose-custom">
        <MDXContent source={post.content} />
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 p-6 rounded-xl border-2 border-primary/30 bg-primary/5 text-center">
        <h3 className="text-xl font-bold mb-2">Want the full picture?</h3>
        <p className="text-muted-foreground mb-4">
          See all 9 platforms compared side-by-side with real test results.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="font-bold group/arrow">
            <a
              href="https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try #1 Pick Free
              <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="secondary" className="font-bold">
            <Link href="/#platforms">See All Rankings</Link>
          </Button>
        </div>
      </div>

      {/* Related links */}
      <div className="mt-8 pt-8 border-t border-secondary">
        <h3 className="font-bold mb-4">Keep Reading</h3>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">All Articles</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/#platforms">Platform Rankings</Link>
          </Button>
          {isComparison && (
            <Button asChild variant="outline" size="sm">
              <Link href="/#compare">Comparison Table</Link>
            </Button>
          )}
        </div>
      </div>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.metadata.title,
            description: post.metadata.summary,
            datePublished: post.metadata.publishedAt,
            author: { "@type": "Organization", name: "AI GF Now" },
            publisher: {
              "@type": "Organization",
              name: "AI GF Now",
              url: "https://aigfnow.com",
            },
          }),
        }}
      />
    </article>
  );
}
