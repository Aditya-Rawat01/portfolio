import type { BlogPostRecord } from "@/types/content";
import { EXTERNAL_LINK_PROPS } from "@/lib/links";

interface BlogPostItemProps {
  post: BlogPostRecord;
}

export function BlogPostItem({ post }: BlogPostItemProps) {
  return (
    <li className="flex flex-col gap-1 py-3">
      <h3 className="text-base font-medium">
        <a
          href={post.postUrl}
          {...EXTERNAL_LINK_PROPS}
          aria-label={post.title}
          className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          {post.title}
        </a>
      </h3>

      {(post.tag || post.readTime || post.date) && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {post.tag && <span className="rounded bg-muted/50 px-1.5 py-0.5">{post.tag}</span>}
          {post.readTime && <span>{post.readTime}</span>}
          {post.date && <span>{post.date}</span>}
        </div>
      )}
    </li>
  );
}
