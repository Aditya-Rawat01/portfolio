"use client";

import { blog } from "@/content";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  return (
    <section id="posts" className="w-full py-16 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 md:px-24 flex flex-col gap-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-headline-md font-bold text-on-background">
            Recent Posts
          </h2>
          <a
            href="https://medium.com/@adityarawat240"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-caps text-on-background font-bold tracking-widest inline-flex items-center gap-1 hover:opacity-80 transition-opacity border-b-2 border-on-background hover:border-transparent pb-0.5"
          >
            VIEW JOURNAL <ArrowUpRight size={14} />
          </a>
        </div>

        {blog.length === 0 ? (
          <p className="text-on-surface-variant text-body-md">No posts to display.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {blog.map((post) => (
              <a
                key={post.title}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-border-subtle bg-surface hover:bg-surface-container-low transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-label-sm text-on-surface-variant/80 tracking-[0.08em] font-bold">
                    {post.tag}
                  </span>
                  <span className="text-label-sm text-on-surface-variant/60 tracking-[0.08em] font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-body-lg font-bold text-on-background group-hover:text-primary transition-colors leading-[1.3]">
                  {post.title}
                </h3>

                <p className="text-meta-sm text-on-surface-variant leading-normal font-medium">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
