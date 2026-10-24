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
    title: 'ambs: Bayesian Alpha-Mixture Survival Models',
    description:
      'An R package for Bayesian alpha-mixture survival models with right-censored data. It provides adaptive MCMC sampling, convergence diagnostics, model comparison, and posterior estimates of survival and hazard functions.',
    href: 'https://cran.r-project.org/web/packages/ambs/index.html',
    action: 'View on CRAN',
    preview: false,
  },
  {
    title: 'Math at Penn State',
    description:
      'A growing collection of mathematical notes, explanations, and worked examples from my studies at Penn State. This work-in-progress book is written in LaTeX and available as a compiled PDF.',
    href: '/__mockup/books/math-at-penn-state.pdf',
    action: 'Read the PDF',
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
            Here are some of the projects that I have done
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
                <p className={`mt-2 text-xs leading-[1.8] text-muted-foreground sm:text-[13px] ${project.preview ? 'max-w-[450px]' : ''}`}>
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

      </div>
    </main>
  );
}