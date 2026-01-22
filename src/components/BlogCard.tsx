import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/wellness-hub/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-3 text-sm text-gray-medium mb-2">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold lowercase tracking-tight mb-3 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          
          <p className="text-base leading-relaxed text-gray-medium mb-4">
            {post.excerpt}
          </p>
          
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-medium hover:text-accent transition-colors">
            Read More
          </span>
        </div>
      </Link>
    </article>
  );
}

