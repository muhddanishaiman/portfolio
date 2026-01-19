import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Portfolio" },
    { href: "/knowledge", label: "Knowledge Vault" },
    { href: "/learning", label: "Learning Path" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Visual Effects */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />
      <div className="paper-texture fixed inset-0 pointer-events-none z-40" />

      {/* Header */}
      <header className="relative z-30 w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold tracking-tight text-primary font-display dark:text-glow">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            DEV_PORTFOLIO
            <span className="hidden sm:inline text-sm ml-2 opacity-60 font-mono tracking-widest uppercase">
              // v1.0.0
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 font-mono text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={clsx(
                  "relative py-1 px-1 transition-colors hover:text-primary",
                  location === item.href 
                    ? "text-primary font-bold border-b-2 border-primary" 
                    : "text-muted-foreground"
                )}>
                  {location === item.href && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute -left-3 top-1 text-primary opacity-50"
                    >
                      {">"}
                    </motion.span>
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden relative z-30 px-4 pb-4 border-b border-border/40">
        <ul className="flex justify-around font-mono text-xs">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={clsx(
                "block py-2 px-3 rounded-md transition-colors",
                location === item.href 
                  ? "bg-primary/10 text-primary font-bold" 
                  : "text-muted-foreground"
              )}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-30 w-full border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Retro Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
