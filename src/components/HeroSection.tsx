
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="block">Hi, I'm</span>
          <span className="text-primary text-5xl md:text-7xl block mt-2">Karan Singh Shekhawat</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mt-4 mb-8 max-w-2xl">
          Full Stack Web Developer specializing in creating beautiful, 
          functional, and user-centered digital experiences.
        </h2>
        
        <div className="flex items-center gap-4 my-8">
          <a href="https://github.com/thekaran69" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/karan-singh-shekhawat-57a585254/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Button>
          </a>
        </div>
        
        <div className="mt-12">
          <a href="#projects">
            <Button variant="ghost" className="rounded-full group">
              <span className="mr-2">View My Work</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
