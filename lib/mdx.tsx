import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { RatingBadge } from "@/components/mdx/RatingBadge";
import { CTABox } from "@/components/mdx/CTABox";
import { QuickSpec } from "@/components/mdx/QuickSpec";
import { ProsCons } from "@/components/mdx/ProsCons";
import { Accordion, AccordionGroup } from "@/components/mdx/Accordion";
import React from "react";

export type PostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images?: string[];
  tag?: string;
  team?: { name: string; role: string; avatar: string; linkedIn: string }[];
};

export type Post = {
  metadata: PostMetadata;
  slug: string;
  content: string;
};

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const metadata: PostMetadata = {
    title: data.title || "",
    publishedAt: data.publishedAt || "",
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    team: data.team || [],
  };
  // Rewrite old /work/ links to /reviews/
  const fixedContent = content.replace(/\(\/work\//g, "(/reviews/");
  return { metadata, content: fixedContent };
}

export function getPosts(dir: string): Post[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file));
      const slug = path.basename(file, ".mdx");
      return { metadata, slug, content };
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}

export function getPost(dir: string, slug: string): Post | null {
  const filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { metadata, content } = readMDXFile(filePath);
  return { metadata, slug, content };
}

const mdxComponents = {
  RatingBadge,
  CTABox,
  QuickSpec,
  ProsCons,
  Accordion,
  AccordionGroup,
  h1: (props: any) => <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-5" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 scroll-mt-20" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="text-muted-foreground leading-8 mb-5" {...props} />,
  a: (props: any) => {
    const isExternal = props.href?.startsWith("http");
    return (
      <a
        className="text-primary hover:underline"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  ul: (props: any) => <ul className="list-disc pl-6 mb-5 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-5 space-y-2" {...props} />,
  li: (props: any) => <li className="text-muted-foreground leading-8" {...props} />,
  strong: (props: any) => <strong className="font-bold text-foreground" {...props} />,
  hr: () => <hr className="my-8 border-secondary" />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-muted" {...props} />,
  th: (props: any) => <th className="text-left p-3 font-semibold border-b border-secondary" {...props} />,
  td: (props: any) => <td className="p-3 border-b border-secondary text-muted-foreground" {...props} />,
  code: (props: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-[0.9em]" {...props} />,
  pre: (props: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4" {...props} />,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
    />
  );
}
