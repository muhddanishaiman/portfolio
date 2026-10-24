# Math at Penn State

## Edit the book

- `main.tex` contains the title, author, preface, and chapter list.
- `chapters/01-foundations.tex` contains a short starter chapter. Replace or expand it with your notes.
- Add new `.tex` files in `chapters/`, then include them with `\input{chapters/your-chapter}` in `main.tex`.

## Compile the public PDF

From the project root, run:

```sh
npm run book:build
```

This uses **Tectonic** to compile real LaTeX, including cross-references and the table of contents. Tectonic is included in the project's system dependencies. The first compilation needs internet access to download its TeX bundle; later compilations reuse its cache.

The same PDF is written to:

- `client/public/books/math-at-penn-state.pdf` — Replit app
- `docs/books/math-at-penn-state.pdf` — GitHub Pages source
- `artifacts/mockup-sandbox/public/books/math-at-penn-state.pdf` — canvas preview

For automatic recompilation while writing, leave this command running in another shell:

```sh
npm run book:watch
```

The watcher recompiles when any `.tex` file in this book changes. It reports errors and keeps the last successfully compiled public PDF if the LaTeX does not compile. Reload the PDF tab after a successful rebuild.

`npm run build` also compiles the book before building the app. Compilation errors stop the build rather than publishing a stale PDF. For GitHub Pages, compile first, then include the updated `docs/books/math-at-penn-state.pdf` when publishing the `docs` site. Editing the source in this workspace does not by itself update an already published website.
