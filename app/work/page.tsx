import { NavHeader } from "@/components/layout/NavHeader";
import { projects } from "@/content";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

function getLiveLabel(title: string): string {
  if (title.toLowerCase().includes("koala")) return "SETUP";
  if (title.toLowerCase().includes("ragi")) return "PREVIEW";
  return "LIVE";
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <NavHeader />
      <main className="flex flex-col">
        <section className="w-full py-16">
          <div className="max-w-[960px] mx-auto px-6 md:px-24 flex flex-col gap-12">
            {/* Page Header */}
            <div className="flex flex-col gap-4 border-b border-border-subtle pb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-headline-lg font-bold text-on-background tracking-[-0.02em]">
                  Work
                </h1>
                <a
                  href="https://github.com/Aditya-Rawat01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-caps text-on-background font-bold tracking-[0.1em] inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity border-b-2 border-on-background hover:border-transparent pb-0.5"
                >
                  <Github size={14} /> MORE ON GITHUB <ArrowUpRight size={14} />
                </a>
              </div>
              <p className="text-body-md text-on-surface-variant font-medium leading-[1.6] max-w-[600px]">
                A collection of projects I have built from self-hosted observability tools to AI-powered pipelines and production web apps.
              </p>
            </div>

            {/* Project Cards */}
            <div className="flex flex-col gap-16">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group flex flex-col gap-6"
                >
                  {/* Image */}
                  <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl border border-border-subtle bg-surface-container-low">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 960px"
                      className="object-cover w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-headline-sm font-bold text-on-background">
                      {project.title}
                    </h2>

                    <p className="text-body-md text-on-surface-variant leading-[1.6] font-medium max-w-[720px]">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tag?.split(",").map((tech) => (
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
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-label-caps text-on-background font-bold tracking-[0.1em] inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity border-b-2 border-on-background hover:border-transparent pb-0.5"
                      >
                        {getLiveLabel(project.title)} <ArrowUpRight size={14} />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-label-caps text-on-surface-variant font-bold tracking-[0.1em] inline-flex items-center gap-1.5 hover:text-on-background transition-colors pb-0.5"
                      >
                        <Github size={14} /> VIEW PROJECT
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-b border-border-subtle mt-4" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
