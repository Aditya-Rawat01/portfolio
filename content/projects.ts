import type { ProjectRecord } from "@/types/content";

export const projects: ProjectRecord[] = [
  {
    title: "Koala — Self-Hosted Observability Tool",
    description:
      "Designed and built a self-hosted observability system monitoring HTTP/HTTPS and WebSocket endpoints with real-time streaming via Server-Sent Events (SSE). Built rolling metrics aggregation, failure-detection algorithms, and an SMTP-based alerting system.",
    image: "/koala.png",
    liveUrl: "https://res.cloudinary.com/dlvcibxgx/video/upload/v1771911996/output_rv727w.mp4",
    repoUrl: "https://github.com/Aditya-Rawat01/koala-self-deployed",
    tag: "NODE.JS, EXPRESS, REACT, TYPESCRIPT, SQLITE, DOCKER, SSE",
  },
  {
    title: "Echo — Weekly Tech News",
    description:
      "Architected a production-grade, event-driven pipeline that aggregates, classifies, deduplicates, and ranks tech news using vector similarity search. Implemented scalable ingestion workflow handling periodic RSS collection and semantic enrichment.",
    image: "/echo.png",
    liveUrl: "https://echo.ardev.in/",
    repoUrl: "https://github.com/Aditya-Rawat01/weekly-tech-review-pipeline",
    tag: "TYPESCRIPT, NEXT.JS, PRISMA, POSTGRES, PGVECTOR, GROQ, JINA",
  },
  {
    title: "RAGI — RQ based RAG Pipeline",
    description:
      "Architected a distributed RAG pipeline using FastAPI and RQ workers for asynchronous job processing. Features local embedding generation (Ollama) and Qdrant vector database for scalable semantic retrieval.",
    image: "/ragi.png",
    liveUrl: "https://res.cloudinary.com/dlvcibxgx/video/upload/v1768463666/preview_ka1nxk.mp4",
    repoUrl: "https://github.com/Aditya-Rawat01/Ragi_RQ-based-RAG-pipeline",
    tag: "DOCKER, PYTHON, FASTAPI, LANGCHAIN, QDRANT, REDIS, OLLAMA",
  },
];
