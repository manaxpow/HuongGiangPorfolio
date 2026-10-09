import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Experience
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Where I've <span className="gradient-text">made impact</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/40 via-fuchsia-500/30 to-transparent"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-10 pl-12 md:pl-0 ${
                    i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 rounded-full bg-primary animate-pulse-soft" />
                    <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  {/* Left spacer (date) */}
                  <div
                    className={`hidden md:block ${
                      i % 2 === 1 ? "md:pl-12" : "md:text-right md:pr-12"
                    }`}
                  >
                    <div className="sticky top-24 space-y-2">
                      <Badge variant="gradient" className="text-xs">
                        {exp.period}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground md:justify-end">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="md:px-6">
                    <div className="group relative rounded-2xl border bg-card p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground md:hidden mb-2">
                        <span>{exp.period}</span>
                        <span>·</span>
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
