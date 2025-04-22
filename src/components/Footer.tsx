
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/thekaran69" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="//www.linkedin.com/in/karan-singh-shekhawat-57a585254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
            <a 
              href="mailto:7karansingho7o7@gmail.com" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Karan Singh. All rights reserved.
          </p>
          
          <nav className="flex gap-6 mt-4 md:mt-0">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tools
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
