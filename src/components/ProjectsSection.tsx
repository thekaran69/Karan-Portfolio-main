
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Trading Website",
    description: "A platform for trading and managing stocks with real-time updates and user-friendly features.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://ksxchange.vercel.app/",
    codeUrl: "https://github.com/thekaran69/KSXchange",
  },
  {
    id: 2,
    title: "Sneaker-Store",
    description: "An e-commerce website for sneaker enthusiasts to browse and purchase their favorite footwear.",
    tech: ["HTML", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlciUyMHN0b3JlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    demoUrl: "https://sneaker-store-website.vercel.app/",
    codeUrl: "https://github.com/thekaran69/Sneaker-Store-WEBSITE",
  },
  {
    id: 3,
    title: "Snake Game",
    description: "A classic snake game built with JavaScript, featuring smooth gameplay and responsive design..",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://plus.unsplash.com/premium_photo-1719360604040-f1b162124df1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25ha2VzJTIwYW5kJTIwbGFkZGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    demoUrl: "https://snake-game-seven-ruddy.vercel.app/",
    codeUrl: "https://github.com/thekaran69/Snake-Game",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="group" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="mr-2">View All Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
