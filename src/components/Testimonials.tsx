import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="section bg-muted/30">
      <div className="container-tight">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              References
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              What people <span className="gradient-text">say</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Selected references from managers and partners — full contacts
              available on request.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative rounded-2xl border bg-card p-6 md:p-7 transition-all duration-300 hover:shadow-lg"
              >
                <Quote className="absolute -top-3 left-6 h-7 w-7 rounded-full bg-primary p-1.5 text-primary-foreground" />
                <blockquote className="mt-3 text-lg leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white font-semibold">
                    {t.author
                      .replace(/Placeholder\s*·\s*/i, "")
                      .split(" ")
                      .map((s) => s[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
