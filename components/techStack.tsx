"use client";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import nextSrc from "@/public/techStack/next.jpg"
import reactSrc from "@/public/techStack/react.svg"
import reactQuery from "@/public/techStack/react-query.jpg"
import jotai from "@/public/techStack/jotai-mascot.png"
import tailwind from "@/public/techStack/tailwind.jpg"
import js from "@/public/techStack/javascript-logo.jpg"
import framerMotion from "@/public/techStack/motion.png"
import nodejs from "@/public/techStack/node-js.jpg"
import expressjs from "@/public/techStack/express.jpg"
import mongodb from "@/public/techStack/mongodb.jpg"
import prisma from "@/public/techStack/prisma.png"
import postgres from "@/public/techStack/postgres.jpg"
import typescript from "@/public/techStack/ts.jpg"
import postman from "@/public/techStack/postman.png"
import git from "@/public/techStack/git.jpg"
import betterAuth from "@/public/techStack/betterauth.jpg"
import docker from "@/public/techStack/docker.jpg"
import github from "@/public/techStack/github.jpg"
import vercel from "@/public/techStack/vercel.png"
import aws from "@/public/techStack/aws.png"

import Image from "next/image";



const firstRow = [nextSrc, reactSrc, reactQuery, jotai, tailwind, js, framerMotion]
const secondRow = [nodejs, expressjs, mongodb, prisma, postgres, typescript]
const thirdRow = [postman, git, betterAuth, docker, github, vercel, aws]
export default function TechStack() {
  return (
    <div className="w-full h-fit">
      <CommonVersion/>
    </div>
  );
}


function CommonVersion() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { // to handle the layout shifts during the hard refresh
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12 md:justify-around border border-t-2 border-black">
      <h3 className="font-port-sans text-3xl sm:text-3xl md:text-4xl xl:text-6xl md:mt-10 xl:mt-12 custom:text-9xl">Tech Stack</h3>
      <div
        style={{ opacity: isMounted ? 1 : 0 }}
        className="w-full h-[40vh] sm:h-[60vh] flex flex-col justify-center gap-5 overflow-hidden"
      >
        <MarqueeRow baseVelocity={2}>
          {firstRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={100} height={100}  alt="tech logos" className={`xl:w-24 w-[42px] sm:w-16 md:w-20  custom:w-40`}/>
            )
          })}
        </MarqueeRow>

        <MarqueeRow baseVelocity={-2}>
          {secondRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={100} height={100} alt="tech logos" className={` ${data===mongodb ? "md:w-32 xl:w-40  custom:w-48 w-[60px] sm:w-24" : "xl:w-28 custom:w-44  w-[48px] sm:w-[70px] md:w-24"} ${data===expressjs && "mt-2 md:mt-4"}`}/>
            )
          })}
        </MarqueeRow>

        <MarqueeRow baseVelocity={2}>
          {thirdRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={100} height={100} alt="tech logos" className={`w-[42px] sm:w-16 md:w-20 xl:w-28  custom:w-40 ${data===aws && "mt-2"}`}/>
            )
          })}
        </MarqueeRow>
      </div>
    </div>
  );
}


function MarqueeRow({ children, baseVelocity = 2 }:{children:ReactNode, baseVelocity:number}) {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
const scrollVelocity = useVelocity(scrollY);
const smoothVelocity = useSpring(scrollVelocity, {
damping: 50,
stiffness: 400
});
const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
clamp: false
});
const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

if (velocityFactor.get() < 0) {
  directionFactor.current = -1;
} else if (velocityFactor.get() > 0) {
  directionFactor.current = 1;
}

moveBy += directionFactor.current * moveBy * velocityFactor.get();
    if (isHovered) {
      return;
    }

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  return (
    <motion.div
      className="w-[200%] flex flex-nowrap"
      style={{ x }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="w-screen bg-green-800/10 h-20 md:h-24 xl:h-32  custom:h-44 flex-shrink-0 flex items-center justify-around">
        {children}
      </div>
      <div className="w-screen bg-green-800/10 h-20 md:h-24 xl:h-32  custom:h-44 flex-shrink-0 flex items-center justify-around">
        {children}
      </div>
    </motion.div>
  );
}