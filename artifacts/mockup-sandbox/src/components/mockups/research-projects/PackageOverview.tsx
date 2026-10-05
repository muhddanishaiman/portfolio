import './_group.css';

const capabilities = [
  {
    index: '01',
    name: 'Descriptive summaries',
    detail: 'A compact readout for count, mean, minimum, and maximum.',
  },
  {
    index: '02',
    name: 'Tabular output',
    detail: 'Keep computed values in a familiar data-frame shape.',
  },
  {
    index: '03',
    name: 'Reproducible examples',
    detail: 'Small, inspectable workflows designed to be read as well as run.',
  },
];

export function PackageOverview() {
  return (
    <div className="min-h-[100dvh] bg-background p-3 text-foreground sm:p-5">
      <article className="mx-auto w-full max-w-[880px] overflow-hidden border-2 border-primary/40 bg-card shadow-[6px_6px_0_hsl(var(--border))]">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border/80 bg-secondary/50 px-4 py-2.5 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
            Research methods collection <span className="px-1 text-primary">/</span> record 02
          </p>
          <span className="inline-flex items-center gap-2 border border-primary/50 bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-primary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Fictional example · not published
          </span>
        </div>

        <header className="grid gap-4 px-4 py-5 sm:grid-cols-[1fr_auto] sm:items-end sm:px-6 sm:py-6">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              R package concept
            </p>
            <h2 className="font-display text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-[2.65rem]">
              exampleResearch
            </h2>
            <p className="mt-2 max-w-[590px] text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              A proposed small toolkit for turning research measurements into clear,
              reproducible summaries.
            </p>
          </div>
          <div className="flex gap-2 font-mono text-[10px] uppercase tracking-wide sm:flex-col sm:items-end">
            <span className="border border-border bg-background px-2.5 py-1.5">Language / R</span>
            <span className="border border-border bg-background px-2.5 py-1.5">Type / software</span>
          </div>
        </header>

        <div className="grid border-y border-border/80 sm:grid-cols-[minmax(0,1.55fr)_minmax(220px,0.85fr)]">
          <section aria-labelledby="catalog-capabilities" className="px-4 py-4 sm:px-6 sm:py-5">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 id="catalog-capabilities" className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
                Proposed capabilities
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">01—03</span>
            </div>
            <ol className="divide-y divide-border/70 border-y border-border/70">
              {capabilities.map((item) => (
                <li key={item.index} className="grid grid-cols-[2rem_1fr] gap-2 py-2.5 sm:grid-cols-[2.25rem_1fr]">
                  <span className="pt-0.5 font-mono text-[10px] text-primary">{item.index}</span>
                  <div>
                    <h4 className="text-[13px] font-semibold leading-snug">{item.name}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="border-t border-border/80 bg-muted/30 px-4 py-4 sm:border-l sm:border-t-0 sm:px-5 sm:py-5">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
              Intended for
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed">
              <li className="flex gap-2"><span className="font-mono text-primary">—</span><span>Researchers checking small measurement sets</span></li>
              <li className="flex gap-2"><span className="font-mono text-primary">—</span><span>Methods instructors introducing summaries</span></li>
              <li className="flex gap-2"><span className="font-mono text-primary">—</span><span>R learners who value readable examples</span></li>
            </ul>
            <div className="mt-4 border-t border-border/70 pt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Availability</p>
              <p className="mt-1 text-xs font-semibold">Concept only</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                Not available on CRAN. No release or installation is represented here.
              </p>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="max-w-[480px] text-[11px] leading-relaxed text-muted-foreground">
            Portfolio concept record, included to show how a software project might be catalogued.
            It does not claim a published package, user research, or research findings.
          </p>
          <nav aria-label="General R resources" className="flex shrink-0 flex-wrap gap-2">
            <a
              className="inline-flex min-h-9 items-center justify-center border border-primary bg-primary px-3 font-mono text-[10px] uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="https://cran.r-project.org"
              target="_blank"
              rel="noreferrer"
            >
              Explore CRAN <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <a
              className="inline-flex min-h-9 items-center justify-center border border-border bg-background px-3 font-mono text-[10px] uppercase tracking-wide transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="https://cran.r-project.org/manuals.html"
              target="_blank"
              rel="noreferrer"
            >
              R manuals <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </nav>
        </footer>
      </article>
    </div>
  );
}