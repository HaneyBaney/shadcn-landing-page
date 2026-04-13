import path from "path";
import { getPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const REVIEWS_DIR = path.join(process.cwd(), "content", "reviews");

export const metadata: Metadata = {
  title: "Blog — AI GF Now | Reviews, Comparisons & Guides",
  description:
    "AI companion app reviews, head-to-head comparisons, and guides. Updated monthly with honest testing results.",
  openGraph: {
    title: "Blog — AI GF Now | Reviews, Comparisons & Guides",
    description: "AI companion app reviews, head-to-head comparisons, and guides. Updated monthly.",
    type: "website",
    url: "https://aigfnow.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI GF Now Blog | Reviews & Comparisons",
    description: "AI companion app reviews and comparisons. Updated monthly.",
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://aigfnow.com/blog",
  },
};

export default function BlogIndex() {
  const blogPosts = getPosts(BLOG_DIR);
  const reviews = getPosts(REVIEWS_DIR);

  return (
    <div className="container max-w-5xl py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Reviews, Comparisons & Guides
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Every article is based on real testing with real accounts. No sponsored
          content, no fake scores.
        </p>
      </div>

      {/* Reviews Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Platform Reviews
          <Badge variant="secondary">{reviews.length}</Badge>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((post) => (
            <Link key={post.slug} href={`/reviews/${post.slug}`}>
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      Review
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground line-clamp-2">
                  {post.metadata.summary}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog / VS Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Comparisons & Guides
          <Badge variant="secondary">{blogPosts.length}</Badge>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {post.metadata.tag || "Guide"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground line-clamp-2">
                  {post.metadata.summary}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
