"use client";

import { profile, experience, socials } from "@/content";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  const getSocialIcon = (network: string) => {
    switch (network.toLowerCase()) {
      case "github":
        return <Github size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "twitter":
      case "x":
        return <Twitter size={16} />;
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="w-full pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 md:px-24 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div>
              <h1 className="text-display-hero text-on-background tracking-[-0.03em] leading-none">
                {profile.name}
              </h1>
              <p className="text-label-caps text-on-surface-variant font-bold mt-3 sm:mt-2 tracking-[0.15em]">
                {profile.role}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-1">
              {socials.map((social) => (
                <a
                  key={social.network}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-sm text-on-surface-variant hover:text-on-background hover:bg-surface-container-low transition-all"
                  title={social.label}
                >
                  {getSocialIcon(social.network)}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6 text-on-background/90">
            <p className="text-body-lg leading-[1.6] text-on-surface font-medium">
              Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications. Experienced in building and deploying containerized production systems using Next.js, FastAPI, Node.js, Docker, and cloud services.
            </p>
          </div>
        </div>

        <div className="w-full border-t border-border-subtle pt-8 mt-4">
          <div className="relative pl-6 border-l border-border-subtle flex flex-col gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row md:items-center justify-between gap-2 text-on-background group">
                <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-on-surface-variant border-2 border-background group-hover:bg-secondary transition-colors duration-300" />

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <span className="text-body-md font-bold text-on-background">
                    {exp.organization}
                  </span>
                  <span className="hidden md:inline text-on-surface-variant/40">—</span>
                  <span className="text-body-md text-on-surface-variant">
                    {exp.title}
                  </span>
                </div>

                <div className="hidden md:block grow mx-4 border-b border-dotted border-border-subtle" />

                <span className="text-meta-sm text-on-surface-variant font-medium shrink-0">
                  {new Date(exp.startDate + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })} — {exp.endDate ? new Date(exp.endDate + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-b border-border-subtle py-4 mt-4 overflow-hidden">
          <div className="inline-flex w-max animate-marquee will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {["REACT", "NEXT.JS", "TYPESCRIPT", "PYTHON", "NODE.JS", "DOCKER", "FASTAPI", "POSTGRESQL", "REDIS", "AWS", "GRAPHQL", "PRISMA", "LANGCHAIN", "TAILWIND CSS"].map((tech) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-label-caps text-on-surface-variant tracking-widest font-bold px-6 py-1 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
