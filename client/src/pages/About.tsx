import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-6 text-center">
          {/* PROFILE_PHOTO: Replace with your LinkedIn profile photo URL */}
          <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-[#8B7355] bg-[#FAF3E8]">
            <img 
              src="https://via.placeholder.com/192/8B7355/FAF3E8?text=MD" 
              alt="Muhammad Danish Aiman Bin Mohd Ezwan" 
              className="h-full w-full object-cover"
              data-testid="img-profile"
            />
            {/* To use your LinkedIn profile photo:
                1. Go to your LinkedIn profile
                2. Right-click on your profile photo
                3. Select "Copy image address"
                4. Replace the src URL above with your LinkedIn photo URL */}
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

      <section className="container mx-auto max-w-prose px-6 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold" data-testid="text-background-heading">
              Background
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p data-testid="text-background-paragraph-1">
                Hello there! I'm from Malaysia and currently a student at Penn State University. My major is Computer Science and I'm hoping to do a minor in Mathematics and Cybersecurity as well.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold" data-testid="text-interests-heading">
              Interests
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p data-testid="text-interests-description">
                I'm currently interested in doing more data science, machine learning , software engineering, and cloud computing related projects. I am happy to aid in research to apply my skills and bring an impact to the world!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
