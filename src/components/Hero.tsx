import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, Sparkles } from "lucide-react";
import { personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 grid-bg"
    >
      {/* Gradient glow */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <motion.div
        aria-hidden
        className="absolute -top-20 right-1/4 -z-10 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="soft" className="gap-1.5 px-3 py-1 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
                </span>
                {personal.availability}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Hi, I'm{" "}
              <span className="gradient-text bg-[length:200%_200%] animate-gradient-pan">
                {personal.name}
              </span>
              <br />
              <span className="text-foreground/90">a {personal.title}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" variant="gradient" className="rounded-full">
                <a href={`mailto:${personal.email}`}>
                  <Mail className="h-4 w-4" />
                  Hire me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={personal.cvPath} download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Based in {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-pink-500" />
                Open to marketing roles
              </span>
            </motion.div>
          </div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative aspect-square w-64 sm:w-72 md:w-80 mx-auto">
              {/* Rotating gradient ring */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-90 blur-xl"
                aria-hidden
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-[2.2rem] bg-[conic-gradient(from_0deg,#ec4899,#a855f7,#6366f1,#ec4899)]"
                aria-hidden
              />
              <div className="absolute inset-0 rounded-[2rem] bg-background p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 dark:from-pink-950/40 dark:via-fuchsia-950/30 dark:to-indigo-950/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[7rem] sm:text-[8rem] md:text-[9rem] font-bold gradient-text leading-none">
                      {personal.initials}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-2 text-xs font-medium shadow-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available
                    </span>
                    <span className="text-muted-foreground">HCMC, VN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-4 hidden md:flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
