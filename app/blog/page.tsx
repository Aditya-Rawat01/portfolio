import Link from "next/link";
import { blog } from "@/content";
import { BlogPostItem } from "@/components/shared/BlogPostItem";
import { sortMostRecentFirst } from "@/lib/sort";

export default function BlogPage() {
  const sorted = sortMostRecentFirst(blog, (p) => p.date);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">
        ← Back
      </Link>

      <h1 className="mt-6 text-2xl font-bold">All Posts</h1>

      {sorted.length === 0 ? (
        <p className="mt-8 text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="mt-8 divide-y divide-border">
          {sorted.map((post) => (
            <BlogPostItem key={post.postUrl} post={post} />
          ))}
        </ul>
      )}
    </main>
  );
}
