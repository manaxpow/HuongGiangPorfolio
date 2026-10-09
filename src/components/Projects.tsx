import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="work" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Campaigns & <span className="gradient-text">case studies</span>.
              </h2>
            </div>
            <p className="text-muted-foreground md:max-w-sm">
              A mix of personal, freelance, and course projects — each tied to
              a real metric.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                {/* Accent gradient blob */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <Badge variant="soft" className="text-xs">
                    {p.type}
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground tabular-nums">
                    {p.period}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-2xl font-bold leading-tight">
                  {p.title}
                </h3>
                <p className="relative mt-3 text-muted-foreground">
                  {p.summary}
                </p>

                <ul className="relative mt-5 space-y-1.5">
                  {p.impact.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Sparkles className="h-3.5 w-3.5 mt-1 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-primary opacity-70 transition-opacity group-hover:opacity-100">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
