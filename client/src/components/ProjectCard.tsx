import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  githubUrl,
  technologies,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col hover-elevate transition-transform duration-200">
      <CardHeader>
        <CardTitle className="font-serif text-xl" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex-1"
          data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        {demoUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1"
            data-testid={`button-demo-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
