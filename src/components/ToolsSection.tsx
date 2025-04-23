
import { Card, CardContent } from "./ui/card";

type Tool = {
  id: number;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "devops" | "design";
};

const tools: Tool[] = [
  // Frontend
  { id: 1, name: "HTML5", icon: "html5", category: "frontend" },
  { id: 2, name: "CSS3", icon: "css3", category: "frontend" },
  { id: 3, name: "JavaScript", icon: "javascript", category: "frontend" },
  // { id: 4, name: "TypeScript", icon: "typescript", category: "frontend" },
  { id: 5, name: "React", icon: "react", category: "frontend" },
  // { id: 6, name: "Vue.js", icon: "vuejs", category: "frontend" },
  { id: 7, name: "Angular", icon: "angular", category: "frontend" },
  { id: 8, name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  
  // Backend
  { id: 9, name: "Node.js", icon: "nodejs", category: "backend" },
  { id: 10, name: "Express", icon: "express", category: "backend" },
  { id: 11, name: "Python", icon: "python", category: "backend" },
  // { id: 12, name: "Django", icon: "django", category: "backend" },
  { id: 13, name: "PHP", icon: "php", category: "backend" },
  
  // Database
  { id: 14, name: "MongoDB", icon: "mongodb", category: "database" },
  { id: 15, name: "MySQL", icon: "mysql", category: "database" },
  { id: 16, name: "PostgreSQL", icon: "postgresql", category: "database" },
  
  // DevOps
  { id: 17, name: "Git", icon: "git", category: "devops" },
  { id: 18, name: "Docker", icon: "docker", category: "devops" },
  // { id: 19, name: "AWS", icon: "aws", category: "devops" },
  
  // Design
  { id: 20, name: "Figma", icon: "figma", category: "design" },
  { id: 21, name: "Adobe XD", icon: "xd", category: "design" },
];

export function ToolsSection() {
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "Tools" },
    // { id: "design", name: "Design" },
  ];
  
  return (
    <section id="tools" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tools & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {tools
                  .filter((tool) => tool.category === category.id)
                  .map((tool) => (
                    <Card key={tool.id} className="flex items-center justify-center hover:border-primary transition-colors">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <i className={`devicon-${tool.icon}-plain colored text-3xl`} />
                        </div>
                        <span className="text-sm font-medium">{tool.name}</span>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
