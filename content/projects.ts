import type { ProjectRecord } from "@/types/content";

export const projects: ProjectRecord[] = [
  {
    title: "Koala: Self-Hosted Observability Tool",
    description:
      "Designed and built a self-hosted observability system monitoring HTTP/HTTPS and WebSocket endpoints with real-time streaming via Server-Sent Events (SSE). Built rolling metrics aggregation, failure-detection algorithms, and an SMTP-based alerting system.",
    image: "/koala.png",
    liveUrl: "https://res.cloudinary.com/dlvcibxgx/video/upload/v1771911996/output_rv727w.mp4",
    repoUrl: "https://github.com/Aditya-Rawat01/koala-self-deployed",
    tag: "NODE.JS, EXPRESS, REACT, TYPESCRIPT, SQLITE, DOCKER, SSE",
  },
  {
    title: "Echo: Weekly Tech News",
    description:
      "Architected a production-grade, event-driven pipeline that aggregates, classifies, deduplicates, and ranks tech news using vector similarity search. Implemented scalable ingestion workflow handling periodic RSS collection and semantic enrichment.",
    image: "/echo.png",
    liveUrl: "https://echo.ardev.in/",
    repoUrl: "https://github.com/Aditya-Rawat01/weekly-tech-review-pipeline",
    tag: "TYPESCRIPT, NEXT.JS, PRISMA, POSTGRES, PGVECTOR, GROQ, JINA",
  },
  {
    title: "NextJs Agent: Agent harness for nextjs projects",
    description:
      "Architected an orchestrator worker AI agent framework for Next.js development using Python. Implemented autonomous task execution, context compaction, multi provider LLM support, and a persistent CLI for long running development sessions.",
    image: "/next-agent.png",
    liveUrl: "https://res.cloudinary.com/dlvcibxgx/video/upload/v1771911996/output_rv727w.mp4",
    repoUrl: "https://github.com/aditya-devlabs/An-Agent-Journey/tree/main/next-agent",
    tag: "PYTHON, PYDANTIC, OPEN AI SDK, CLICK, RICH, TIKTOKEN",
  },
]; 

