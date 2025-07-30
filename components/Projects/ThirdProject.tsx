import HeroVideoDialog from "../magicui/hero-video-dialog";
import thumbnail from "@/public/ProjectsData/ThirdProjectThumbnail.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GithubIcon from "../svgs/githubIcon";
import { Radio } from "lucide-react";
export default function ThirdProject() {
  return (
    <div className="w-full h-fit">
      <CommonVersion />
    </div>
  );
}
function CommonVersion() {
  return (
    <div className="w-full h-screen bg-white/90 flex flex-col items-center relative">
      <h3 className="font-port-sans lowercase mt-6 xl:mt-12 flex">slim-url</h3>
      <div className="w-full h-fit justify-center flex items-center gap-2 lg:hidden">
        <a
          href="https://github.com/Aditya-Rawat01/url-shortener"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={30} fill="#000000" />
        </a>
        <a
          href="https://slimurl.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Radio className="text-green-500" />
        </a>
      </div>
      <div className="w-full justify-center hidden lg:flex items-center gap-2">
        <a
          href="https://github.com/Aditya-Rawat01/url-shortener"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={40} fill="#000000" />
        </a>
        <a
          href="https://slimurl.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Radio size={40} className="text-green-500" />
        </a>
      </div>
      <HeroVideoDialog
        className="block dark:hidden w-4/5 sm:w-3/5 md:w-1/2 lg:w-[40%] xl:w-1/3"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dlvcibxgx/video/upload/v1753688691/urlShortenerCloudinary_nhsuxs.mp4"
        thumbnailSrc={thumbnail.src}
        thumbnailAlt="Third Video Thumbnail"
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
                  Tech Stack : NEXT JS, Typescript, redis db, vercel.
                </li>
                <li className="list-disc">
                  Url shortener with custom alias feature.
                </li>
                <li className="list-disc">
                  <span className="hidden sm:flex">
                    Developed a high-performance, full-stack URL shortener with
                    Next.js and upstash Redis db.
                  </span>{" "}
                  This system features ultra-fast in-memory lookups and includes
                  custom, expiration-based link generation for efficient,
                  automated cleanup of inactive URLs after a two-week period.
                  The integration of Redis is crucial for handling rapid
                  read/write operations, which significantly enhances the
                  overall responsiveness and performance of the service.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-port-sans text-xl xl:text-2xl  custom:text-5xl">
              Features
            </AccordionTrigger>
            <AccordionContent className="flex flex-col text-[11px] xl:text-base custom:text-3xl md:text-[13px]">
              <ol className="pl-5 custom:pl-8 flex flex-col gap-2">
                <li className="list-disc">
                  Built and deployed a full-stack URL shortener using Next.js
                  (frontend + backend) and Redis for ultra-fast, in-memory URL
                  lookups.
                </li>
                <li className="list-disc">
                  Implemented custom short URL generation with support for
                  expiration-based link management to automatically clean up
                  inactive links.
                </li>
                <li className="list-disc">
                  Integrated Redis to efficiently handle rapid read/write
                  operations, enhancing system responsiveness and performance.
                </li>
                <li className="list-disc">
                  Links stay active upto two weeks ensuring a scheduled cleanup
                  for space efficiency.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
