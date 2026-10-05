import { useState } from 'react';
import './_group.css';

const abstractText =
  'This illustrative paper preview describes a reproducible workflow for summarizing a small set of research measurements. A hypothetical companion R package would provide a consistent path from raw values to a compact descriptive summary, making each step inspectable and easy to repeat. The example is conceptual: it presents no study, participants, or empirical findings.';

const code = `measurements <- c(4.2, 4.8, 5.1, 5.6, 6.3)
data.frame(
  n = length(measurements),
  mean = mean(measurements),
  min = min(measurements),
  max = max(measurements)
)`;

export function PublicationSpotlight() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background p-3 font-serif text-foreground sm:p-6">
      <article className="mx-auto w-full max-w-[860px] overflow-hidden border-2 border-primary/40 bg-card shadow-[6px_6px_0_hsl(var(--border))]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 bg-primary/5 px-4 py-2.5 sm:px-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
            Project 02 <span className="px-1.5 text-muted-foreground">/</span> Research package
          </p>
          <span className="border border-primary/50 bg-background px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[10px]">
            Fictional paper · example only
          </span>
        </div>

        <header className="px-5 pb-5 pt-6 sm:px-9 sm:pb-6 sm:pt-8">
          <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            <span className="h-px w-6 bg-primary/70" />
            Publication spotlight
          </div>
          <h1 className="max-w-[700px] font-display text-[25px] font-bold leading-[1.18] tracking-[-0.035em] text-foreground sm:text-[36px]">
            A Reproducible Workflow for Summarizing Research Measurements
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/70 pt-3 font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs">
            <span>Concept paper preview</span>
            <span aria-hidden="true" className="text-primary">•</span>
            <span>No journal or authorship claimed</span>
          </div>
        </header>

        <div className="grid gap-5 border-y border-border/70 bg-secondary/45 px-5 py-5 sm:grid-cols-[minmax(0,1.55fr)_minmax(210px,0.8fr)] sm:gap-8 sm:px-9 sm:py-6">
          <section aria-labelledby="abstract-heading">
            <div className="flex items-center justify-between gap-3">
              <h2 id="abstract-heading" className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                Abstract <span className="ml-1 text-muted-foreground">/ illustrative</span>
              </h2>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((value) => !value)}
                className="shrink-0 border-b border-primary/50 pb-0.5 font-mono text-[10px] text-primary transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {expanded ? 'Show less −' : 'Read abstract +'}
              </button>
            </div>
            <p className={`mt-3 text-[13px] leading-[1.75] text-foreground/90 sm:text-sm ${expanded ? '' : 'line-clamp-3'}`}>
              {abstractText}
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              Keywords: reproducibility · descriptive statistics · R
            </p>
          </section>
          <aside className="border-l-2 border-primary/40 pl-4 sm:pl-5">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              Paper ↔ package
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              The paper frames the method; a companion package could make the workflow repeatable in practice.
            </p>
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-foreground">
              <span className="border border-border bg-background px-2 py-1">Method</span>
              <span aria-hidden="true" className="text-primary">→</span>
              <span className="border border-border bg-background px-2 py-1">R tools</span>
            </div>
          </aside>
        </div>

        <div className="grid gap-5 px-5 py-5 sm:grid-cols-[1fr_0.82fr] sm:gap-8 sm:px-9 sm:py-6">
          <section aria-labelledby="workflow-heading">
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <h2 id="workflow-heading" className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground">
                Workflow excerpt
              </h2>
              <span className="font-mono text-[9px] text-muted-foreground">base R · illustrative</span>
            </div>
            <pre className="overflow-x-auto border border-border bg-background p-3 font-mono text-[10px] leading-[1.65] text-foreground sm:text-[11px]">
              <code>{code}</code>
            </pre>
          </section>
          <section aria-labelledby="contribution-heading">
            <h2 id="contribution-heading" className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground">
              Contribution areas
            </h2>
            <p className="mt-1 text-[10px] text-muted-foreground">Illustrative outline, not claimed work</p>
            <ol className="mt-3 space-y-2">
              {[
                ['01', 'Consistent summaries', 'A small, clear set of descriptive measures'],
                ['02', 'Inspectable steps', 'Readable code from input to output'],
                ['03', 'Repeatable use', 'A conceptual package interface'],
              ].map(([n, title, detail]) => (
                <li key={n} className="grid grid-cols-[25px_1fr] gap-2 border-t border-border/70 pt-2">
                  <span className="font-mono text-[10px] text-primary">{n}</span>
                  <div>
                    <p className="text-xs font-semibold leading-tight">{title}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <footer className="flex flex-col gap-1 border-t border-border/70 bg-primary/5 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <p className="text-[10px] leading-relaxed text-muted-foreground">
            A portfolio concept only. No real paper, publication, authorship, or research findings are represented.
          </p>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-primary">Sample record · not published</span>
        </footer>
      </article>
    </div>
  );
}