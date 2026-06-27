import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { EXTERNAL_LINK_PROPS } from "@/lib/links";
import type { ProjectRecord } from "@/types/content";

interface ProjectCardProps {
  project: ProjectRecord;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20">
      <div className="relative aspect-3/2 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={project.liveUrl}
              {...EXTERNAL_LINK_PROPS}
              aria-label={`Live preview of ${project.title}`}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.repoUrl}
              {...EXTERNAL_LINK_PROPS}
              aria-label={`Repository for ${project.title}`}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{project.description}</p>

        {(project.metric || project.tag) && (
          <div className="flex items-center gap-2 pt-1">
            {project.metric && (
              <span className="text-xs font-medium text-foreground/80">
                {project.metric}
              </span>
            )}
            {project.tag && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {project.tag}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
