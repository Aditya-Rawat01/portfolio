import { NavHeader } from "@/components/layout/NavHeader";
import { blog } from "@/content";
import { ArrowUpRight } from "lucide-react";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <NavHeader />
      <main className="flex flex-col">
        <section className="w-full py-16">
          <div className="max-w-[960px] mx-auto px-6 md:px-24 flex flex-col gap-12">
            {/* Page Header */}
            <div className="flex flex-col gap-6 border-b border-border-subtle pb-8">
              <h1 className="text-headline-lg font-bold text-on-background tracking-[-0.02em]">
                Posts
              </h1>
              <p className="text-body-lg text-on-surface-variant font-medium leading-[1.7] max-w-[700px]">
                I like learning new things and writing about the process. Whether it&apos;s picking up a completely new stack in a week or diving deep into something I already use — these posts are my way of documenting the journey and sharing what I find along the way.
              </p>
              <a
                href="https://medium.com/@adityarawat240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-caps text-on-background font-bold tracking-[0.1em] inline-flex items-center gap-1 hover:opacity-80 transition-opacity w-fit"
              >
                VIEW ALL ON MEDIUM <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Posts List */}
            <div className="flex flex-col gap-8">
              {blog.map((post) => (
                <a
                  key={post.title}
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 md:p-8 rounded-xl border border-border-subtle bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Top row: Tag, Date, Read time */}
                  <div className="flex items-center gap-4">
                    <span className="text-label-sm text-on-surface-variant/80 tracking-[0.08em] font-bold">
                      {post.tag}
                    </span>
                    <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] font-medium">
                      {post.date}
                    </span>
                    <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-headline-sm font-bold text-on-background group-hover:text-primary transition-colors leading-[1.3]">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-body-md text-on-surface-variant leading-[1.6] font-medium max-w-[720px]">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="text-label-caps text-on-background font-bold tracking-[0.1em] inline-flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    READ MORE <ArrowUpRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
