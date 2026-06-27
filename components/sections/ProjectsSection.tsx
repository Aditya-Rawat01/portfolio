"use client";

import { projects } from "@/content";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

function getLiveLabel(title: string): string {
  if (title.toLowerCase().includes("koala")) return "SETUP";
  if (title.toLowerCase().includes("ragi")) return "PREVIEW";
  return "LIVE";
}

export function ProjectsSection() {
  const featured = projects[0];

  return (
    <section id="work" className="w-full py-16 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 md:px-24 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-headline-md font-bold text-on-background">
            Highlighted Work
          </h2>
          <Link
            href="/work"
            className="text-label-caps text-on-background font-bold tracking-[0.1em] inline-flex items-center gap-1 hover:opacity-80 transition-opacity border-b-2 border-on-background hover:border-transparent pb-0.5"
          >
            VIEW ALL WORK <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Featured Project Card */}
        {featured && (
          <div className="group rounded-xl border border-border-subtle bg-surface hover:bg-surface-container-low transition-all duration-300 overflow-hidden flex flex-col">
            {/* Image */}
            <div className="w-full aspect-video relative overflow-hidden border-b border-border-subtle bg-surface-container-low">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 960px) 100vw, 960px"
                className="object-cover w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <h3 className="text-headline-sm font-bold text-on-background">
                {featured.title}
              </h3>

              <p className="text-body-md text-on-surface-variant leading-[1.6] font-medium">
                {featured.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {featured.tag?.split(",").map((tech) => (
                  <span
                    key={tech.trim()}
                    className="px-3 py-1 rounded-full bg-surface-container text-label-sm text-on-surface-variant font-bold tracking-[0.08em]"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-caps text-on-background font-bold tracking-widest inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity border-b-2 border-on-background hover:border-transparent pb-0.5"
                >
                  {getLiveLabel(featured.title)} <ArrowUpRight size={14} />
                </a>
                <a
                  href={featured.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-caps text-on-surface-variant font-bold tracking-widest inline-flex items-center gap-1.5 hover:text-on-background transition-colors pb-0.5"
                >
                  <Github size={14} /> VIEW PROJECT
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
