import './_group.css';
import './MethodDiagram.css';

const measurements = [4.2, 4.8, 5.1, 5.6, 6.3];

export function MethodDiagram() {
  return (
    <main className="method-stage">
      <article className="method-card" aria-labelledby="method-title">
        <header className="method-header">
          <div className="method-kicker">
            <span>PROJECT 02</span>
            <span className="method-kicker-rule" aria-hidden="true" />
            <span>METHOD NOTE · EXAMPLE ONLY</span>
          </div>
          <div className="method-heading">
            <div>
              <h1 id="method-title">From measurements to summary</h1>
              <p className="method-deck">
                A small, reproducible base R workflow—shown as a method, not a
                research finding.
              </p>
            </div>
            <span className="method-stamp">ILLUSTRATIVE<br />DEMO</span>
          </div>
        </header>

        <section className="method-figure" aria-labelledby="workflow-title">
          <div className="method-section-label">
            <h2 id="workflow-title">The workflow</h2>
            <span>INPUT → CHECK → COMPUTE → RETURN</span>
          </div>

          <div className="method-flow" aria-label="Four-step data workflow">
            <section className="method-step method-step-input">
              <div className="method-step-top">
                <span className="method-index">01</span>
                <span className="method-step-kind">SOURCE</span>
              </div>
              <h3>Numeric input</h3>
              <p className="method-step-copy">Five example measurements</p>
              <div className="method-values" aria-label="Measurements: 4.2, 4.8, 5.1, 5.6, 6.3">
                {measurements.map((value) => <span key={value}>{value.toFixed(1)}</span>)}
              </div>
              <p className="method-micro">vector · length 5</p>
            </section>

            <div className="method-connector" aria-hidden="true">
              <span className="method-connector-word">inspect</span>
              <span className="method-arrow">→</span>
            </div>

            <section className="method-step method-step-check">
              <div className="method-step-top">
                <span className="method-index">02</span>
                <span className="method-step-kind">GUARDRAIL</span>
              </div>
              <h3>Validate</h3>
              <p className="method-step-copy">Confirm values are usable</p>
              <ul className="method-checklist">
                <li><span aria-hidden="true">✓</span> numeric values</li>
                <li><span aria-hidden="true">✓</span> no missing entries</li>
                <li><span aria-hidden="true">✓</span> non-empty input</li>
              </ul>
              <p className="method-micro">stop if a check fails</p>
            </section>

            <div className="method-connector" aria-hidden="true">
              <span className="method-connector-word">summarize</span>
              <span className="method-arrow">→</span>
            </div>

            <section className="method-step method-step-compute">
              <div className="method-step-top">
                <span className="method-index">03</span>
                <span className="method-step-kind">TRANSFORM</span>
              </div>
              <h3>Calculate</h3>
              <p className="method-step-copy">Apply fixed summary functions</p>
              <div className="method-formulas">
                <span><b>n</b><code>length(x)</code></span>
                <span><b>mean</b><code>mean(x)</code></span>
                <span><b>range</b><code>min(x), max(x)</code></span>
              </div>
              <p className="method-micro">same input → same calculation</p>
            </section>

            <div className="method-connector" aria-hidden="true">
              <span className="method-connector-word">return</span>
              <span className="method-arrow">→</span>
            </div>

            <section className="method-step method-step-output">
              <div className="method-step-top">
                <span className="method-index">04</span>
                <span className="method-step-kind">OUTPUT</span>
              </div>
              <h3>Reproducible table</h3>
              <p className="method-step-copy">One row, one record</p>
              <table className="method-result-table">
                <caption className="method-sr-only">Illustrative summary output</caption>
                <thead>
                  <tr><th scope="col">n</th><th scope="col">mean</th><th scope="col">min</th><th scope="col">max</th></tr>
                </thead>
                <tbody>
                  <tr><td>5</td><td>5.2</td><td>4.2</td><td>6.3</td></tr>
                </tbody>
              </table>
              <p className="method-micro">tidy, inspectable result</p>
            </section>
          </div>
        </section>

        <section className="method-reading" aria-label="How to read this method">
          <div className="method-reading-mark" aria-hidden="true">i</div>
          <p>
            <strong>What this demonstrates</strong>
            <span>Input checks make assumptions visible; a fixed summary turns valid measurements into a compact table.</span>
          </p>
          <p className="method-scope">
            Values are illustrative only.<br />Not published research or a package release.
          </p>
        </section>

        <footer className="method-footer">
          <span>RESEARCH R PACKAGE — CONCEPT EXAMPLE</span>
          <span>BASE R · NO INSTALLATION REQUIRED</span>
        </footer>
      </article>
    </main>
  );
}