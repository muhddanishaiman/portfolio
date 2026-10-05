import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Simple MIPS Simulation",
    description:
      "A browser-based simulation of the MIPS instruction set. Watch the datapath in action, or open the live simulation to try it.",
    href: "https://muhddanishaiman.github.io/simple-mips-simulation/",
    action: "Open simulation",
    preview: true,
  },
  {
    title: "Research R Package — Example",
    description:
      "An illustrative example of a statistical research package for reproducible summaries. This is a portfolio demonstration, not a published CRAN package.",
    href: undefined,
    action: "Project page",
    preview: false,
  },
  {
    title: "A book in progress",
    description:
      "A place for the book's title and synopsis, with a direct link to the online manuscript once its page is supplied.",
    href: undefined,
    action: "Book page",
    preview: false,
  },
];

export default function Projects() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="space-y-8 pb-20">
      <header className="border-b-4 border-double border-primary/20 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">
          PROJECTS
        </h1>
        <p className="font-serif text-muted-foreground mt-2">
          Here are some of my projects that I have done
        </p>
      </header>

      <ul aria-label="Selected projects" className="list-none p-0">
        {projects.map((project) => (
          <li key={project.title}>
            <article
              className={`grid gap-4 border-b border-border/80 py-5 sm:items-center sm:gap-5 sm:py-6 ${
                project.preview
                  ? "border-t sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                  : "sm:grid-cols-1"
              }`}
            >
              <div className="min-w-0">
                <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:text-[22px]">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-[450px] font-serif text-xs leading-[1.8] text-muted-foreground sm:text-[13px]">
                  {project.description}
                </p>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 border border-primary/50 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {project.action}
                    <ExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                ) : (
                  <div className="mt-3">
                    <span
                      aria-disabled="true"
                      className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 border border-border px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {project.action}
                      <ExternalLink aria-hidden="true" className="h-3 w-3" />
                    </span>
                    <p className="mt-1 font-mono text-[9px] text-muted-foreground">
                      Link not supplied yet
                    </p>
                  </div>
                )}
              </div>
              {project.preview && (
                <div>
                  <video
                    key={prefersReducedMotion ? "still-preview" : "looping-preview"}
                    src="/media/mips-demo.mp4"
                    poster="/media/mips-demo-poster.jpg"
                    preload={prefersReducedMotion ? "none" : "metadata"}
                    aria-label="Silent looping preview of the Simple MIPS Simulation"
                    autoPlay={!prefersReducedMotion}
                    loop
                    muted
                    playsInline
                    className="block aspect-video w-full border border-border bg-background object-cover"
                  />
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}