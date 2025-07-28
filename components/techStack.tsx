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
      <MobileVersion />
      <PCVersion />
    </div>
  );
}

function MobileVersion() {
  return <div className="w-full h-full sm:hidden"></div>;
}

function PCVersion() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { // to handle the layout shifts during the hard refresh
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-around">
      <p className="font-port-sans text-6xl mt-12">Tech Stack</p>
      <div
        style={{ opacity: isMounted ? 1 : 0 }}
        className="w-full h-[60vh] flex flex-col justify-center gap-5 overflow-hidden"
      >
        <MarqueeRow baseVelocity={2}>
          {firstRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={data===framerMotion?140:80} alt="tech logos" className=""/>
            )
          })}
        </MarqueeRow>

        <MarqueeRow baseVelocity={-2}>
          {secondRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={data===mongodb?160:100} alt="tech logos" className={`${data===expressjs && "mt-4"}`}/>
            )
          })}
        </MarqueeRow>

        <MarqueeRow baseVelocity={2}>
          {thirdRow.map((data, index)=>{
            return (
              <Image key={index} src={data} width={[vercel,git,docker].includes(data)?140:80} height={80} alt="tech logos" className={`${data===aws && "mt-2"}`}/>
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
      <div className="w-screen bg-black/10 h-32 flex-shrink-0 flex items-center justify-around">
        {children}
      </div>
      <div className="w-screen bg-black/10 h-32 flex-shrink-0 flex items-center justify-around">
        {children}
      </div>
    </motion.div>
  );
}