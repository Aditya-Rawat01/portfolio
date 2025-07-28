import HeroVideoDialog from "../magicui/hero-video-dialog";
import thumbnail from "@/public/ProjectsData/FirstProjectThumbnail.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/app/globals.css"
export default function FirstProject() {
  return (
    <div className="w-full h-fit">
      <MobileVersion />
      <PCVersion />
    </div>
  );
}

function MobileVersion() {
  return <div className="w-full h-full sm:hidden"></div>;
}

function PCVersion() {
  return (
    <div className="w-full h-screen bg-white/90 flex flex-col gap-5 items-center relative">
      <p className="font-port-sans lowercase text-6xl mt-12">type-shi.gg</p>
      
      <HeroVideoDialog
        className="block dark:hidden w-1/3 h-1/3"
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
            <AccordionTrigger className="font-port-sans text-2xl">
              Description
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-base">
              <ol className="pl-5 flex flex-col gap-3">
              <li className="list-disc">Tech Stack : NextJS, Jotai, Typescript, Prisma, Postgres, better-auth, zod,
chartjs, motion</li>
              <li className="list-disc">
                Minimalistic typing platform for web (Devices with real
                keyboards)*
              </li>
              <li className="list-disc">
                This project is a full-stack, minimalist typing platform
                designed to provide a clean, customizable, and effective practice environment for users of all levels. The platform's
                core philosophy is to remove distractions and empower users with
                detailed feedback to accelerate their typing proficiency in both
                conventional and programming languages.
              </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-port-sans text-2xl">
              Features
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-base">
              <ol className="pl-5 flex flex-col gap-3">
                <li className="list-disc">
                  Implemented 12 different customizable visual themes and
                  different spoken and coding languages for practice like
                  english, spanish, portuguese, java, js etc.
                </li>
                <li className="list-disc">
                  Responsive Design with end to end authentication implemented with better-auth supporting google, github and custom credentials for same account. 
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
      <div className="absolute flex gap-4 bottom-2">
        <p className="w-fit rounded-2xl p-2 bg-black/10 hover:outline hover:outline-black  text-black cursor-pointer hover:bg-white hover:text-black">
        <a href="https://github.com/Aditya-Rawat01/type-shi.gg" target="_blank" rel="noreferrer">Github</a></p>
        <p className="w-fit rounded-2xl p-2 bg-black/10 text-black hover:outline hover:outline-black cursor-pointer hover:bg-white hover:text-black">
        <a href="https://type-shi-gg.vercel.app/" target="_blank" rel="noreferrer">Live link</a></p>

      </div>
    </div>
  );
}
