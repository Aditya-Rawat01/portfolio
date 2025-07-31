"use client";
import FirstPage from "@/components/firstPage";
import "@/app/globals.css";
import TechStack from "@/components/techStack";
import ProjectPlaceholder from "@/components/Projects/ProjectsPlaceholder";
import AllProjects from "@/components/Projects/AllProjects";
import ConnectPage from "@/components/ConnectPage";
import { useEffect, useState } from "react";
export default function Home() {
  const [firstMount, setFirstMount] = useState<boolean>(true);
  const placeholders = [
    "Loading fonts..",
    "Loading images..",
    "Styling pages..",
    "Waking up.",
    "Just a sec.",
    "Herding cats...",
    "Waking up the hamsters...",
    "Assembling the pixels...",
    "Compiling assets...",
    "Rendering components..",
    "Optimizing performance..."
  ];
  const [loadingPlaceholder, setLoadingPlaceholder] = useState("Loading...")
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstMount(false);
    }, 3000)
    setLoadingPlaceholder(placeholders[Math.floor(Math.random() * placeholders.length)])
    return ()=>clearTimeout(timer)
  }, []);
  return (
    <div className="w-screen h-fit">
      <div
        className={`fixed top-0 z-[100] w-screen h-screen bg-black flex flex-col gap-5 items-center justify-center text-xl md:text-2xl xl:text-3xl 2xl:text-5xl custom:text-7xl ${
          firstMount ? "opacity-100" : "opacity-0 pointer-events-none"
        } text-white`}
      >
        <p>{loadingPlaceholder}</p>
        <div className="loader"></div>
      </div>
      <FirstPage />
      <TechStack />
      <ProjectPlaceholder />
      <AllProjects />
      <ConnectPage />
    </div>
  );
}
