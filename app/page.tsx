import { NavHeader } from "@/components/layout/NavHeader";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background transition-colors duration-300">
      <NavHeader />
      <main className="flex flex-col">
        <Hero />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
}
