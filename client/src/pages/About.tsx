import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-6 text-center">
          <h1 className="font-serif text-5xl font-bold leading-tight" data-testid="text-name">
            [YOUR_NAME]
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-tagline">
            [YOUR_TAGLINE]
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button size="default" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="default" asChild data-testid="button-github-profile">
              <a href="[YOUR_GITHUB_URL]" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
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
                [YOUR_BACKGROUND_PARAGRAPH_1]
              </p>
              <p data-testid="text-background-paragraph-2">
                [YOUR_BACKGROUND_PARAGRAPH_2]
              </p>
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold" data-testid="text-skills-heading">
              Skills
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p data-testid="text-skills-description">
                [YOUR_SKILLS_DESCRIPTION]
              </p>
              <ul className="space-y-2 pl-6">
                <li data-testid="text-skill-1">[SKILL_1]</li>
                <li data-testid="text-skill-2">[SKILL_2]</li>
                <li data-testid="text-skill-3">[SKILL_3]</li>
                <li data-testid="text-skill-4">[SKILL_4]</li>
              </ul>
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold" data-testid="text-interests-heading">
              Interests
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p data-testid="text-interests-description">
                [YOUR_INTERESTS_DESCRIPTION]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
