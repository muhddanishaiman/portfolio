import { spawn } from "node:child_process";
import { watch } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, rename, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const book = path.join(root, "books/math-at-penn-state");
const destinations = [
  "client/public/books",
  "docs/books",
  "artifacts/mockup-sandbox/public/books",
];

async function compile() {
  const output = await mkdtemp(path.join(tmpdir(), "math-at-penn-state-"));
  try {
    await new Promise((resolve, reject) => {
      const compiler = spawn("tectonic", [
        "--untrusted", "--outdir", output, path.join(book, "main.tex"),
      ], { cwd: book, stdio: "inherit" });
      compiler.once("error", (error) => reject(new Error(
        `Could not start Tectonic. Ensure the project's tectonic system dependency is installed: ${error.message}`,
      )));
      compiler.once("exit", (code, signal) => {
        if (code === 0) resolve();
        else reject(new Error(`LaTeX compilation failed (${signal ?? code}). Public PDFs were not changed.`));
      });
    });
    const pdf = path.join(output, "main.pdf");
    const bytes = await readFile(pdf);
    if (bytes.subarray(0, 5).toString() !== "%PDF-") {
      throw new Error("Compiler output is not a PDF. Public PDFs were not changed.");
    }
    for (const destination of destinations) {
      const directory = path.join(root, destination);
      await mkdir(directory, { recursive: true });
      const target = path.join(directory, "math-at-penn-state.pdf");
      const staging = `${target}.tmp`;
      await copyFile(pdf, staging);
      await rename(staging, target);
    }
    console.log("Book compiled and updated for the app, GitHub Pages, and canvas preview.");
  } finally {
    await rm(output, { recursive: true, force: true });
  }
}

if (process.argv.includes("--watch")) {
  let timer;
  let running = false;
  let pending = false;
  async function rebuild() {
    if (running) { pending = true; return; }
    running = true;
    try {
      do {
        pending = false;
        try { await compile(); }
        catch (error) { console.error(error.message); }
      } while (pending);
    } finally { running = false; }
  }
  const watcher = watch(book, { recursive: true }, (_event, filename) => {
    if (!filename?.endsWith(".tex")) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 250);
  });
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.once(signal, () => {
      clearTimeout(timer);
      watcher.close();
      process.exit(0);
    });
  }
  await rebuild();
  console.log("Watching books/math-at-penn-state for LaTeX edits...");
} else {
  try { await compile(); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
