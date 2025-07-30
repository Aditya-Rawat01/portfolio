"use client";
import Image from "next/image";
import scrollupImage from "@/public/scroll-upWhite-removebg.png";
import { motion } from "motion/react";
export default function ProjectPlaceholder() {
  return (
    <div className="w-full h-fit">
      <CommonVersion/>
    </div>
  );
}

function CommonVersion() {
  return (
    <div className="w-full h-screen bg-black text-white  flex-col items-center justify-center relative flex">
      <h3 className="font-port-sans text-4xl xl:text-6xl  custom:text-9xl">Projects</h3>

      <motion.div
        viewport={{ amount: 0.7, once:true }}
        initial={{
          y: 0,
          opacity:1
        }}
        transition={{
          duration: 1.5
        }}
        whileInView={{
          y: -100,
          opacity:0
        }}
        className="w-[128px] h-[128px] absolute bottom-0"
      >
        <Image
          src={scrollupImage}
          alt="scroll down"
          width={128}
          height={128}
          className="absolute bottom-8"
        />
      </motion.div>
    </div>
  );
}
