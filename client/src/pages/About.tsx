import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import profilePhoto from "@assets/IMG_5654_1761439183269.jpeg";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-4xl px-6 pt-24 pb-8">
        <div className="space-y-6 text-center">
          <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-[#8B7355] bg-[#FAF3E8]">
            <img 
              src={profilePhoto} 
              alt="Muhammad Danish Aiman Bin Mohd Ezwan" 
              className="h-full w-full object-cover"
              data-testid="img-profile"
            />
          </div>
          <h1 className="font-serif text-5xl font-bold leading-tight" data-testid="text-name">
            Muhammad Danish Aiman Bin Mohd Ezwan
          </h1>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button size="default" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/recommendations">
              <Button variant="default" size="default" data-testid="button-view-cs-paths">
                View CS Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-prose px-6 py-8">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 font-serif text-4xl font-semibold" data-testid="text-background-heading">
              Background
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="text-xl" data-testid="text-background-paragraph-1">
                Hello there! I'm from Malaysia and currently a student at Penn State University. My major is Computer Science and I'm hoping to do a minor in Mathematics and Cybersecurity as well.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="mb-4 font-serif text-4xl font-semibold" data-testid="text-interests-heading">
              Interests
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="text-xl" data-testid="text-interests-description">
                I'm currently interested in doing more data science, machine learning , software engineering, and cloud computing related projects. I am happy to aid in research to apply my skills and bring an impact to the world!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
