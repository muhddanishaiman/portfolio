import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Customer Accounts Microservice",
      description: "Containerized a microservice and deployed it on Kubernetes/OpenShift",
      githubUrl: "https://github.com/muhddanishaiman/devops-capstone-project",
      technologies: ["Kubernetes", "Tekton CI/CD", "Agile", "PostgreSQL", "Flask"],
    },
    {
      title: "Falcon 9 Landing Prediction",
      description: "Trained machine learning models to predict the Falcon 9 landing",
      githubUrl: "https://github.com/muhddanishaiman/ds-ml-capstone",
      technologies: ["Python", "Seaborn", "NumPy", "Pandas"],
    },
    {
      title: "Currency Denomination Classification using Keras",
      description: "Built CNN models to identify different European currency notes",
      githubUrl: "https://github.com/muhddanishaiman/applied-deep-learning-capstone",
      technologies: ["Python", "Keras", "Matplotlib"],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 space-y-4">
          <h1 className="font-serif text-5xl font-bold" data-testid="text-page-title">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-page-description">
            These are the projects I have done so far. I have been exploring different types of capstone projects to get a hands-on experience on what it feels like to code with different skillsets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg bg-primary/10 p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold" data-testid="text-more-projects-heading">
              Want to see more?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-more-projects-description">
              Checkout my GitHub repository for all the labs I have done. If you are looking for Penn State related assignments, contact me personally for more information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
