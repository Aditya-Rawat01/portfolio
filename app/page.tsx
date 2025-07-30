import FirstPage from "@/components/firstPage";
import '@/app/globals.css'
import TechStack from "@/components/techStack";
import ProjectPlaceholder from "@/components/Projects/ProjectsPlaceholder";
import AllProjects from "@/components/Projects/AllProjects";
import ConnectPage from "@/components/ConnectPage";
export default function Home() {
  return (
   <div className="w-screen h-fit">
        <FirstPage/>
        <TechStack/>
        <ProjectPlaceholder/>
        <AllProjects/>
        <ConnectPage/>
   </div>
  );
}
