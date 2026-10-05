import './_group.css';

const responsibilities = [
  {
    number: '01',
    title: 'Bring measurements into one shape',
    detail: 'Use a consistent structure so a small set of values can be checked and reused.',
  },
  {
    number: '02',
    title: 'Make the summary repeatable',
    detail: 'Describe the same five values with a compact set of familiar statistics.',
  },
  {
    number: '03',
    title: 'Keep the output legible',
    detail: 'Present the count, average, and range together for a quick read.',
  },
];

export function ResearchSummary() {
  return (
    <div className="min-h-[100dvh] bg-background p-4 text-foreground sm:p-7">
      <article className="mx-auto w-full max-w-[850px] overflow-hidden border-2 border-primary/40 bg-card shadow-[6px_6px_0_hsl(var(--border))]">
        <header className="relative border-b border-border/80 px-5 pb-5 pt-4 sm:px-8 sm:pb-6 sm:pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-primary sm:text-xs">
              Project 02 <span className="px-1.5 text-border">/</span> Research methods
            </p>
            <span className="border border-primary/50 bg-primary/5 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary sm:text-[10px]">
              Illustrative example · not published
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:mt-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                A reproducible research workflow
              </p>
              <h1 className="max-w-[590px] font-display text-[28px] font-bold leading-[1.12] tracking-[-0.035em] text-foreground sm:text-[38px]">
                From scattered measures
                <br className="hidden sm:block" /> to a clear summary.
              </h1>
            </div>
            <div className="hidden border-l border-border pl-4 pb-1 sm:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Format</p>
              <p className="mt-1 font-display text-sm font-semibold">R package concept</p>
            </div>
          </div>
          <p className="mt-4 max-w-[680px] text-[13px] leading-[1.7] text-muted-foreground sm:text-sm">
            Research work often begins with measurements recorded in different places. This example
            shows how a small, consistent workflow could organize values and make a summary easy to
            reproduce—without turning the underlying method into a black box.
          </p>
        </header>

        <div className="grid sm:grid-cols-[0.88fr_1.12fr]">
          <section className="border-b border-border/80 bg-primary/[0.045] px-5 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">The question</p>
            <h2 className="mt-3 font-display text-[21px] font-semibold leading-snug sm:text-[23px]">
              How can a few measurements be made easier to compare?
            </h2>
            <p className="mt-3 text-xs leading-[1.7] text-muted-foreground sm:text-[13px]">
              A useful first step is modest: keep the values together, state how many there are,
              and describe their center and spread in the same place.
            </p>
            <div className="mt-5 border-l-2 border-primary/60 pl-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Example input</p>
              <p className="mt-1 font-display text-lg font-semibold">5 measurements</p>
              <p className="font-mono text-[10px] text-muted-foreground">4.2 · 4.8 · 5.1 · 5.6 · 6.3</p>
            </div>
          </section>

          <section className="px-5 py-5 sm:px-7 sm:py-6" aria-labelledby="summary-approach">
            <div className="flex items-baseline justify-between gap-3">
              <h2 id="summary-approach" className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                A considered approach
              </h2>
              <span className="font-mono text-[9px] text-muted-foreground">three responsibilities</span>
            </div>
            <ol className="mt-4">
              {responsibilities.map((item, index) => (
                <li
                  key={item.number}
                  className={`grid grid-cols-[30px_1fr] gap-3 py-3 ${
                    index < responsibilities.length - 1 ? 'border-b border-border/70' : ''
                  }`}
                >
                  <span className="pt-0.5 font-mono text-[10px] text-primary/80">{item.number}</span>
                  <div>
                    <h3 className="font-display text-[14px] font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-1 text-[11px] leading-[1.65] text-muted-foreground sm:text-xs">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4 border border-border/80 bg-muted/35 p-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Illustrative summary</p>
              <p className="mt-1 font-display text-sm font-semibold">
                n = 5 <span className="px-1 text-border">/</span> mean = 5.2
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">range: 4.2–6.3</p>
            </div>
          </section>
        </div>

        <footer className="flex flex-col gap-2 border-t border-border/80 bg-muted/25 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="max-w-[590px] text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
            Portfolio concept only. No published package, research findings, or individual contribution is being claimed.
          </p>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">Example / 02</span>
        </footer>
      </article>
    </div>
  );
}