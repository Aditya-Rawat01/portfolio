import HeroVideoDialog from "../magicui/hero-video-dialog";
import thumbnail from "@/public/ProjectsData/SecondProjectThumbnail.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GithubIcon from "../svgs/githubIcon";
import { Presentation } from "lucide-react";
export default function Second() {
  return (
    <div className="w-full h-fit">
      <CommonVersion />
    </div>
  );
}

function CommonVersion() {
  return (
    <div className="w-full h-screen bg-white/90 flex flex-col items-center relative">
      <h3 className="font-port-sans lowercase mt-6 xl:mt-12 flex">
        Ragi: A Rag Based Pipeline
      </h3>
      <div className="w-full h-fit justify-center flex items-center gap-2 lg:hidden">
        <a
          href="https://github.com/Aditya-Rawat01/Ragi_RQ-based-RAG-pipeline"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={30} fill="#000000" />
        </a>
      </div>
      <div className="w-full justify-center hidden lg:flex items-center gap-2">
        <a
          href="https://github.com/Aditya-Rawat01/Ragi_RQ-based-RAG-pipeline"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={40} fill="#000000" />
        </a>
      </div>
      <HeroVideoDialog
        className="block dark:hidden w-4/5 sm:w-3/5 md:w-1/2 lg:w-[40%] xl:w-1/3"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dlvcibxgx/video/upload/v1768463666/preview_ka1nxk.mp4"
        thumbnailSrc={thumbnail.src}
        thumbnailAlt="Second Video Thumbnail"
      />
      <div className="w-2/3 h-[400px] flex flex-col items-center pt-3">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-port-sans text-xl xl:text-2xl  custom:text-5xl">
              Description
            </AccordionTrigger>
            <AccordionContent className="flex flex-col text-[11px] xl:text-base custom:text-3xl md:text-[13px]">
              <ol className="pl-5 custom:pl-8 flex flex-col gap-2">
                <li className="list-disc">
                  Tech Stack: Docker, Python, FastAPI, Langchain, Qdrant, Redis,
                  Ollama.
                </li>
                <li className="list-disc">
                  lightweight RAG pipeline with parallel processing and
                  retrieval.
                </li>
                <li className="list-disc">
                  <p>
                    This project implements a lightweight, production-oriented
                    Retrieval-Augmented Generation (RAG) pipeline designed for
                    fast, grounded responses using locally hosted models. It
                    uses Ollama for generating embeddings locally, avoiding
                    reliance on external APIs, and Qdrant as the vector database
                    for efficient semantic search and similarity retrieval.
                  </p>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-port-sans text-xl xl:text-2xl custom:text-5xl">
              Features
            </AccordionTrigger>
            <AccordionContent className="flex flex-col text-[11px] xl:text-base custom:text-3xl md:text-[13px]">
              <ol className="pl-5 custom:pl-8 flex flex-col gap-2">
                <li className="list-disc">
                  Built a vector-based retrieval layer with Qdrant to perform
                  fast similarity search and context retrieval over embedded
                  documents.
                </li>
                <li className="list-disc">
                  Implemented document chunking, embedding, and indexing
                  workflows to improve retrieval accuracy and response
                  grounding.
                </li>
                <li className="list-disc">
                  Used Redis Queue (RQ) workers to handle background ingestion
                  and parallel embedding tasks, enabling scalable and
                  non-blocking processing.
                </li>
                <li className="list-disc">
                  Exposed clean, API-first endpoints using FastAPI and served
                  the system via Uvicorn for low-latency query handling.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
