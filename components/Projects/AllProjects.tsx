"use client";
import { clamp, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";
export default function AllProjects() {
  return (
    <div className="w-full h-fit">
      <MobileVersion />
      <PCVersion />
    </div>
  );
}

function MobileVersion() {
  return <div className="w-full h-full md:hidden"></div>;
}

function PCVersion() {
  const targetRef = useRef<HTMLDivElement>(null); // for attaching scroll to the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale1 = useTransform(scrollYProgress,[0.3, 0.5], ["1", "0.9"]);
  const scale2 = useTransform(scrollYProgress,[0.55, 0.75], ["1", "0.9"]);

  const y2 = useTransform(scrollYProgress,[0.3, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress,[0.55,0.75], ["100%", "0%"]);

  return (
    <motion.div
      ref={targetRef}
      className="w-full h-[300vh] relative hidden text-4xl xl:text-6xl  custom:text-8xl md:block"
      >
      <div className="sticky top-0 w-full h-screen">
        <motion.div
        style={{scale:scale1}}
        className="w-screen h-screen absolute top-0 z-10 bg-white  border border-t-2 border-black flex justify-center">
          <FirstProject/>
        </motion.div>

        <motion.div
          style={{ y:y2, scale:scale2 }}
          className="w-screen h-screen absolute top-0 z-20 bg-white border border-t-2 border-black flex justify-center"
        >
                    <SecondProject/>

        </motion.div>
        <motion.div
          style={{ y:y3 }}
         className="w-screen h-screen absolute top-0 z-30 bg-white border border-t-2 border-black flex justify-center">
                    <ThirdProject/>
        </motion.div>
      </div>
    </motion.div>
  );
}
