import { useState } from 'react';
import './_group.css';

const measurements = [4.2, 4.8, 5.1, 5.6, 6.3];

export function ResultsFirst() {
  const [copied, setCopied] = useState(false);

  async function copySummary() {
    const text = [
      'Illustrative demo only — not research findings',
      `Measurements: ${measurements.join(', ')}`,
      'n: 5 | mean: 5.2 | min: 4.2 | max: 6.3',
    ].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-background px-4 py-5 sm:px-7 sm:py-8">
      <article className="mx-auto w-full max-w-[850px] overflow-hidden border-2 border-primary/40 bg-card shadow-[6px_6px_0_hsl(var(--border))]">
        <header className="relative border-b border-border/80 bg-primary/[0.045] px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-primary sm:text-xs">
              Project 02 <span className="px-1 text-border">/</span> Portfolio example
            </p>
            <span className="border border-primary/45 bg-background px-2 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-primary sm:text-[10px]">
              Not published
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Research R package · illustrative output
              </p>
              <h2 className="mt-1 font-display text-[27px] font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-[36px]">
                Five measurements,
                <br className="hidden sm:block" /> plainly summarized.
              </h2>
            </div>
            <p className="max-w-[190px] border-l-2 border-accent/60 pl-3 font-serif text-xs leading-relaxed text-muted-foreground sm:text-sm">
              A small, reproducible example of research work beyond an interface.
            </p>
          </div>
        </header>

        <section aria-labelledby="observations-title" className="px-5 pb-5 pt-5 sm:px-8 sm:pb-6 sm:pt-6">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">01 / Observed values</p>
              <h3 id="observations-title" className="mt-1 font-display text-lg font-bold text-foreground sm:text-xl">
                Example measurements
              </h3>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">n = 5 · arbitrary units</span>
          </div>

          <div className="overflow-hidden border-2 border-border bg-background">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">Five illustrative measurement values</caption>
              <thead className="bg-secondary/70 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
                <tr>
                  <th scope="col" className="w-[25%] border-b border-border px-3 py-2.5 font-medium sm:px-5">Record</th>
                  <th scope="col" className="border-b border-border px-3 py-2.5 text-right font-medium sm:px-5">Measurement</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm sm:text-base">
                {measurements.map((value, index) => (
                  <tr key={value} className="odd:bg-card even:bg-primary/[0.035]">
                    <th scope="row" className="border-b border-border/70 px-3 py-2 font-normal text-muted-foreground sm:px-5">
                      0{index + 1}
                    </th>
                    <td className="border-b border-border/70 px-3 py-2 text-right font-semibold tabular-nums text-foreground sm:px-5">
                      {value.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="summary-title" className="border-y border-border/80 bg-muted/30 px-5 py-5 sm:px-8 sm:py-6">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">02 / Descriptive summary</p>
              <h3 id="summary-title" className="mt-1 font-display text-lg font-bold text-foreground sm:text-xl">
                What the example contains
              </h3>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">base R output</span>
          </div>
          <div className="grid grid-cols-2 border-2 border-border bg-background sm:grid-cols-4">
            {[
              { label: 'Count', key: 'n', value: '5' },
              { label: 'Mean', key: 'mean', value: '5.2' },
              { label: 'Minimum', key: 'min', value: '4.2' },
              { label: 'Maximum', key: 'max', value: '6.3' },
            ].map((item, index) => (
              <div key={item.key} className={`px-3 py-3 sm:px-4 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b sm:border-b-0' : ''} ${index === 1 ? 'sm:border-r' : ''} border-border`}>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-display text-[25px] font-bold leading-none tracking-[-0.04em] text-primary sm:text-[30px]">
                  {item.value}
                </p>
                <p className="mt-1 font-mono text-[9px] text-muted-foreground">field: {item.key}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 max-w-2xl font-serif text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Mean is the arithmetic average; the minimum and maximum show the span of these five values.
          </p>
        </section>

        <footer className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-[520px]">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-primary">Example only · not findings</p>
            <p className="mt-1 font-serif text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
              Illustrative values demonstrate a possible package output. This is not a published package, user research, or a claim of research authorship.
            </p>
          </div>
          <button
            type="button"
            onClick={copySummary}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start border border-primary/50 bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-auto"
            aria-live="polite"
          >
            {copied ? 'Copied summary' : 'Copy summary'}
            <span aria-hidden="true">{copied ? '✓' : '↗'}</span>
          </button>
        </footer>
      </article>
    </div>
  );
}