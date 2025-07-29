"use client";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import me from "@/public/me.png"
import { useRef } from "react";
export default function FirstPage() {
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
  return (
    <div className="hidden md:block w-full h-fit border-b-1 border-black">
      <div className="flex w-full">

        <div className="w-3/5">
          <div className="h-[200vh] relative">
            <div className="h-1/2 w-full bg-[#623EFF] relative">
              <div className="w-[95%] h-full absolute z-30 rounded-tr-3xl bg-green-300"></div>
              <div className="w-[90%] h-full absolute z-40 rounded-tr-3xl bg-red-300"></div>
              <div className="w-[85%] h-full absolute z-50 rounded-tr-3xl bg-white grid grid-rows-6 grid-cols-12 lg:grid-cols-6">
                <div className=" row-start-3 col-start-2 col-span-full text-4xl xl:text-6xl custom:text-8xl flex items-center">
                <h3
                  className="font-port-sans"
                >
                  WEB
                  <br />
                  Developer
                </h3></div>
                <div className="row-start-4 w-[59vw] h-20 xl:h-28  custom:h-40 bg-[#623EFF] text-white text-5xl xl:text-7xl custom:text-9xl grid grid-cols-12 lg:grid-cols-7">
                  <p className="col-start-2 row-start-2 col-span-full">
                    Aditya Rawat
                  </p>
                </div>
              </div>
            </div>
            <div className="h-1/2 w-full bg-[#623EFF] relative">
              <div className="w-[95%] h-full absolute z-30 rounded-br-3xl bg-green-300"></div>
              <div className="w-[90%] h-full absolute z-40 rounded-br-3xl bg-red-300"></div>
              <div className="w-[85%] h-full absolute z-50 rounded-br-3xl bg-white grid grid-rows-8 grid-cols-12 lg:grid-cols-6">
                <h3 className="font-port-sans row-start-3 col-start-2  text-4xl xl:text-7xl  custom:text-8xl col-span-full flex items-center">
                  About Me
                </h3>
                <p className="row-start-4 col-start-2 col-span-full text-xl xl:text-3xl custom:text-4xl">
                  Relentless coder seeking breakthrough opportunities. Fearlessly
                  pursuing excellence in every line of code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-screen sticky top-0 bg-[#623EFF] flex items-center justify-center">
          
          <div className="relative w-full h-full">
            <Image
              src={me}
              alt="Profile Image"
              className="absolute w-full h-full object-contain z-50"
            />
            <Image
              src={me}
              alt="Profile Image"
              className="absolute w-full h-full object-cover blur-sm"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
