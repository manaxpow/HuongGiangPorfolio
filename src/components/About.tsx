import { Sparkles, BarChart3, Users, Rocket, type LucideIcon } from "lucide-react";
import { about } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BarChart3,
  Users,
  Rocket,
};

export function About() {
  return (
    <section id="about" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Marketing operator who <span className="gradient-text">ships</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {about.highlights.map((h) => {
                const Icon = iconMap[h.icon] ?? Sparkles;
                return (
                  <div
                    key={h.title}
                    className="group rounded-2xl border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
