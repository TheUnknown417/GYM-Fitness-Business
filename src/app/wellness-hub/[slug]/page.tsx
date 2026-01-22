import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-white/90">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/wellness-hub"
              className="inline-flex items-center gap-2 text-sm text-gray-medium hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Wellness Hub
            </Link>

            <div className="prose prose-lg max-w-none">
              <div className="text-lg leading-relaxed text-gray-medium whitespace-pre-line">
                {post.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-light">
              <Link
                href="/memberships"
                className="inline-block px-8 py-4 bg-accent text-primary-white font-semibold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

