import './_group.css';

const projects = [
  {
    title: 'Simple MIPS Simulation',
    description:
      'A browser-based simulation of the MIPS instruction set. A small glimpse of the datapath; open the live simulation to try it.',
    href: 'https://muhddanishaiman.github.io/simple-mips-simulation/',
    action: 'Open simulation',
    preview: true,
  },
  {
    title: 'Research R Package',
    description:
      'A concise description of the research question, method, and what the package makes possible.',
    action: 'Project page',
    preview: false,
  },
  {
    title: 'A book in progress',
    description:
      'A sentence about the subject, who it is for, and why you are writing it. Read the finished manuscript as a PDF.',
    action: 'Book page',
    preview: false,
  },
];

function MipsPreview() {
  return (
    <video
      aria-label="Silent looping preview of the MIPS instruction-set simulation"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/__mockup/images/projects-list-mips-poster.jpg"
      className="block aspect-[1.78] min-h-32 w-full border border-border bg-[#ede7da] object-cover sm:min-h-0"
    >
      <source
        src="https://d4df60ef-0043-424c-b5d9-47f473b6949c-00-2za52ni8d9ab.riker.replit.dev/media/mips-demo.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export function ProjectsList() {
  return (
    <main className="min-h-[100dvh] bg-background px-4 py-6 text-foreground sm:px-8 sm:py-9">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <header className="border-b-4 border-double border-primary/20 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">
            PROJECTS
          </h1>
          <p className="font-serif text-muted-foreground mt-2">
            Here are some of my projects that I have done
          </p>
        </header>

        <section aria-label="Selected projects">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`grid gap-4 border-b border-border/80 py-5 first:border-t sm:items-center sm:gap-5 sm:py-6 ${
                project.preview
                  ? 'sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]'
                  : 'sm:grid-cols-1'
              }`}
            >
              <div className="min-w-0">
                <h2 className="mt-1 font-display text-xl font-bold leading-tight sm:text-[22px]">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-[450px] text-xs leading-[1.8] text-muted-foreground sm:text-[13px]">
                  {project.description}
                </p>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-10 items-center gap-2 border border-primary/50 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {project.action}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    title="Add the project-page URL when it is available."
                    className="mt-3 inline-flex min-h-10 cursor-not-allowed items-center gap-2 border border-border px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/75"
                  >
                    {project.action}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">Link destination not supplied</span>
                  </span>
                )}
              </div>

              {project.preview && (
                <div>
                  <MipsPreview />
                </div>
              )}
            </article>
          ))}
        </section>

        <footer className="pt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
          Project page links for the book and R package can be connected when their
          destinations are ready.
        </footer>
      </div>
    </main>
  );
}