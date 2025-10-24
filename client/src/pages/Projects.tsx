import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "[PROJECT_1_TITLE]",
      description: "[PROJECT_1_DESCRIPTION]",
      githubUrl: "[PROJECT_1_GITHUB_URL]",
      technologies: ["[TECH_1]", "[TECH_2]", "[TECH_3]"],
    },
    {
      title: "[PROJECT_2_TITLE]",
      description: "[PROJECT_2_DESCRIPTION]",
      githubUrl: "[PROJECT_2_GITHUB_URL]",
      technologies: ["[TECH_1]", "[TECH_2]"],
    },
    {
      title: "[PROJECT_3_TITLE]",
      description: "[PROJECT_3_DESCRIPTION]",
      githubUrl: "[PROJECT_3_GITHUB_URL]",
      technologies: ["[TECH_1]", "[TECH_2]", "[TECH_3]", "[TECH_4]"],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 space-y-4">
          <h1 className="font-serif text-4xl font-bold" data-testid="text-page-title">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-page-description">
            A collection of projects I've built, ranging from web applications to open-source contributions.
            Each project represents a learning journey and demonstrates different technical skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg bg-primary/10 p-8">
            <h3 className="mb-3 font-serif text-xl font-semibold" data-testid="text-more-projects-heading">
              Want to see more?
            </h3>
            <p className="text-muted-foreground max-w-2xl" data-testid="text-more-projects-description">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
