import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-serif text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              [YOUR_TAGLINE]
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 font-serif text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">
                Projects
              </Link>
              <Link href="/recommendations" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-recommendations">
                CS Paths
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-2 font-serif text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <a
                href="[YOUR_GITHUB_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-github"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="[YOUR_LINKEDIN_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:[YOUR_EMAIL]"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-email"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} [YOUR_NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
