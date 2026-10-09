import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { nav, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
  name: string;
}

export function Navbar({ dark, onToggleTheme, name }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // determine active section
      const sections = nav.map((n) => n.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white text-sm shadow-md transition-transform group-hover:scale-110">
            {personal.initials}
          </span>
          <span className="hidden sm:inline">
            {name}
            <span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-2 pt-12">
              <SheetClose asChild>
                <button
                  className="absolute right-4 top-4 rounded-md p-1 opacity-70 hover:opacity-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <a
                href={`mailto:${personal.email}`}
                className="mt-4 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get in touch
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
