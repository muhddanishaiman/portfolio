import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const simulationUrl = "https://muhddanishaiman.github.io/simple-mips-simulation/";

export default function Projects() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="space-y-8 pb-20">
      <div className="border-b-4 border-double border-primary/20 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">
          PROJECTS
        </h1>
        <p className="font-serif text-muted-foreground mt-2">
          Here are some of my projects that I have done
        </p>
      </div>

      <motion.article
        className="overflow-hidden border-2 border-primary/40 bg-card shadow-[5px_5px_0_hsl(var(--border))]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex flex-col gap-3 border-b border-border/70 bg-primary/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-primary">PROJECT 01</p>
            <h2 className="mt-1 font-display text-xl font-bold text-foreground">
              Simple MIPS Simulation
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A browser-based simulation of the MIPS instruction set.
            </p>
          </div>
          <a
            href={simulationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border-2 border-primary bg-background px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Open simulation in a new tab
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
        <div className="bg-muted/30 p-3 sm:p-5">
          <div className="overflow-hidden border-2 border-border bg-background shadow-inner">
            <video
              key={prefersReducedMotion ? "still-preview" : "looping-preview"}
              src="/media/mips-demo.mp4"
              poster="/media/mips-demo-poster.jpg"
              preload={prefersReducedMotion ? "none" : "metadata"}
              aria-label="Looping recorded demo of the Simple MIPS Simulation"
              autoPlay={!prefersReducedMotion}
              loop
              muted
              playsInline
              className="block aspect-video w-full bg-background object-cover"
            />
          </div>
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Looping simulation demo
          </p>
        </div>
      </motion.article>
    </div>
  );
}