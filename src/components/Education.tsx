import { GraduationCap, Award } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="section scroll-mt-nav">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Education
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Learning & <span className="gradient-text">credentials</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[1.3fr_1fr] gap-6">
          {/* Degree card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 md:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-gradient opacity-15 blur-3xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    {education.school}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Major · {education.major}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge variant="soft">GPA {education.gpa}</Badge>
                    <Badge variant="outline">First-Class Honours</Badge>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {education.honors.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certs */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Verified, current credentials
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {education.certs.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center justify-between rounded-xl border bg-background px-4 py-3"
                  >
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {c.issuer}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      Verified
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
