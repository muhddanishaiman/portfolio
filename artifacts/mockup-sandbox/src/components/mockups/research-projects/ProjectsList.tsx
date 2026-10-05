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
    <div
      aria-label="Illustrative miniature of the MIPS simulation interface"
      className="relative flex aspect-[1.78] min-h-32 flex-col overflow-hidden border border-border bg-[#ede7da] p-3 text-foreground sm:min-h-0"
    >
      <div className="flex items-center gap-1.5 border-b border-border/70 pb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/65" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
        <span className="ml-auto font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
          Instruction simulation
        </span>
      </div>
      <div className="grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-2 py-2 font-mono text-[8px]">
        <div className="space-y-1.5">
          <div className="border border-border bg-background/80 px-2 py-1 text-muted-foreground">
            instruction
          </div>
          <div className="border border-primary/30 bg-primary/5 px-2 py-1 text-primary">
            ADD $t0, $s1
          </div>
        </div>
        <span aria-hidden="true" className="text-sm text-primary">→</span>
        <div className="space-y-1.5">
          <div className="border border-border bg-background/80 px-2 py-1 text-muted-foreground">
            registers
          </div>
          <div className="border border-accent/35 bg-accent/5 px-2 py-1 text-accent">
            $t0 ← $s1 + $s2
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-border/70 pt-1.5 font-mono text-[8px] text-muted-foreground">
        <span>STEP 04 / 12</span>
        <span>REGISTER UPDATE</span>
      </div>
    </div>
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
              className="grid gap-4 border-b border-border/80 py-5 first:border-t sm:grid-cols-[56px_minmax(0,1fr)_minmax(190px,0.8fr)] sm:items-center sm:gap-5 sm:py-6"
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

              <div className="sm:pl-1">
                {project.preview ? (
                  <MipsPreview />
                ) : (
                  <div className="flex min-h-16 items-center border-l-2 border-primary/25 pl-4 sm:min-h-24">
                    <p className="max-w-[250px] font-display text-sm italic leading-relaxed text-muted-foreground">
                      {project.number === '02'
                        ? 'Research and reproducible methods.'
                        : 'A manuscript taking shape.'}
                    </p>
                  </div>
                )}
              </div>
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