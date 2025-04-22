
import { useEffect } from "react";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ThreeBackground } from "@/components/ThreeBackground";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Add Devicon CSS for tool icons
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <ThreeBackground />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ToolsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
