import { ReactNode } from "react";
import { clsx } from "clsx";

interface RetroCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "terminal" | "bordered";
}

export function RetroCard({ title, children, className, variant = "default" }: RetroCardProps) {
  return (
    <div className={clsx(
      "group relative overflow-hidden transition-all duration-300",
      // Light mode: Paper card
      "bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:-translate-y-0.5",
      // Dark mode: Terminal block
      "dark:bg-secondary/20 dark:border-primary/30 dark:shadow-[0_0_10px_rgba(74,246,111,0.05)] dark:hover:border-primary/60 dark:hover:shadow-[0_0_15px_rgba(74,246,111,0.1)]",
      className
    )}>
      {/* Header Bar */}
      {title && (
        <div className="bg-muted/50 border-b border-border p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full border border-foreground/20 bg-destructive/50" />
            <div className="w-2.5 h-2.5 rounded-full border border-foreground/20 bg-accent/50" />
            <div className="w-2.5 h-2.5 rounded-full border border-foreground/20 bg-primary/50" />
          </div>
          <h3 className="ml-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground truncate">
            {title}
          </h3>
        </div>
      )}
      
      {/* Content */}
      <div className="p-5">
        {children}
      </div>

      {/* Corner Accents for Dark Mode */}
      <div className="hidden dark:block absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-50" />
      <div className="hidden dark:block absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-50" />
      <div className="hidden dark:block absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-50" />
      <div className="hidden dark:block absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-50" />
    </div>
  );
}
