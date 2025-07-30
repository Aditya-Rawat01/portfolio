import HeroVideoDialog from "../magicui/hero-video-dialog";
import thumbnail from "@/public/ProjectsData/FirstProjectThumbnail.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/app/globals.css";
import GithubIcon from "../svgs/githubIcon";
import { Chrome, CloudCheck, Radio } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
export default function FirstProject() {
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
        type<span className="hidden sm:block">-</span>shi.gg
      </h3>
      <div className="w-full h-fit justify-center flex items-center gap-2 lg:hidden">
        <GithubIcon size={30} fill="#000000" />
        <Radio className="text-green-500" />
      </div>
      <div className="w-full justify-center hidden lg:flex items-center gap-2">
        <GithubIcon size={40} fill="#000000" />
        <Radio className="text-green-500" size={40}/>
      </div>
      <HeroVideoDialog
        className="block dark:hidden w-4/5 sm:w-3/5 md:w-1/2 lg:w-[40%] xl:w-1/3"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dlvcibxgx/video/upload/v1753688914/type-shi.ggCloudinary_-_Made_with_Clipchamp_yxlojr.mp4"
        thumbnailSrc={thumbnail.src}
        thumbnailAlt="First Video Thumbnail"
      />

      <div className="w-2/3 h-[400px] flex flex-col items-center pt-3">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-port-sans text-xl xl:text-2xl custom:text-5xl">
              Description
            </AccordionTrigger>
            <AccordionContent className="flex flex-col text-[11px] xl:text-base custom:text-3xl md:text-[13px]">
              <ol className="pl-5 custom:pl-8 flex flex-col gap-2 xl:gap-3">
                <li className="list-disc">
                  Tech Stack : NextJS, Jotai, Typescript, Prisma, Postgres,
                  better-auth, zod, chartjs, motion.
                </li>
                <li className="list-disc">
                  Minimalistic typing platform for web. (Devices with real
                  keyboards)*
                </li>
                <li className="list-disc">
                  This project is a full-stack, minimalist typing platform
                  designed to provide a clean, customizable, and effective
                  practice environment for users of all levels.{" "}
                  <span className="hidden md:block">
                    The platform&apos;s core philosophy is to remove
                    distractions and empower users with detailed feedback to
                    accelerate their typing proficiency in both conventional and
                    programming languages.
                  </span>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-port-sans text-xl xl:text-2xl  custom:text-5xl">
              Features
            </AccordionTrigger>
            <AccordionContent className="flex flex-col text-[11px] xl:text-base custom:text-3xl md:text-[13px]">
              <ol className="pl-5 custom:pl-8 flex flex-col gap-2 xl:gap-3">
                <li className="list-disc">
                  Implemented 12 different customizable visual themes and
                  different spoken and coding languages for practice like
                  english, spanish, portuguese, java, js etc.
                </li>
                <li className="list-disc hidden customList:block">
                  Responsive Design with end to end authentication implemented
                  with better-auth supporting google, github and custom
                  credentials for same account.
                </li>
                <li className="list-disc">
                  Designed visual charts like problematic keys, last year tests,
                  implemented history table with paginated queries for the user
                  progress.
                </li>
                <li className="list-disc">
                  Implemented bot detection code logic in backend while storing
                  tests to ensure the fair practices and avoid any cheating.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="absolute flex gap-4 bottom-2"></div>
    </div>
  );
}
