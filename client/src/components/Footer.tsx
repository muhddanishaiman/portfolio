import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-black bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex justify-center gap-16 md:gap-24">
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Quick Links</h3>
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
            <h3 className="mb-4 font-serif text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/muhddanishaiman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-github"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/danish-ezwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:muhdnish2572@gmail.com"
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
            © {currentYear} Muhammad Danish Aiman Bin Mohd Ezwan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
