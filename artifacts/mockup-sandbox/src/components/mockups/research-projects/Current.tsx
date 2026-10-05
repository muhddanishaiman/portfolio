import './_group.css';
const exampleCode = `measurements <- c(4.2, 4.8, 5.1, 5.6, 6.3)

data.frame(
  n = length(measurements),
  mean = mean(measurements),
  min = min(measurements),
  max = max(measurements)
)`;

const exampleResults = [
  { n: "5", mean: "5.2", min: "4.2", max: "6.3" },
];

function ExtractedCard() {
  return (
    <article className="overflow-hidden border-2 border-primary/40 bg-card shadow-[5px_5px_0_hsl(var(--border))]">
      <header className="border-b border-border/70 bg-primary/5 px-5 py-4">
        <p className="font-mono text-xs tracking-[0.18em] text-primary">
          PROJECT 02 · EXAMPLE / DEMONSTRATION ONLY
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Research R Package — Example
            </h2>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A demonstration of how a statistical research package could be
              presented: a small, reproducible base R example with its output
              shown directly, without a software interface.
            </p>
          </div>
          <ul
            aria-label="Example categories"
            className="flex shrink-0 flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wide"
          >
            {["R Package", "Research", "Example"].map((label) => (
              <li
                key={label}
                className="border border-primary/40 bg-background px-2 py-1 text-primary"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="grid gap-5 bg-muted/30 p-4 sm:p-5 lg:grid-cols-[1.1fr_0.9fr]">
        <section aria-labelledby="research-example-code">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <h3
              id="research-example-code"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Illustrative demo · base R code
            </h3>
            <span className="font-mono text-[10px] text-muted-foreground">
              no package installation
            </span>
          </div>
          <div className="max-w-full overflow-x-auto border-2 border-border bg-background p-3 shadow-inner">
            <pre className="min-w-max font-mono text-xs leading-6 text-foreground sm:text-sm">
              <code>{exampleCode}</code>
            </pre>
          </div>
        </section>

        <section aria-labelledby="research-example-results">
          <h3
            id="research-example-results"
            className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Illustrative demo · base R results
          </h3>
          <div className="overflow-x-auto border-2 border-border bg-background">
            <table className="w-full border-collapse text-left font-mono text-xs text-foreground">
              <caption className="sr-only">
                Illustrative base R summary output for the example measurements
              </caption>
              <thead className="bg-primary/10">
                <tr>
                  {["n", "mean", "min", "max"].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-b border-border px-3 py-2 font-semibold"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exampleResults.map((row) => (
                  <tr key={row.n} className="bg-card">
                    <td className="border-b border-border/70 px-3 py-2">{row.n}</td>
                    <td className="border-b border-border/70 px-3 py-2">{row.mean}</td>
                    <td className="border-b border-border/70 px-3 py-2">{row.min}</td>
                    <td className="border-b border-border/70 px-3 py-2">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 border-l-2 border-primary/50 pl-3 text-xs leading-relaxed text-muted-foreground">
            These values summarize only the five example measurements above;
            they are not research findings.
          </p>
        </section>
      </div>

      <footer className="border-t border-border/70 px-5 py-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          This is a portfolio demonstration, not a published package or research
          claim. For a real project, package-specific CRAN, GitHub, and paper
          links would be added here.
        </p>
      </footer>
    </article>
  );
}

export function Current() { return <div className="min-h-screen bg-background p-6 flex items-center justify-center"><div className="w-full max-w-4xl"><ExtractedCard /></div></div>; }
