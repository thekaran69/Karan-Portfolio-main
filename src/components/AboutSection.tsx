
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/karanImg.jpg"
              alt="Developer Portrait" 
            //   className="rounded-2xl shadow-lg w-full h-auto max-w-md mx-auto"
            // />
            className="rounded-2xl shadow-lg w-full h-75 max-w-sm mx-auto" // Adjusted height to h-48
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hey there! Karan Singh third-year college student and front-end web developer by day, aspiring full-stack alchemist by night. I'm turning digital dreams into reality, one pixel at a time. Beyond crafting beautiful interfaces with HTML, CSS, and JavaScript, I'm diving deep into the back-end realm. Collaboration fuels my fire, so Git and GitHub are my playgrounds. Check out my portfolio for a glimpse into my brewing creations! Let's connect, discuss tech trends.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              
              <Button variant="outline" asChild className="gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
