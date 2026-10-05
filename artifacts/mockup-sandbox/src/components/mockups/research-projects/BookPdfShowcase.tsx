import './_group.css';

const chapters = [
  { number: '01', label: 'An opening note', state: 'First pages' },
  { number: '02', label: 'The chapters ahead', state: 'In progress' },
  { number: '03', label: 'A final reflection', state: 'To come' },
];

export function BookPdfShowcase() {
  return (
    <main className="min-h-[100dvh] bg-background p-4 text-foreground sm:p-7">
      <article className="mx-auto w-full max-w-[850px] overflow-hidden border border-border bg-card shadow-[7px_7px_0_hsl(var(--border))]">
        <header className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 sm:px-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Project 02 <span className="px-2 text-border">/</span> Book in progress
          </p>
          <span className="border border-primary/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary">
            Sample design · PDF link not supplied
          </span>
        </header>

        <div className="grid sm:grid-cols-[0.92fr_1.08fr]">
          <section
            aria-label="Sample book cover"
            className="relative isolate flex min-h-[350px] flex-col justify-between overflow-hidden bg-primary px-7 py-7 text-primary-foreground sm:min-h-[440px] sm:px-9 sm:py-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -right-14 -z-10 h-72 w-72 rounded-full border border-primary-foreground/20"
            >
              <div className="absolute inset-7 rounded-full border border-primary-foreground/20" />
              <div className="absolute inset-14 rounded-full border border-primary-foreground/20" />
              <div className="absolute inset-[5.25rem] rounded-full border border-primary-foreground/20" />
            </div>
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-75">
                A long-form work
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-75">
                Vol. 01
              </span>
            </div>

            <div className="max-w-[300px]">
              <div className="mb-5 h-px w-12 bg-primary-foreground/55" />
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-75">
                Working title
              </p>
              <h1 className="mt-3 font-display text-[39px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[47px]">
                A book
                <br />
                taking shape.
              </h1>
              <p className="mt-5 max-w-[235px] text-xs leading-relaxed opacity-80">
                Replace with a short subtitle or the idea behind the book.
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-primary-foreground/30 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] opacity-80">
                Author name
              </span>
              <span className="font-mono text-[9px] opacity-65">WORK IN PROGRESS</span>
            </div>
          </section>

          <section className="flex flex-col justify-between gap-7 p-5 sm:p-7 lg:p-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-primary">
                Manuscript / digital edition
              </p>
              <h2 className="mt-3 font-display text-[26px] font-semibold leading-tight sm:text-[31px]">
                Your writing,
                <br className="hidden sm:block" /> framed like a book.
              </h2>
              <p className="mt-3 text-xs leading-[1.8] text-muted-foreground sm:text-[13px]">
                A strong cover, a brief note about the book, and a direct link to the
                online PDF make the project feel considered—even without a website
                or interactive demo.
              </p>

              <div className="mt-6 border-y border-border">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="flex items-center gap-3 border-b border-border/70 py-3 last:border-b-0"
                  >
                    <span className="font-mono text-[10px] text-primary">{chapter.number}</span>
                    <span className="flex-1 font-display text-xs font-semibold sm:text-sm">
                      {chapter.label}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wide text-muted-foreground sm:text-[9px]">
                      {chapter.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                disabled
                title="Connect your publicly hosted PDF before enabling this button."
                className="flex min-h-11 w-full cursor-not-allowed items-center justify-between gap-4 border border-border bg-muted/50 px-4 py-3 text-left opacity-80"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.13em]">
                  Read the book
                </span>
                <span aria-hidden="true" className="font-mono text-xs">PDF ↗</span>
              </button>
              <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
                Sample button shown inactive until the public PDF link is added.
              </p>
            </div>
          </section>
        </div>

        <footer className="flex flex-col gap-1.5 border-t border-border bg-muted/30 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
            Sample layout · title, cover, chapters & PDF link are replaceable
          </p>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary">
            When ready → publish PDF
          </span>
        </footer>
      </article>
    </main>
  );
}