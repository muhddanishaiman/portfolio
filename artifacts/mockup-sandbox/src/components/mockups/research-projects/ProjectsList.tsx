import './_group.css';

const projects = [
  {
    number: '01',
    type: 'Interactive project',
    title: 'Simple MIPS Simulation',
    description:
      'A browser-based simulation of the MIPS instruction set. A small glimpse of the datapath; open the live simulation to try it.',
    href: 'https://muhddanishaiman.github.io/simple-mips-simulation/',
    action: 'Open simulation',
    preview: true,
  },
  {
    number: '02',
    type: 'Research · R package',
    title: 'Research R Package',
    description:
      'A concise description of the research question, method, and what the package makes possible.',
    action: 'Project page',
    preview: false,
  },
  {
    number: '03',
    type: 'Writing · Book',
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
      <div className="mx-auto w-full max-w-[900px]">
        <header className="mb-5 flex flex-col gap-4 border-b-4 border-double border-primary/30 pb-5 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              Selected work <span className="px-1.5 text-border">/</span> 2023–present
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h1>
            <p className="mt-2 max-w-[560px] text-sm leading-relaxed text-muted-foreground">
              A simulation, a research tool, and a book in progress—three kinds of
              work, gathered in one list.
            </p>
          </div>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            03 projects
          </span>
        </header>

        <section aria-label="Selected projects">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`grid gap-4 border-b border-border/80 py-5 first:border-t sm:items-center sm:gap-5 sm:py-6 ${
                project.preview
                  ? 'sm:grid-cols-[56px_minmax(0,1fr)_minmax(190px,0.8fr)]'
                  : 'sm:grid-cols-[56px_minmax(0,1fr)]'
              }`}
            >
              <span className="font-mono text-xs tracking-[0.16em] text-primary">
                {project.number}
              </span>

              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {project.type}
                </p>
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
                <div className="sm:pl-1">
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