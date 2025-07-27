"use client";
import { clamp, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export default function AllProjects() {
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
  const targetRef = useRef<HTMLDivElement>(null); // for attaching scroll to the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale1 = useTransform(scrollYProgress,[0.3, 0.5], ["1", "0.9"]);
  const scale2 = useTransform(scrollYProgress,[0.5, 0.7], ["1", "0.9"]);

  const y2 = useTransform(scrollYProgress,[0.3, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress,[0.5,0.7], ["100%", "0%"]);
  console.log(y2.get())

  return (
    <motion.div
      ref={targetRef}
      className="w-full h-[300vh] relative"
      >
      <div className="sticky top-0 w-full h-screen">
        <motion.div
      style={{scale:scale1}}
        className="w-screen h-screen absolute top-0 z-10 bg-red-300 flex justify-center">
          <p className="font-port-sans text-6xl mt-12">Project 1</p>
        </motion.div>

        <motion.div
          style={{ y:y2, scale:scale2 }}
          className="w-screen h-screen absolute top-0 z-20 bg-yellow-300 flex justify-center"
        >
          <p className="font-port-sans text-6xl mt-12">Project 2</p>
        </motion.div>
        <motion.div
          style={{ y:y3 }}
         className="w-screen h-screen absolute top-0 z-30 bg-blue-300 flex justify-center">
          <p className="font-port-sans text-6xl mt-12">Project 3</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
