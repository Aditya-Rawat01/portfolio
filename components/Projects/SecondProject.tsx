import HeroVideoDialog from "../magicui/hero-video-dialog";
import thumbnail from "@/public/ProjectsData/SecondProjectThumbnail.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GithubIcon from "../svgs/githubIcon";
import { Radio } from "lucide-react";
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
      <h3 className="font-port-sans lowercase mt-6 xl:mt-12 flex">talkative</h3>
      <div className="w-full h-fit justify-center flex items-center gap-2 lg:hidden">
        <a
          href="https://github.com/Aditya-Rawat01/talkative--chat-app-"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={30} fill="#000000" />
        </a>
        <a
          href="https://talkative-chat-app-steel.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Radio className="text-green-500" />
        </a>
      </div>
      <div className="w-full justify-center hidden lg:flex items-center gap-2">
        <a
          href="https://github.com/Aditya-Rawat01/talkative--chat-app-"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={40} fill="#000000" />
        </a>
        <a
          href="https://talkative-chat-app-steel.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Radio size={40} className="text-green-500" />
        </a>
      </div>
      <HeroVideoDialog
        className="block dark:hidden w-4/5 sm:w-3/5 md:w-1/2 lg:w-[40%] xl:w-1/3"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dlvcibxgx/video/upload/v1753689049/talkativeCloudinary_ko2rkh.mp4"
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
                  Tech Stack: NextJS, Express, typescript, Websockets, Mongodb,
                  prisma, react query.
                </li>
                <li className="list-disc">
                  Chat Application with persistent messages and status
                  indicators.
                </li>
                <li className="list-disc">
                  <p>
                    Engineered a full-featured, real-time chat application
                    focused on performance and user experience. Enabled
                    seamless, person-to-person messaging using WebSockets,
                    guaranteed message delivery with an offline support system,
                    and optimized media performance.{" "}
                    <span className="hidden md:inline">
                      by integrating Cloudinary for dynamic avatar storage, The
                      application was further enhanced with real-time
                      online/offline presence indicators to improve user
                      interaction and awareness.
                    </span>
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
                  Built a real-time, person-to-person chat application with
                  WebSockets, enabling seamless messaging between users.
                </li>
                <li className="list-disc">
                  Implemented offline message support, allowing users to receive
                  missed messages when they reconnect.
                </li>
                <li className="list-disc">
                  Integrated Cloudinary for dynamic avatar storage and delivery,
                  optimizing image performance and load times.
                </li>
                <li className="list-disc">
                  Developed online/offline status with sent messages time
                  indicators for enhanced user awareness and interaction.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
